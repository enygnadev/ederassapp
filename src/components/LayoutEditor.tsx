"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Layer, RGBColor, LayoutEditConfig } from '@/types';
import { Plus, Trash2, Eye, EyeOff, Copy, Save } from 'lucide-react';

interface LayoutEditorProps {
  initialLayout?: LayoutEditConfig;
  onSave?: (layout: LayoutEditConfig) => void;
}

const rgbToString = (color: RGBColor) => `rgb(${color.r},${color.g},${color.b})`;
const rgbToHex = (color: RGBColor) => {
  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
};
const hexToRgb = (hex: string): RGBColor => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
};

export function LayoutEditor({ initialLayout, onSave }: LayoutEditorProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [layers, setLayers] = useState<Layer[]>(initialLayout?.layers || []);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState<RGBColor>(
    initialLayout?.backgroundColor || { r: 2, g: 12, b: 27 }
  );
  const [layoutName, setLayoutName] = useState(initialLayout?.name || 'Layout Padrão');
  const [canvasSize, setCanvasSize] = useState({ width: initialLayout?.canvasWidth || 1200, height: initialLayout?.canvasHeight || 600 });

  const selectedLayer = layers.find(l => l.id === selectedLayerId);

  const addLayer = (type: Layer['type']) => {
    const newLayer: Layer = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      label: `${type} ${layers.length + 1}`,
      visible: true,
      x: 50,
      y: 50,
      width: 200,
      height: 100,
      rotation: 0,
      opacity: 1,
      zIndex: layers.length,
      text: type === 'text' ? 'Novo Texto' : undefined,
      fontSize: 16,
      fontFamily: 'inter',
      fontColor: { r: 255, g: 255, b: 255 },
      fontWeight: 'normal',
      textAlign: 'left',
      backgroundColor: { r: 30, g: 50, b: 100 },
      borderColor: { r: 100, g: 150, b: 200 },
      borderWidth: 0,
      borderRadius: 0,
    };
    setLayers([...layers, newLayer]);
    setSelectedLayerId(newLayer.id);
  };

  const updateLayer = (id: string, updates: Partial<Layer>) => {
    setLayers(layers.map(l => l.id === id ? { ...l, ...updates } : l));
  };

  const deleteLayer = (id: string) => {
    setLayers(layers.filter(l => l.id !== id));
    if (selectedLayerId === id) setSelectedLayerId(null);
  };

  const duplicateLayer = (id: string) => {
    const layer = layers.find(l => l.id === id);
    if (!layer) return;
    const newLayer = {
      ...layer,
      id: Math.random().toString(36).substr(2, 9),
      x: layer.x + 20,
      y: layer.y + 20,
      label: `${layer.label} (cópia)`,
    };
    setLayers([...layers, newLayer]);
  };

  const moveLayer = (id: string, direction: 'up' | 'down') => {
    const index = layers.findIndex(l => l.id === id);
    if (direction === 'up' && index < layers.length - 1) {
      const newLayers = [...layers];
      [newLayers[index], newLayers[index + 1]] = [newLayers[index + 1], newLayers[index]];
      newLayers[index].zIndex = index;
      newLayers[index + 1].zIndex = index + 1;
      setLayers(newLayers);
    } else if (direction === 'down' && index > 0) {
      const newLayers = [...layers];
      [newLayers[index], newLayers[index - 1]] = [newLayers[index - 1], newLayers[index]];
      newLayers[index].zIndex = index;
      newLayers[index - 1].zIndex = index - 1;
      setLayers(newLayers);
    }
  };

  const ColorPicker = ({ label, color, onChange }: { label: string; color: RGBColor; onChange: (c: RGBColor) => void }) => (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-slate-300">{label}</label>
      <div className="flex gap-2 items-center">
        <input
          type="color"
          value={rgbToHex(color)}
          onChange={(e) => onChange(hexToRgb(e.target.value))}
          className="w-12 h-10 rounded border border-sky-500/30 cursor-pointer"
        />
        <div className="flex gap-1 flex-1">
          {['r', 'g', 'b'].map((component) => (
            <input
              key={component}
              type="range"
              min="0"
              max="255"
              value={color[component as keyof RGBColor]}
              onChange={(e) => onChange({ ...color, [component]: parseInt(e.target.value) })}
              className="flex-1 h-8"
            />
          ))}
        </div>
        <div className="text-xs text-slate-400 w-16">
          {color.r},{color.g},{color.b}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-full gap-6 bg-[#020c1b] p-6">
      {/* Painel de Ferramentas */}
      <div className="w-80 space-y-6 overflow-y-auto">
        <div>
          <label className="text-sm font-semibold text-slate-300 block mb-2">Nome do Layout</label>
          <input
            type="text"
            value={layoutName}
            onChange={(e) => setLayoutName(e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-sky-500/20 rounded text-white text-sm mb-3"
          />
          <button
            onClick={() => {
              onSave?.({
                id: initialLayout?.id || 'default-layout',
                name: layoutName,
                description: initialLayout?.description || 'Layout editado',
                canvasWidth: canvasSize.width,
                canvasHeight: canvasSize.height,
                backgroundColor,
                layers,
                createdAt: initialLayout?.createdAt || new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                createdBy: initialLayout?.createdBy || 'admin'
              });
            }}
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-500 transition font-bold flex items-center justify-center gap-2"
          >
            <Save className="h-4 w-4" />
            Salvar Layout
          </button>
        </div>

        {/* Tamanho do Canvas */}
        <div className="glass-panel p-4 rounded-lg border border-sky-500/20 space-y-3">
          <h3 className="text-sm font-bold text-sky-300">📐 Tamanho do Canvas</h3>
          <div className="space-y-2">
            <div>
              <label className="text-xs text-slate-400">Largura: {canvasSize.width}px</label>
              <input
                type="range"
                min="400"
                max="2000"
                value={canvasSize.width}
                onChange={(e) => setCanvasSize({ ...canvasSize, width: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400">Altura: {canvasSize.height}px</label>
              <input
                type="range"
                min="300"
                max="1200"
                value={canvasSize.height}
                onChange={(e) => setCanvasSize({ ...canvasSize, height: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Cor de Fundo do Canvas */}
        <div className="glass-panel p-4 rounded-lg border border-sky-500/20">
          <h3 className="text-sm font-bold text-sky-300 mb-3">🎨 Fundo</h3>
          <ColorPicker label="Cor de Fundo" color={backgroundColor} onChange={setBackgroundColor} />
        </div>

        {/* Adicionar Camadas */}
        <div className="glass-panel p-4 rounded-lg border border-sky-500/20">
          <h3 className="text-sm font-bold text-sky-300 mb-3">➕ Adicionar Elemento</h3>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => addLayer('text')} className="px-2 py-2 bg-blue-600 text-white rounded text-xs hover:bg-blue-500 transition">📝 Texto</button>
            <button onClick={() => addLayer('shape')} className="px-2 py-2 bg-blue-600 text-white rounded text-xs hover:bg-blue-500 transition">⬜ Forma</button>
            <button onClick={() => addLayer('button')} className="px-2 py-2 bg-blue-600 text-white rounded text-xs hover:bg-blue-500 transition">🔘 Botão</button>
            <button onClick={() => addLayer('image')} className="px-2 py-2 bg-blue-600 text-white rounded text-xs hover:bg-blue-500 transition">🖼️ Imagem</button>
          </div>
        </div>

        {/* Camadas */}
        <div className="glass-panel p-4 rounded-lg border border-sky-500/20">
          <h3 className="text-sm font-bold text-sky-300 mb-3">📚 Camadas ({layers.length})</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {layers.map((layer) => (
              <div
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`p-2 rounded cursor-pointer border transition-all ${
                  selectedLayerId === layer.id
                    ? 'bg-sky-600/30 border-sky-500'
                    : 'bg-white/5 border-sky-500/20 hover:border-sky-500/50'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white truncate">{layer.label}</p>
                    <p className="text-[10px] text-slate-400">{layer.type}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      updateLayer(layer.id, { visible: !layer.visible });
                    }}
                    className="p-1 hover:bg-white/10 rounded"
                  >
                    {layer.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      duplicateLayer(layer.id);
                    }}
                    className="p-1 hover:bg-white/10 rounded"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteLayer(layer.id);
                    }}
                    className="p-1 hover:bg-red-600/30 rounded text-red-400"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Canvas e Editor de Propriedades */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Canvas */}
        <div className="flex-1 glass-panel rounded-lg border border-sky-500/20 p-6 overflow-auto">
          <div
            ref={canvasRef}
            className="relative mx-auto"
            style={{
              width: canvasSize.width,
              height: canvasSize.height,
              backgroundColor: rgbToString(backgroundColor),
              borderRadius: '8px',
              boxShadow: '0 0 30px rgba(0,166,225,0.2)',
            }}
          >
            {layers.map((layer) => (
              layer.visible && (
                <div
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`absolute cursor-pointer transition-all ${
                    selectedLayerId === layer.id
                      ? 'ring-2 ring-sky-400 ring-offset-2'
                      : 'hover:ring-2 hover:ring-sky-300 hover:ring-offset-1'
                  }`}
                  style={{
                    left: layer.x,
                    top: layer.y,
                    width: layer.width,
                    height: layer.height,
                    transform: `rotate(${layer.rotation}deg)`,
                    opacity: layer.opacity,
                    zIndex: layer.zIndex,
                    backgroundColor: rgbToString(layer.backgroundColor || { r: 255, g: 255, b: 255 }),
                    color: rgbToString(layer.fontColor || { r: 0, g: 0, b: 0 }),
                    fontSize: layer.fontSize,
                    fontFamily: layer.fontFamily,
                    fontWeight: layer.fontWeight,
                    textAlign: layer.textAlign,
                    border: layer.borderWidth ? `${layer.borderWidth}px solid ${rgbToString(layer.borderColor || { r: 0, g: 0, b: 0 })}` : 'none',
                    borderRadius: layer.borderRadius,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    overflow: 'hidden',
                  }}
                >
                  {layer.type === 'text' && <span className="truncate">{layer.text}</span>}
                  {layer.type === 'image' && layer.imageUrl && <img src={layer.imageUrl} alt="layer" className="w-full h-full object-cover" />}
                </div>
              )
            ))}
          </div>
        </div>

        {/* Propriedades da Camada Selecionada */}
        {selectedLayer && (
          <div className="glass-panel rounded-lg border border-sky-500/20 p-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-sky-300 mb-4">⚙️ Propriedades</h3>
            </div>

            {/* Posição e Tamanho */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300">X</label>
                <input
                  type="number"
                  value={selectedLayer.x}
                  onChange={(e) => updateLayer(selectedLayer.id, { x: parseInt(e.target.value) })}
                  className="w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-300">Y</label>
                <input
                  type="number"
                  value={selectedLayer.y}
                  onChange={(e) => updateLayer(selectedLayer.id, { y: parseInt(e.target.value) })}
                  className="w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-300">Largura</label>
                <input
                  type="number"
                  value={selectedLayer.width}
                  onChange={(e) => updateLayer(selectedLayer.id, { width: parseInt(e.target.value) })}
                  className="w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-300">Altura</label>
                <input
                  type="number"
                  value={selectedLayer.height}
                  onChange={(e) => updateLayer(selectedLayer.id, { height: parseInt(e.target.value) })}
                  className="w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                />
              </div>
            </div>

            {/* Rotação e Opacidade */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300">Rotação: {selectedLayer.rotation}°</label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={selectedLayer.rotation}
                  onChange={(e) => updateLayer(selectedLayer.id, { rotation: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-300">Opacidade: {Math.round(selectedLayer.opacity * 100)}%</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={selectedLayer.opacity}
                  onChange={(e) => updateLayer(selectedLayer.id, { opacity: parseFloat(e.target.value) })}
                  className="w-full"
                />
              </div>
            </div>

            {/* Propriedades de Texto */}
            {selectedLayer.type === 'text' && (
              <div className="space-y-3 pt-4 border-t border-sky-500/20">
                <h4 className="font-semibold text-sky-300">📝 Texto</h4>
                <textarea
                  value={selectedLayer.text || ''}
                  onChange={(e) => updateLayer(selectedLayer.id, { text: e.target.value })}
                  className="w-full px-3 py-2 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                  rows={3}
                />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400">Tamanho</label>
                    <input
                      type="number"
                      value={selectedLayer.fontSize}
                      onChange={(e) => updateLayer(selectedLayer.id, { fontSize: parseInt(e.target.value) })}
                      className="w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">Peso</label>
                    <select
                      value={selectedLayer.fontWeight}
                      onChange={(e) => updateLayer(selectedLayer.id, { fontWeight: e.target.value as any })}
                      className="w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                    >
                      <option>normal</option>
                      <option>600</option>
                      <option>bold</option>
                    </select>
                  </div>
                </div>
                <ColorPicker label="Cor do Texto" color={selectedLayer.fontColor || { r: 0, g: 0, b: 0 }} onChange={(c) => updateLayer(selectedLayer.id, { fontColor: c })} />
              </div>
            )}

            {/* Propriedades de Fundo */}
            <div className="space-y-3 pt-4 border-t border-sky-500/20">
              <h4 className="font-semibold text-sky-300">🎨 Estilo</h4>
              <ColorPicker label="Cor de Fundo" color={selectedLayer.backgroundColor || { r: 255, g: 255, b: 255 }} onChange={(c) => updateLayer(selectedLayer.id, { backgroundColor: c })} />
              <ColorPicker label="Cor da Borda" color={selectedLayer.borderColor || { r: 0, g: 0, b: 0 }} onChange={(c) => updateLayer(selectedLayer.id, { borderColor: c })} />
              <div>
                <label className="text-xs text-slate-400">Largura da Borda</label>
                <input
                  type="number"
                  value={selectedLayer.borderWidth}
                  onChange={(e) => updateLayer(selectedLayer.id, { borderWidth: parseInt(e.target.value) })}
                  className="w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400">Canto Arredondado</label>
                <input
                  type="number"
                  value={selectedLayer.borderRadius}
                  onChange={(e) => updateLayer(selectedLayer.id, { borderRadius: parseInt(e.target.value) })}
                  className="w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
