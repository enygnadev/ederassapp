import React from 'react';
import { useCart } from '../context/CartContext';
import { MOCK_SERVICES } from '../types';
import { Plus, Check, FileText } from 'lucide-react';

export const ServiceCatalog: React.FC = () => {
  const { addToCart, cart } = useCart();
  const [addedIds, setAddedIds] = React.useState<string[]>([]);

  const handleAdd = (service: typeof MOCK_SERVICES[0]) => {
    addToCart(service);
    // Show visual feedback
    setAddedIds(prev => [...prev, service.id]);
    setTimeout(() => {
        setAddedIds(prev => prev.filter(id => id !== service.id));
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Catálogo de Serviços</h1>
        <p className="text-slate-300 max-w-2xl">Selecione os serviços que você precisa. Os documentos serão solicitados na etapa de pagamento.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_SERVICES.map((service) => (
          <div key={service.id} className="glass-panel rounded-2xl overflow-hidden flex flex-col hover:transform hover:-translate-y-1 transition-all duration-300 group">
            <div className="relative h-52 overflow-hidden">
               <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
               <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wide shadow-sm border border-white/50">
                 {service.category === 'bureaucracy' ? 'Documentação' : service.category === 'insurance' ? 'Seguro' : 'Licença'}
               </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{service.title}</h3>
              <p className="text-sm text-slate-600 mb-5 flex-grow line-clamp-3">{service.description}</p>
              
              <div className="mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2 flex items-center gap-1">
                    <FileText className="h-3 w-3" /> Documentos Necessários:
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {service.requiredDocuments.slice(0, 3).map((doc, idx) => (
                        <span key={idx} className="text-[10px] bg-white text-slate-600 px-2 py-1 rounded-md border border-slate-200 font-medium">
                            {doc}
                        </span>
                    ))}
                    {service.requiredDocuments.length > 3 && (
                        <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-md border border-slate-200">
                            +{service.requiredDocuments.length - 3}
                        </span>
                    )}
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200/50">
                <span className="text-2xl font-bold text-blue-700">
                  R$ {service.price.toFixed(2)}
                </span>
                <button 
                  onClick={() => handleAdd(service)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md ${
                    addedIds.includes(service.id) 
                        ? 'bg-green-600 text-white shadow-green-500/30' 
                        : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/30'
                  }`}
                >
                  {addedIds.includes(service.id) ? (
                      <>
                        <Check className="h-4 w-4" /> Adicionado
                      </>
                  ) : (
                      <>
                        <Plus className="h-4 w-4" /> Adicionar
                      </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};