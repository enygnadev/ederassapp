(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/LayoutEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutEditor",
    ()=>LayoutEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const rgbToString = (color)=>`rgb(${color.r},${color.g},${color.b})`;
const rgbToHex = (color)=>{
    const toHex = (n)=>n.toString(16).padStart(2, '0');
    return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
};
const hexToRgb = (hex)=>{
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {
        r: 0,
        g: 0,
        b: 0
    };
};
function LayoutEditor(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(120);
    if ($[0] !== "aecb12732ded2e004fd898fb1077ca4f8cbaf674dfdbdd5848ae8059f7fde4c1") {
        for(let $i = 0; $i < 120; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aecb12732ded2e004fd898fb1077ca4f8cbaf674dfdbdd5848ae8059f7fde4c1";
    }
    const { initialLayout, onSave } = t0;
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] !== initialLayout?.layers) {
        t1 = initialLayout?.layers || [];
        $[1] = initialLayout?.layers;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [layers, setLayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [selectedLayerId, setSelectedLayerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    if ($[3] !== initialLayout?.backgroundColor) {
        t2 = initialLayout?.backgroundColor || {
            r: 2,
            g: 12,
            b: 27
        };
        $[3] = initialLayout?.backgroundColor;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const [backgroundColor, setBackgroundColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [layoutName, setLayoutName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialLayout?.name || "Layout Padr\xE3o");
    const t3 = initialLayout?.canvasWidth || 1200;
    const t4 = initialLayout?.canvasHeight || 600;
    let t5;
    if ($[5] !== t3 || $[6] !== t4) {
        t5 = {
            width: t3,
            height: t4
        };
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const [canvasSize, setCanvasSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    let t6;
    if ($[8] !== layers || $[9] !== selectedLayerId) {
        let t7;
        if ($[11] !== selectedLayerId) {
            t7 = ({
                "LayoutEditor[layers.find()]": (l)=>l.id === selectedLayerId
            })["LayoutEditor[layers.find()]"];
            $[11] = selectedLayerId;
            $[12] = t7;
        } else {
            t7 = $[12];
        }
        t6 = layers.find(t7);
        $[8] = layers;
        $[9] = selectedLayerId;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const selectedLayer = t6;
    let t7;
    if ($[13] !== layers) {
        t7 = ({
            "LayoutEditor[addLayer]": (type)=>{
                const newLayer = {
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
                    text: type === "text" ? "Novo Texto" : undefined,
                    fontSize: 16,
                    fontFamily: "inter",
                    fontColor: {
                        r: 255,
                        g: 255,
                        b: 255
                    },
                    fontWeight: "normal",
                    textAlign: "left",
                    backgroundColor: {
                        r: 30,
                        g: 50,
                        b: 100
                    },
                    borderColor: {
                        r: 100,
                        g: 150,
                        b: 200
                    },
                    borderWidth: 0,
                    borderRadius: 0
                };
                setLayers([
                    ...layers,
                    newLayer
                ]);
                setSelectedLayerId(newLayer.id);
            }
        })["LayoutEditor[addLayer]"];
        $[13] = layers;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    const addLayer = t7;
    let t8;
    if ($[15] !== layers) {
        t8 = ({
            "LayoutEditor[updateLayer]": (id, updates)=>{
                setLayers(layers.map({
                    "LayoutEditor[updateLayer > layers.map()]": (l_0)=>l_0.id === id ? {
                            ...l_0,
                            ...updates
                        } : l_0
                }["LayoutEditor[updateLayer > layers.map()]"]));
            }
        })["LayoutEditor[updateLayer]"];
        $[15] = layers;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    const updateLayer = t8;
    let t9;
    if ($[17] !== layers || $[18] !== selectedLayerId) {
        t9 = ({
            "LayoutEditor[deleteLayer]": (id_0)=>{
                setLayers(layers.filter({
                    "LayoutEditor[deleteLayer > layers.filter()]": (l_1)=>l_1.id !== id_0
                }["LayoutEditor[deleteLayer > layers.filter()]"]));
                if (selectedLayerId === id_0) {
                    setSelectedLayerId(null);
                }
            }
        })["LayoutEditor[deleteLayer]"];
        $[17] = layers;
        $[18] = selectedLayerId;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    const deleteLayer = t9;
    let t10;
    if ($[20] !== layers) {
        t10 = ({
            "LayoutEditor[duplicateLayer]": (id_1)=>{
                const layer = layers.find({
                    "LayoutEditor[duplicateLayer > layers.find()]": (l_2)=>l_2.id === id_1
                }["LayoutEditor[duplicateLayer > layers.find()]"]);
                if (!layer) {
                    return;
                }
                const newLayer_0 = {
                    ...layer,
                    id: Math.random().toString(36).substr(2, 9),
                    x: layer.x + 20,
                    y: layer.y + 20,
                    label: `${layer.label} (cópia)`
                };
                setLayers([
                    ...layers,
                    newLayer_0
                ]);
            }
        })["LayoutEditor[duplicateLayer]"];
        $[20] = layers;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    const duplicateLayer = t10;
    const ColorPicker = _LayoutEditorColorPicker;
    let t11;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-semibold text-slate-300 block mb-2",
            children: "Nome do Layout"
        }, void 0, false, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "LayoutEditor[<input>.onChange]": (e_1)=>setLayoutName(e_1.target.value)
        })["LayoutEditor[<input>.onChange]"];
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== layoutName) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: layoutName,
            onChange: t12,
            className: "w-full px-3 py-2 bg-white/5 border border-sky-500/20 rounded text-white text-sm mb-3"
        }, void 0, false, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[24] = layoutName;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== backgroundColor || $[27] !== canvasSize.height || $[28] !== canvasSize.width || $[29] !== initialLayout?.createdAt || $[30] !== initialLayout?.createdBy || $[31] !== initialLayout?.description || $[32] !== initialLayout?.id || $[33] !== layers || $[34] !== layoutName || $[35] !== onSave) {
        t14 = ({
            "LayoutEditor[<button>.onClick]": ()=>{
                onSave?.({
                    id: initialLayout?.id || "default-layout",
                    name: layoutName,
                    description: initialLayout?.description || "Layout editado",
                    canvasWidth: canvasSize.width,
                    canvasHeight: canvasSize.height,
                    backgroundColor,
                    layers,
                    createdAt: initialLayout?.createdAt || new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    createdBy: initialLayout?.createdBy || "admin"
                });
            }
        })["LayoutEditor[<button>.onClick]"];
        $[26] = backgroundColor;
        $[27] = canvasSize.height;
        $[28] = canvasSize.width;
        $[29] = initialLayout?.createdAt;
        $[30] = initialLayout?.createdBy;
        $[31] = initialLayout?.description;
        $[32] = initialLayout?.id;
        $[33] = layers;
        $[34] = layoutName;
        $[35] = onSave;
        $[36] = t14;
    } else {
        t14 = $[36];
    }
    let t15;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[37] = t15;
    } else {
        t15 = $[37];
    }
    let t16;
    if ($[38] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t14,
            className: "w-full px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-500 transition font-bold flex items-center justify-center gap-2",
            children: [
                t15,
                "Salvar Layout"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[38] = t14;
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    let t17;
    if ($[40] !== t13 || $[41] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, this);
        $[40] = t13;
        $[41] = t16;
        $[42] = t17;
    } else {
        t17 = $[42];
    }
    let t18;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-bold text-sky-300",
            children: "📐 Tamanho do Canvas"
        }, void 0, false, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] !== canvasSize.width) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs text-slate-400",
            children: [
                "Largura: ",
                canvasSize.width,
                "px"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[44] = canvasSize.width;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== canvasSize) {
        t20 = ({
            "LayoutEditor[<input>.onChange]": (e_2)=>setCanvasSize({
                    ...canvasSize,
                    width: parseInt(e_2.target.value)
                })
        })["LayoutEditor[<input>.onChange]"];
        $[46] = canvasSize;
        $[47] = t20;
    } else {
        t20 = $[47];
    }
    let t21;
    if ($[48] !== canvasSize.width || $[49] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "range",
            min: "400",
            max: "2000",
            value: canvasSize.width,
            onChange: t20,
            className: "w-full"
        }, void 0, false, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 323,
            columnNumber: 11
        }, this);
        $[48] = canvasSize.width;
        $[49] = t20;
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    let t22;
    if ($[51] !== t19 || $[52] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 332,
            columnNumber: 11
        }, this);
        $[51] = t19;
        $[52] = t21;
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    let t23;
    if ($[54] !== canvasSize.height) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs text-slate-400",
            children: [
                "Altura: ",
                canvasSize.height,
                "px"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[54] = canvasSize.height;
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    if ($[56] !== canvasSize) {
        t24 = ({
            "LayoutEditor[<input>.onChange]": (e_3)=>setCanvasSize({
                    ...canvasSize,
                    height: parseInt(e_3.target.value)
                })
        })["LayoutEditor[<input>.onChange]"];
        $[56] = canvasSize;
        $[57] = t24;
    } else {
        t24 = $[57];
    }
    let t25;
    if ($[58] !== canvasSize.height || $[59] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "range",
            min: "300",
            max: "1200",
            value: canvasSize.height,
            onChange: t24,
            className: "w-full"
        }, void 0, false, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[58] = canvasSize.height;
        $[59] = t24;
        $[60] = t25;
    } else {
        t25 = $[60];
    }
    let t26;
    if ($[61] !== t23 || $[62] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[61] = t23;
        $[62] = t25;
        $[63] = t26;
    } else {
        t26 = $[63];
    }
    let t27;
    if ($[64] !== t22 || $[65] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel p-4 rounded-lg border border-sky-500/20 space-y-3",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        t22,
                        t26
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LayoutEditor.tsx",
                    lineNumber: 380,
                    columnNumber: 95
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[64] = t22;
        $[65] = t26;
        $[66] = t27;
    } else {
        t27 = $[66];
    }
    let t28;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-bold text-sky-300 mb-3",
            children: "🎨 Fundo"
        }, void 0, false, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 389,
            columnNumber: 11
        }, this);
        $[67] = t28;
    } else {
        t28 = $[67];
    }
    let t29;
    if ($[68] !== backgroundColor) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel p-4 rounded-lg border border-sky-500/20",
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPicker, {
                    label: "Cor de Fundo",
                    color: backgroundColor,
                    onChange: setBackgroundColor
                }, void 0, false, {
                    fileName: "[project]/src/components/LayoutEditor.tsx",
                    lineNumber: 396,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[68] = backgroundColor;
        $[69] = t29;
    } else {
        t29 = $[69];
    }
    let t30;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-bold text-sky-300 mb-3",
            children: "➕ Adicionar Elemento"
        }, void 0, false, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[70] = t30;
    } else {
        t30 = $[70];
    }
    let t31;
    if ($[71] !== addLayer) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel p-4 rounded-lg border border-sky-500/20",
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "LayoutEditor[<button>.onClick]": ()=>addLayer("text")
                            }["LayoutEditor[<button>.onClick]"],
                            className: "px-2 py-2 bg-blue-600 text-white rounded text-xs hover:bg-blue-500 transition",
                            children: "📝 Texto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 411,
                            columnNumber: 125
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "LayoutEditor[<button>.onClick]": ()=>addLayer("shape")
                            }["LayoutEditor[<button>.onClick]"],
                            className: "px-2 py-2 bg-blue-600 text-white rounded text-xs hover:bg-blue-500 transition",
                            children: "⬜ Forma"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 413,
                            columnNumber: 153
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "LayoutEditor[<button>.onClick]": ()=>addLayer("button")
                            }["LayoutEditor[<button>.onClick]"],
                            className: "px-2 py-2 bg-blue-600 text-white rounded text-xs hover:bg-blue-500 transition",
                            children: "🔘 Botão"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 415,
                            columnNumber: 152
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "LayoutEditor[<button>.onClick]": ()=>addLayer("image")
                            }["LayoutEditor[<button>.onClick]"],
                            className: "px-2 py-2 bg-blue-600 text-white rounded text-xs hover:bg-blue-500 transition",
                            children: "🖼️ Imagem"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 417,
                            columnNumber: 153
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LayoutEditor.tsx",
                    lineNumber: 411,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[71] = addLayer;
        $[72] = t31;
    } else {
        t31 = $[72];
    }
    let t32;
    if ($[73] !== layers.length) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-bold text-sky-300 mb-3",
            children: [
                "📚 Camadas (",
                layers.length,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        $[73] = layers.length;
        $[74] = t32;
    } else {
        t32 = $[74];
    }
    let t33;
    if ($[75] !== deleteLayer || $[76] !== duplicateLayer || $[77] !== layers || $[78] !== selectedLayerId || $[79] !== updateLayer) {
        let t34;
        if ($[81] !== deleteLayer || $[82] !== duplicateLayer || $[83] !== selectedLayerId || $[84] !== updateLayer) {
            t34 = ({
                "LayoutEditor[layers.map()]": (layer_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: {
                            "LayoutEditor[layers.map() > <div>.onClick]": ()=>setSelectedLayerId(layer_0.id)
                        }["LayoutEditor[layers.map() > <div>.onClick]"],
                        className: `p-2 rounded cursor-pointer border transition-all ${selectedLayerId === layer_0.id ? "bg-sky-600/30 border-sky-500" : "bg-white/5 border-sky-500/20 hover:border-sky-500/50"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold text-white truncate",
                                            children: layer_0.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LayoutEditor.tsx",
                                            lineNumber: 440,
                                            columnNumber: 334
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-400",
                                            children: layer_0.type
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LayoutEditor.tsx",
                                            lineNumber: 440,
                                            columnNumber: 410
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 440,
                                    columnNumber: 302
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "LayoutEditor[layers.map() > <button>.onClick]": (e_4)=>{
                                            e_4.stopPropagation();
                                            updateLayer(layer_0.id, {
                                                visible: !layer_0.visible
                                            });
                                        }
                                    }["LayoutEditor[layers.map() > <button>.onClick]"],
                                    className: "p-1 hover:bg-white/10 rounded",
                                    children: layer_0.visible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LayoutEditor.tsx",
                                        lineNumber: 447,
                                        columnNumber: 126
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LayoutEditor.tsx",
                                        lineNumber: 447,
                                        columnNumber: 156
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 440,
                                    columnNumber: 476
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "LayoutEditor[layers.map() > <button>.onClick]": (e_5)=>{
                                            e_5.stopPropagation();
                                            duplicateLayer(layer_0.id);
                                        }
                                    }["LayoutEditor[layers.map() > <button>.onClick]"],
                                    className: "p-1 hover:bg-white/10 rounded",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LayoutEditor.tsx",
                                        lineNumber: 452,
                                        columnNumber: 107
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 447,
                                    columnNumber: 196
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "LayoutEditor[layers.map() > <button>.onClick]": (e_6)=>{
                                            e_6.stopPropagation();
                                            deleteLayer(layer_0.id);
                                        }
                                    }["LayoutEditor[layers.map() > <button>.onClick]"],
                                    className: "p-1 hover:bg-red-600/30 rounded text-red-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LayoutEditor.tsx",
                                        lineNumber: 457,
                                        columnNumber: 122
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 452,
                                    columnNumber: 144
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 440,
                            columnNumber: 245
                        }, this)
                    }, layer_0.id, false, {
                        fileName: "[project]/src/components/LayoutEditor.tsx",
                        lineNumber: 438,
                        columnNumber: 50
                    }, this)
            })["LayoutEditor[layers.map()]"];
            $[81] = deleteLayer;
            $[82] = duplicateLayer;
            $[83] = selectedLayerId;
            $[84] = updateLayer;
            $[85] = t34;
        } else {
            t34 = $[85];
        }
        t33 = layers.map(t34);
        $[75] = deleteLayer;
        $[76] = duplicateLayer;
        $[77] = layers;
        $[78] = selectedLayerId;
        $[79] = updateLayer;
        $[80] = t33;
    } else {
        t33 = $[80];
    }
    let t34;
    if ($[86] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 max-h-64 overflow-y-auto",
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, this);
        $[86] = t33;
        $[87] = t34;
    } else {
        t34 = $[87];
    }
    let t35;
    if ($[88] !== t32 || $[89] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel p-4 rounded-lg border border-sky-500/20",
            children: [
                t32,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 487,
            columnNumber: 11
        }, this);
        $[88] = t32;
        $[89] = t34;
        $[90] = t35;
    } else {
        t35 = $[90];
    }
    let t36;
    if ($[91] !== t17 || $[92] !== t27 || $[93] !== t29 || $[94] !== t31 || $[95] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-80 space-y-6 overflow-y-auto",
            children: [
                t17,
                t27,
                t29,
                t31,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 496,
            columnNumber: 11
        }, this);
        $[91] = t17;
        $[92] = t27;
        $[93] = t29;
        $[94] = t31;
        $[95] = t35;
        $[96] = t36;
    } else {
        t36 = $[96];
    }
    const t37 = canvasSize.width;
    const t38 = canvasSize.height;
    let t39;
    if ($[97] !== backgroundColor) {
        t39 = rgbToString(backgroundColor);
        $[97] = backgroundColor;
        $[98] = t39;
    } else {
        t39 = $[98];
    }
    let t40;
    if ($[99] !== canvasSize.height || $[100] !== canvasSize.width || $[101] !== t39) {
        t40 = {
            width: t37,
            height: t38,
            backgroundColor: t39,
            borderRadius: "8px",
            boxShadow: "0 0 30px rgba(0,166,225,0.2)"
        };
        $[99] = canvasSize.height;
        $[100] = canvasSize.width;
        $[101] = t39;
        $[102] = t40;
    } else {
        t40 = $[102];
    }
    let t41;
    if ($[103] !== layers || $[104] !== selectedLayerId) {
        let t42;
        if ($[106] !== selectedLayerId) {
            t42 = ({
                "LayoutEditor[layers.map()]": (layer_1)=>layer_1.visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: {
                            "LayoutEditor[layers.map() > <div>.onClick]": ()=>setSelectedLayerId(layer_1.id)
                        }["LayoutEditor[layers.map() > <div>.onClick]"],
                        className: `absolute cursor-pointer transition-all ${selectedLayerId === layer_1.id ? "ring-2 ring-sky-400 ring-offset-2" : "hover:ring-2 hover:ring-sky-300 hover:ring-offset-1"}`,
                        style: {
                            left: layer_1.x,
                            top: layer_1.y,
                            width: layer_1.width,
                            height: layer_1.height,
                            transform: `rotate(${layer_1.rotation}deg)`,
                            opacity: layer_1.opacity,
                            zIndex: layer_1.zIndex,
                            backgroundColor: rgbToString(layer_1.backgroundColor || {
                                r: 255,
                                g: 255,
                                b: 255
                            }),
                            color: rgbToString(layer_1.fontColor || {
                                r: 0,
                                g: 0,
                                b: 0
                            }),
                            fontSize: layer_1.fontSize,
                            fontFamily: layer_1.fontFamily,
                            fontWeight: layer_1.fontWeight,
                            textAlign: layer_1.textAlign,
                            border: layer_1.borderWidth ? `${layer_1.borderWidth}px solid ${rgbToString(layer_1.borderColor || {
                                r: 0,
                                g: 0,
                                b: 0
                            })}` : "none",
                            borderRadius: layer_1.borderRadius,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "8px",
                            overflow: "hidden"
                        },
                        children: [
                            layer_1.type === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: layer_1.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/LayoutEditor.tsx",
                                lineNumber: 572,
                                columnNumber: 40
                            }, this),
                            layer_1.type === "image" && layer_1.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: layer_1.imageUrl,
                                alt: "layer",
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LayoutEditor.tsx",
                                lineNumber: 572,
                                columnNumber: 138
                            }, this)
                        ]
                    }, layer_1.id, true, {
                        fileName: "[project]/src/components/LayoutEditor.tsx",
                        lineNumber: 537,
                        columnNumber: 69
                    }, this)
            })["LayoutEditor[layers.map()]"];
            $[106] = selectedLayerId;
            $[107] = t42;
        } else {
            t42 = $[107];
        }
        t41 = layers.map(t42);
        $[103] = layers;
        $[104] = selectedLayerId;
        $[105] = t41;
    } else {
        t41 = $[105];
    }
    let t42;
    if ($[108] !== t40 || $[109] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 glass-panel rounded-lg border border-sky-500/20 p-6 overflow-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: canvasRef,
                className: "relative mx-auto",
                style: t40,
                children: t41
            }, void 0, false, {
                fileName: "[project]/src/components/LayoutEditor.tsx",
                lineNumber: 588,
                columnNumber: 101
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 588,
            columnNumber: 11
        }, this);
        $[108] = t40;
        $[109] = t41;
        $[110] = t42;
    } else {
        t42 = $[110];
    }
    let t43;
    if ($[111] !== selectedLayer || $[112] !== updateLayer) {
        t43 = selectedLayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel rounded-lg border border-sky-500/20 p-6 space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-sky-300 mb-4",
                        children: "⚙️ Propriedades"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LayoutEditor.tsx",
                        lineNumber: 597,
                        columnNumber: 112
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LayoutEditor.tsx",
                    lineNumber: 597,
                    columnNumber: 107
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-slate-300",
                                    children: "X"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 597,
                                    columnNumber: 235
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: selectedLayer.x,
                                    onChange: {
                                        "LayoutEditor[<input>.onChange]": (e_7)=>updateLayer(selectedLayer.id, {
                                                x: parseInt(e_7.target.value)
                                            })
                                    }["LayoutEditor[<input>.onChange]"],
                                    className: "w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 597,
                                    columnNumber: 300
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 597,
                            columnNumber: 230
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-slate-300",
                                    children: "Y"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 601,
                                    columnNumber: 153
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: selectedLayer.y,
                                    onChange: {
                                        "LayoutEditor[<input>.onChange]": (e_8)=>updateLayer(selectedLayer.id, {
                                                y: parseInt(e_8.target.value)
                                            })
                                    }["LayoutEditor[<input>.onChange]"],
                                    className: "w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 601,
                                    columnNumber: 218
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 601,
                            columnNumber: 148
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-slate-300",
                                    children: "Largura"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 605,
                                    columnNumber: 153
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: selectedLayer.width,
                                    onChange: {
                                        "LayoutEditor[<input>.onChange]": (e_9)=>updateLayer(selectedLayer.id, {
                                                width: parseInt(e_9.target.value)
                                            })
                                    }["LayoutEditor[<input>.onChange]"],
                                    className: "w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 605,
                                    columnNumber: 224
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 605,
                            columnNumber: 148
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-slate-300",
                                    children: "Altura"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 609,
                                    columnNumber: 153
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: selectedLayer.height,
                                    onChange: {
                                        "LayoutEditor[<input>.onChange]": (e_10)=>updateLayer(selectedLayer.id, {
                                                height: parseInt(e_10.target.value)
                                            })
                                    }["LayoutEditor[<input>.onChange]"],
                                    className: "w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 609,
                                    columnNumber: 223
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 609,
                            columnNumber: 148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LayoutEditor.tsx",
                    lineNumber: 597,
                    columnNumber: 190
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-slate-300",
                                    children: [
                                        "Rotação: ",
                                        selectedLayer.rotation,
                                        "°"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 613,
                                    columnNumber: 199
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: "360",
                                    value: selectedLayer.rotation,
                                    onChange: {
                                        "LayoutEditor[<input>.onChange]": (e_11)=>updateLayer(selectedLayer.id, {
                                                rotation: parseInt(e_11.target.value)
                                            })
                                    }["LayoutEditor[<input>.onChange]"],
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 613,
                                    columnNumber: 297
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 613,
                            columnNumber: 194
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-slate-300",
                                    children: [
                                        "Opacidade: ",
                                        Math.round(selectedLayer.opacity * 100),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 617,
                                    columnNumber: 80
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: "1",
                                    step: "0.01",
                                    value: selectedLayer.opacity,
                                    onChange: {
                                        "LayoutEditor[<input>.onChange]": (e_12)=>updateLayer(selectedLayer.id, {
                                                opacity: parseFloat(e_12.target.value)
                                            })
                                    }["LayoutEditor[<input>.onChange]"],
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 617,
                                    columnNumber: 197
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 617,
                            columnNumber: 75
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LayoutEditor.tsx",
                    lineNumber: 613,
                    columnNumber: 154
                }, this),
                selectedLayer.type === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 pt-4 border-t border-sky-500/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-semibold text-sky-300",
                            children: "📝 Texto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 621,
                            columnNumber: 174
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: selectedLayer.text || "",
                            onChange: {
                                "LayoutEditor[<textarea>.onChange]": (e_13)=>updateLayer(selectedLayer.id, {
                                        text: e_13.target.value
                                    })
                            }["LayoutEditor[<textarea>.onChange]"],
                            className: "w-full px-3 py-2 bg-white/5 border border-sky-500/20 rounded text-white text-sm",
                            rows: 3
                        }, void 0, false, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 621,
                            columnNumber: 230
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-slate-400",
                                            children: "Tamanho"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LayoutEditor.tsx",
                                            lineNumber: 625,
                                            columnNumber: 197
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: selectedLayer.fontSize,
                                            onChange: {
                                                "LayoutEditor[<input>.onChange]": (e_14)=>updateLayer(selectedLayer.id, {
                                                        fontSize: parseInt(e_14.target.value)
                                                    })
                                            }["LayoutEditor[<input>.onChange]"],
                                            className: "w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LayoutEditor.tsx",
                                            lineNumber: 625,
                                            columnNumber: 254
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 625,
                                    columnNumber: 192
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-slate-400",
                                            children: "Peso"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LayoutEditor.tsx",
                                            lineNumber: 629,
                                            columnNumber: 155
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedLayer.fontWeight,
                                            onChange: {
                                                "LayoutEditor[<select>.onChange]": (e_15)=>updateLayer(selectedLayer.id, {
                                                        fontWeight: e_15.target.value
                                                    })
                                            }["LayoutEditor[<select>.onChange]"],
                                            className: "w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "normal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 143
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 166
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "bold"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 186
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LayoutEditor.tsx",
                                            lineNumber: 629,
                                            columnNumber: 209
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 629,
                                    columnNumber: 150
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 625,
                            columnNumber: 152
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPicker, {
                            label: "Cor do Texto",
                            color: selectedLayer.fontColor || {
                                r: 0,
                                g: 0,
                                b: 0
                            },
                            onChange: {
                                "LayoutEditor[<ColorPicker>.onChange]": (c)=>updateLayer(selectedLayer.id, {
                                        fontColor: c
                                    })
                            }["LayoutEditor[<ColorPicker>.onChange]"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 633,
                            columnNumber: 228
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LayoutEditor.tsx",
                    lineNumber: 621,
                    columnNumber: 115
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 pt-4 border-t border-sky-500/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-semibold text-sky-300",
                            children: "🎨 Estilo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 641,
                            columnNumber: 120
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPicker, {
                            label: "Cor de Fundo",
                            color: selectedLayer.backgroundColor || {
                                r: 255,
                                g: 255,
                                b: 255
                            },
                            onChange: {
                                "LayoutEditor[<ColorPicker>.onChange]": (c_0)=>updateLayer(selectedLayer.id, {
                                        backgroundColor: c_0
                                    })
                            }["LayoutEditor[<ColorPicker>.onChange]"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 641,
                            columnNumber: 177
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPicker, {
                            label: "Cor da Borda",
                            color: selectedLayer.borderColor || {
                                r: 0,
                                g: 0,
                                b: 0
                            },
                            onChange: {
                                "LayoutEditor[<ColorPicker>.onChange]": (c_1)=>updateLayer(selectedLayer.id, {
                                        borderColor: c_1
                                    })
                            }["LayoutEditor[<ColorPicker>.onChange]"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 649,
                            columnNumber: 54
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs text-slate-400",
                                    children: "Largura da Borda"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 657,
                                    columnNumber: 59
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: selectedLayer.borderWidth,
                                    onChange: {
                                        "LayoutEditor[<input>.onChange]": (e_16)=>updateLayer(selectedLayer.id, {
                                                borderWidth: parseInt(e_16.target.value)
                                            })
                                    }["LayoutEditor[<input>.onChange]"],
                                    className: "w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 657,
                                    columnNumber: 125
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 657,
                            columnNumber: 54
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs text-slate-400",
                                    children: "Canto Arredondado"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 661,
                                    columnNumber: 153
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: selectedLayer.borderRadius,
                                    onChange: {
                                        "LayoutEditor[<input>.onChange]": (e_17)=>updateLayer(selectedLayer.id, {
                                                borderRadius: parseInt(e_17.target.value)
                                            })
                                    }["LayoutEditor[<input>.onChange]"],
                                    className: "w-full px-2 py-1 bg-white/5 border border-sky-500/20 rounded text-white text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 661,
                                    columnNumber: 220
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LayoutEditor.tsx",
                            lineNumber: 661,
                            columnNumber: 148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LayoutEditor.tsx",
                    lineNumber: 641,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 597,
            columnNumber: 28
        }, this);
        $[111] = selectedLayer;
        $[112] = updateLayer;
        $[113] = t43;
    } else {
        t43 = $[113];
    }
    let t44;
    if ($[114] !== t42 || $[115] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col gap-6",
            children: [
                t42,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 674,
            columnNumber: 11
        }, this);
        $[114] = t42;
        $[115] = t43;
        $[116] = t44;
    } else {
        t44 = $[116];
    }
    let t45;
    if ($[117] !== t36 || $[118] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full gap-6 bg-[#020c1b] p-6",
            children: [
                t36,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LayoutEditor.tsx",
            lineNumber: 683,
            columnNumber: 11
        }, this);
        $[117] = t36;
        $[118] = t44;
        $[119] = t45;
    } else {
        t45 = $[119];
    }
    return t45;
}
_s(LayoutEditor, "Cq+389FqDmcVRSPV+8ZSd2Lx4vY=");
_c = LayoutEditor;
function _LayoutEditorColorPicker(t0) {
    const { label, color, onChange } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-xs font-semibold text-slate-300",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/LayoutEditor.tsx",
                lineNumber: 698,
                columnNumber: 37
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "color",
                        value: rgbToHex(color),
                        onChange: {
                            "LayoutEditor[ColorPicker > <input>.onChange]": (e)=>onChange(hexToRgb(e.target.value))
                        }["LayoutEditor[ColorPicker > <input>.onChange]"],
                        className: "w-12 h-10 rounded border border-sky-500/30 cursor-pointer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LayoutEditor.tsx",
                        lineNumber: 698,
                        columnNumber: 149
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 flex-1",
                        children: [
                            "r",
                            "g",
                            "b"
                        ].map({
                            "LayoutEditor[ColorPicker > (anonymous)()]": (component)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: "255",
                                    value: color[component],
                                    onChange: {
                                        "LayoutEditor[ColorPicker > (anonymous)() > <input>.onChange]": (e_0)=>onChange({
                                                ...color,
                                                [component]: parseInt(e_0.target.value)
                                            })
                                    }["LayoutEditor[ColorPicker > (anonymous)() > <input>.onChange]"],
                                    className: "flex-1 h-8"
                                }, component, false, {
                                    fileName: "[project]/src/components/LayoutEditor.tsx",
                                    lineNumber: 701,
                                    columnNumber: 69
                                }, this)
                        }["LayoutEditor[ColorPicker > (anonymous)()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/components/LayoutEditor.tsx",
                        lineNumber: 700,
                        columnNumber: 130
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-slate-400 w-16",
                        children: [
                            color.r,
                            ",",
                            color.g,
                            ",",
                            color.b
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LayoutEditor.tsx",
                        lineNumber: 707,
                        columnNumber: 63
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LayoutEditor.tsx",
                lineNumber: 698,
                columnNumber: 108
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LayoutEditor.tsx",
        lineNumber: 698,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "LayoutEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/defaultLayout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDefaultLayout",
    ()=>createDefaultLayout,
    "systemColors",
    ()=>systemColors
]);
// Cores do sistema atual
const systemColors = {
    primary: {
        r: 0,
        g: 166,
        b: 225
    },
    secondary: {
        r: 56,
        g: 189,
        b: 248
    },
    background: {
        r: 2,
        g: 12,
        b: 27
    },
    dark: {
        r: 15,
        g: 23,
        b: 42
    },
    slate: {
        r: 148,
        g: 163,
        b: 184
    },
    white: {
        r: 255,
        g: 255,
        b: 255
    },
    green: {
        r: 16,
        g: 185,
        b: 129
    },
    red: {
        r: 239,
        g: 68,
        b: 68
    }
};
function createDefaultLayout() {
    const layers = [
        // Header/Banner
        {
            id: 'hero',
            type: 'shape',
            label: 'Hero Background',
            visible: true,
            x: 0,
            y: 0,
            width: 1200,
            height: 300,
            rotation: 0,
            opacity: 1,
            zIndex: 0,
            backgroundColor: systemColors.dark,
            borderColor: systemColors.primary,
            borderWidth: 0,
            borderRadius: 0
        },
        // Título Principal
        {
            id: 'title',
            type: 'text',
            label: 'Título Principal',
            visible: true,
            x: 50,
            y: 80,
            width: 1100,
            height: 100,
            rotation: 0,
            opacity: 1,
            zIndex: 1,
            text: 'Serviços Profissionais da Ederass',
            fontSize: 48,
            fontFamily: 'inter',
            fontColor: systemColors.white,
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: undefined,
            borderColor: undefined,
            borderWidth: 0,
            borderRadius: 0
        },
        // Descrição
        {
            id: 'description',
            type: 'text',
            label: 'Descrição',
            visible: true,
            x: 50,
            y: 180,
            width: 1100,
            height: 80,
            rotation: 0,
            opacity: 1,
            zIndex: 1,
            text: 'Regularizações, seguros e documentações com expertise de 20+ anos',
            fontSize: 18,
            fontFamily: 'inter',
            fontColor: systemColors.secondary,
            fontWeight: 'normal',
            textAlign: 'center',
            backgroundColor: undefined,
            borderColor: undefined,
            borderWidth: 0,
            borderRadius: 0
        },
        // Card de Serviço 1
        {
            id: 'card1',
            type: 'shape',
            label: 'Card Serviço 1',
            visible: true,
            x: 50,
            y: 350,
            width: 350,
            height: 200,
            rotation: 0,
            opacity: 1,
            zIndex: 2,
            backgroundColor: {
                r: 30,
                g: 50,
                b: 100
            },
            borderColor: systemColors.primary,
            borderWidth: 1,
            borderRadius: 12
        },
        {
            id: 'card1-title',
            type: 'text',
            label: 'Card 1 Título',
            visible: true,
            x: 70,
            y: 370,
            width: 310,
            height: 50,
            rotation: 0,
            opacity: 1,
            zIndex: 3,
            text: '📝 Documentação',
            fontSize: 20,
            fontFamily: 'inter',
            fontColor: systemColors.secondary,
            fontWeight: 'bold',
            textAlign: 'left',
            backgroundColor: undefined,
            borderColor: undefined,
            borderWidth: 0,
            borderRadius: 0
        },
        {
            id: 'card1-desc',
            type: 'text',
            label: 'Card 1 Descrição',
            visible: true,
            x: 70,
            y: 420,
            width: 310,
            height: 110,
            rotation: 0,
            opacity: 1,
            zIndex: 3,
            text: 'Regularizações completas para sua embarcação com documentação atualizada',
            fontSize: 13,
            fontFamily: 'inter',
            fontColor: systemColors.slate,
            fontWeight: 'normal',
            textAlign: 'left',
            backgroundColor: undefined,
            borderColor: undefined,
            borderWidth: 0,
            borderRadius: 0
        },
        // Card de Serviço 2
        {
            id: 'card2',
            type: 'shape',
            label: 'Card Serviço 2',
            visible: true,
            x: 425,
            y: 350,
            width: 350,
            height: 200,
            rotation: 0,
            opacity: 1,
            zIndex: 2,
            backgroundColor: {
                r: 30,
                g: 50,
                b: 100
            },
            borderColor: systemColors.primary,
            borderWidth: 1,
            borderRadius: 12
        },
        {
            id: 'card2-title',
            type: 'text',
            label: 'Card 2 Título',
            visible: true,
            x: 445,
            y: 370,
            width: 310,
            height: 50,
            rotation: 0,
            opacity: 1,
            zIndex: 3,
            text: '🛡️ Seguros',
            fontSize: 20,
            fontFamily: 'inter',
            fontColor: systemColors.secondary,
            fontWeight: 'bold',
            textAlign: 'left',
            backgroundColor: undefined,
            borderColor: undefined,
            borderWidth: 0,
            borderRadius: 0
        },
        {
            id: 'card2-desc',
            type: 'text',
            label: 'Card 2 Descrição',
            visible: true,
            x: 445,
            y: 420,
            width: 310,
            height: 110,
            rotation: 0,
            opacity: 1,
            zIndex: 3,
            text: 'Proteção total para sua embarcação com coberturas personalizadas',
            fontSize: 13,
            fontFamily: 'inter',
            fontColor: systemColors.slate,
            fontWeight: 'normal',
            textAlign: 'left',
            backgroundColor: undefined,
            borderColor: undefined,
            borderWidth: 0,
            borderRadius: 0
        },
        // Card de Serviço 3
        {
            id: 'card3',
            type: 'shape',
            label: 'Card Serviço 3',
            visible: true,
            x: 800,
            y: 350,
            width: 350,
            height: 200,
            rotation: 0,
            opacity: 1,
            zIndex: 2,
            backgroundColor: {
                r: 30,
                g: 50,
                b: 100
            },
            borderColor: systemColors.primary,
            borderWidth: 1,
            borderRadius: 12
        },
        {
            id: 'card3-title',
            type: 'text',
            label: 'Card 3 Título',
            visible: true,
            x: 820,
            y: 370,
            width: 310,
            height: 50,
            rotation: 0,
            opacity: 1,
            zIndex: 3,
            text: '📜 Licenças',
            fontSize: 20,
            fontFamily: 'inter',
            fontColor: systemColors.secondary,
            fontWeight: 'bold',
            textAlign: 'left',
            backgroundColor: undefined,
            borderColor: undefined,
            borderWidth: 0,
            borderRadius: 0
        },
        {
            id: 'card3-desc',
            type: 'text',
            label: 'Card 3 Descrição',
            visible: true,
            x: 820,
            y: 420,
            width: 310,
            height: 110,
            rotation: 0,
            opacity: 1,
            zIndex: 3,
            text: 'Licenças profissionais e amadorais para navegação segura',
            fontSize: 13,
            fontFamily: 'inter',
            fontColor: systemColors.slate,
            fontWeight: 'normal',
            textAlign: 'left',
            backgroundColor: undefined,
            borderColor: undefined,
            borderWidth: 0,
            borderRadius: 0
        },
        // Botão CTA
        {
            id: 'cta-button',
            type: 'button',
            label: 'Botão CTA',
            visible: true,
            x: 500,
            y: 620,
            width: 200,
            height: 60,
            rotation: 0,
            opacity: 1,
            zIndex: 4,
            text: 'Explorar Serviços',
            fontSize: 16,
            fontFamily: 'inter',
            fontColor: systemColors.white,
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: systemColors.primary,
            borderColor: systemColors.primary,
            borderWidth: 0,
            borderRadius: 8
        }
    ];
    return {
        id: 'default-layout',
        name: 'Layout Padrão - Ederass',
        description: 'Layout padrão do sistema com estilo sky-blue',
        canvasWidth: 1200,
        canvasHeight: 720,
        backgroundColor: systemColors.background,
        layers,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        createdBy: 'system'
    };
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-left.js [app-client] (ecmascript) <export default as ArrowDownLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LayoutEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LayoutEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$defaultLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/defaultLayout.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function AdminDashboard() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [usersLoading, setUsersLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userPromoting, setUserPromoting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [productsLoading, setProductsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showProductForm, setShowProductForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingProduct, setEditingProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        price: 0,
        category: 'insurance',
        requiredDocuments: [],
        requiredFiles: [],
        image: '',
        imageFile: null
    });
    const [newDoc, setNewDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newFile, setNewFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedOrder, setSelectedOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedOrderItem, setSelectedOrderItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadingDocs, setUploadingDocs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedUser, setSelectedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingUser, setEditingUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deletingUserId, setDeletingUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [layouts, setLayouts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentLayout, setCurrentLayout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [layoutsLoading, setLayoutsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { user: adminUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Verificar se é admin
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            if (!adminUser) {
                router.push('/login');
                return;
            }
            if (adminUser.role !== 'admin') {
                router.push('/dashboard/client');
            }
        }
    }["AdminDashboard.useEffect"], [
        adminUser,
        router
    ]);
    // Carregar pedidos
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "orders"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("date", "desc"));
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                "AdminDashboard.useEffect.unsubscribe": (snapshot)=>{
                    const fetchedOrders = snapshot.docs.map({
                        "AdminDashboard.useEffect.unsubscribe.fetchedOrders": (doc)=>({
                                id: doc.id,
                                ...doc.data()
                            })
                    }["AdminDashboard.useEffect.unsubscribe.fetchedOrders"]);
                    setOrders(fetchedOrders);
                    setLoading(false);
                }
            }["AdminDashboard.useEffect.unsubscribe"]);
            return ({
                "AdminDashboard.useEffect": ()=>unsubscribe()
            })["AdminDashboard.useEffect"];
        }
    }["AdminDashboard.useEffect"], []);
    // Carregar usuários
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            const loadUsers = {
                "AdminDashboard.useEffect.loadUsers": async ()=>{
                    setUsersLoading(true);
                    try {
                        const q_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users"));
                        const unsubscribe_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q_0, {
                            "AdminDashboard.useEffect.loadUsers.unsubscribe_0": (snapshot_0)=>{
                                const fetchedUsers = snapshot_0.docs.map({
                                    "AdminDashboard.useEffect.loadUsers.unsubscribe_0.fetchedUsers": (doc_0)=>({
                                            id: doc_0.id,
                                            name: doc_0.data().name,
                                            email: doc_0.data().email,
                                            role: doc_0.data().role
                                        })
                                }["AdminDashboard.useEffect.loadUsers.unsubscribe_0.fetchedUsers"]);
                                setUsers(fetchedUsers);
                                setUsersLoading(false);
                            }
                        }["AdminDashboard.useEffect.loadUsers.unsubscribe_0"]);
                        return ({
                            "AdminDashboard.useEffect.loadUsers": ()=>unsubscribe_0()
                        })["AdminDashboard.useEffect.loadUsers"];
                    } catch (error) {
                        console.error('Erro ao carregar usuários:', error);
                        setUsersLoading(false);
                    }
                }
            }["AdminDashboard.useEffect.loadUsers"];
            loadUsers();
        }
    }["AdminDashboard.useEffect"], []);
    // Carregar produtos
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            const loadProducts = {
                "AdminDashboard.useEffect.loadProducts": async ()=>{
                    setProductsLoading(true);
                    try {
                        const q_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "products"));
                        const unsubscribe_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q_1, {
                            "AdminDashboard.useEffect.loadProducts.unsubscribe_1": (snapshot_1)=>{
                                const fetchedProducts = snapshot_1.docs.map({
                                    "AdminDashboard.useEffect.loadProducts.unsubscribe_1.fetchedProducts": (doc_1)=>({
                                            id: doc_1.id,
                                            ...doc_1.data()
                                        })
                                }["AdminDashboard.useEffect.loadProducts.unsubscribe_1.fetchedProducts"]);
                                setProducts(fetchedProducts);
                                setProductsLoading(false);
                            }
                        }["AdminDashboard.useEffect.loadProducts.unsubscribe_1"]);
                        return ({
                            "AdminDashboard.useEffect.loadProducts": ()=>unsubscribe_1()
                        })["AdminDashboard.useEffect.loadProducts"];
                    } catch (error_0) {
                        console.error('Erro ao carregar produtos:', error_0);
                        setProductsLoading(false);
                    }
                }
            }["AdminDashboard.useEffect.loadProducts"];
            loadProducts();
        }
    }["AdminDashboard.useEffect"], []);
    // Carregar layouts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            const loadLayouts = {
                "AdminDashboard.useEffect.loadLayouts": async ()=>{
                    setLayoutsLoading(true);
                    try {
                        const q_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "layoutEdit"));
                        const unsubscribe_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q_2, {
                            "AdminDashboard.useEffect.loadLayouts.unsubscribe_2": (snapshot_2)=>{
                                const fetchedLayouts = snapshot_2.docs.map({
                                    "AdminDashboard.useEffect.loadLayouts.unsubscribe_2.fetchedLayouts": (doc_2)=>({
                                            id: doc_2.id,
                                            ...doc_2.data()
                                        })
                                }["AdminDashboard.useEffect.loadLayouts.unsubscribe_2.fetchedLayouts"]);
                                setLayouts(fetchedLayouts);
                                // Se não houver layouts salvos, usar o layout padrão
                                if (fetchedLayouts.length === 0) {
                                    const defaultLayout_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$defaultLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDefaultLayout"])();
                                    setCurrentLayout(defaultLayout_0);
                                } else if (!currentLayout) {
                                    setCurrentLayout(fetchedLayouts[0]);
                                }
                                setLayoutsLoading(false);
                            }
                        }["AdminDashboard.useEffect.loadLayouts.unsubscribe_2"]);
                        return ({
                            "AdminDashboard.useEffect.loadLayouts": ()=>unsubscribe_2()
                        })["AdminDashboard.useEffect.loadLayouts"];
                    } catch (error_1) {
                        console.error('Erro ao carregar layouts:', error_1);
                        // Se houver erro, carregar layout padrão
                        const defaultLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$defaultLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDefaultLayout"])();
                        setCurrentLayout(defaultLayout);
                        setLayoutsLoading(false);
                    }
                }
            }["AdminDashboard.useEffect.loadLayouts"];
            loadLayouts();
        }
    }["AdminDashboard.useEffect"], []);
    // Cálculos de estatísticas
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminDashboard.useMemo[stats]": ()=>{
            const total = orders.length;
            const pending = orders.filter({
                "AdminDashboard.useMemo[stats]": (o)=>o.status === 'pending_payment' || o.status === 'pending_docs'
            }["AdminDashboard.useMemo[stats]"]).length;
            const completed = orders.filter({
                "AdminDashboard.useMemo[stats]": (o_0)=>o_0.status === 'completed'
            }["AdminDashboard.useMemo[stats]"]).length;
            const revenue = orders.filter({
                "AdminDashboard.useMemo[stats].revenue": (o_1)=>o_1.status === 'completed'
            }["AdminDashboard.useMemo[stats].revenue"]).reduce({
                "AdminDashboard.useMemo[stats].revenue": (sum, o_2)=>sum + o_2.total
            }["AdminDashboard.useMemo[stats].revenue"], 0);
            const totalRevenue = orders.reduce({
                "AdminDashboard.useMemo[stats].totalRevenue": (sum_0, o_3)=>sum_0 + o_3.total
            }["AdminDashboard.useMemo[stats].totalRevenue"], 0);
            const avgTicket = orders.length > 0 ? totalRevenue / orders.length : 0;
            return {
                total,
                pending,
                completed,
                revenue,
                totalRevenue,
                avgTicket
            };
        }
    }["AdminDashboard.useMemo[stats]"], [
        orders
    ]);
    const pendingOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminDashboard.useMemo[pendingOrders]": ()=>{
            return orders.filter({
                "AdminDashboard.useMemo[pendingOrders]": (o_4)=>o_4.status === 'pending_payment' || o_4.status === 'pending_docs'
            }["AdminDashboard.useMemo[pendingOrders]"]);
        }
    }["AdminDashboard.useMemo[pendingOrders]"], [
        orders
    ]);
    const completedOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminDashboard.useMemo[completedOrders]": ()=>{
            return orders.filter({
                "AdminDashboard.useMemo[completedOrders]": (o_5)=>o_5.status === 'completed'
            }["AdminDashboard.useMemo[completedOrders]"]);
        }
    }["AdminDashboard.useMemo[completedOrders]"], [
        orders
    ]);
    const filteredOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminDashboard.useMemo[filteredOrders]": ()=>{
            let result = activeTab === 'completed' ? completedOrders : activeTab === 'orders' ? pendingOrders : [];
            if (searchQuery) {
                const q_3 = searchQuery.toLowerCase();
                result = result.filter({
                    "AdminDashboard.useMemo[filteredOrders]": (o_6)=>o_6.userName?.toLowerCase().includes(q_3) || o_6.id.toLowerCase().includes(q_3) || o_6.items.some({
                            "AdminDashboard.useMemo[filteredOrders]": (i)=>i.title.toLowerCase().includes(q_3)
                        }["AdminDashboard.useMemo[filteredOrders]"])
                }["AdminDashboard.useMemo[filteredOrders]"]);
            }
            return result;
        }
    }["AdminDashboard.useMemo[filteredOrders]"], [
        activeTab,
        searchQuery,
        completedOrders,
        pendingOrders
    ]);
    const handleStatusUpdate = async (orderId, newStatus)=>{
        try {
            const orderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'orders', orderId);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(orderRef, {
                status: newStatus
            });
        } catch (error_2) {
            console.error('Erro ao atualizar status:', error_2);
        }
    };
    const handleLogout = async ()=>{
        router.push('/login');
    };
    const toggleUserAdmin = async (userId, makeAdmin)=>{
        if (!confirm(`Confirma ${makeAdmin ? 'conceder' : 'remover'} acesso de admin?`)) return;
        try {
            setUserPromoting((p)=>({
                    ...p,
                    [userId]: true
                }));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', userId), {
                role: makeAdmin ? 'admin' : 'client'
            }, {
                merge: true
            });
            alert('Role atualizado com sucesso');
        } catch (err) {
            console.error(err);
            alert('Falha ao atualizar role');
        } finally{
            setUserPromoting((p)=>({
                    ...p,
                    [userId]: false
                }));
        }
    };
    const handleUploadMissingDocument = async (docName, file)=>{
        if (!selectedOrder || !selectedOrderItem) return;
        try {
            setUploadingDocs((p_0)=>({
                    ...p_0,
                    [docName]: true
                }));
            const safeDocName = docName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
            const storagePath = `users/${selectedOrder.userId}/orders/${selectedOrder.id}/${selectedOrderItem.cartId}/${safeDocName}`;
            const storageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storage"], storagePath);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadBytes"])(storageRef, file);
            const downloadUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDownloadURL"])(storageRef);
            // Atualizar o documento do pedido com o novo arquivo
            const orderRef_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'orders', selectedOrder.id);
            const updatedItems = selectedOrder.items.map((item)=>{
                if (item.cartId === selectedOrderItem.cartId) {
                    return {
                        ...item,
                        uploadedDocs: {
                            ...item.uploadedDocs,
                            [docName]: downloadUrl
                        }
                    };
                }
                return item;
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(orderRef_0, {
                items: updatedItems
            });
            alert('Documento enviado com sucesso!');
            // Atualizar estado local
            setSelectedOrderItem({
                ...selectedOrderItem,
                uploadedDocs: {
                    ...selectedOrderItem.uploadedDocs,
                    [docName]: downloadUrl
                }
            });
        } catch (error_3) {
            console.error('Erro ao fazer upload:', error_3);
            alert('Erro ao enviar documento');
        } finally{
            setUploadingDocs((p)=>({
                    ...p,
                    [docName]: false
                }));
        }
    };
    const getStatusColor = (status)=>{
        switch(status){
            case 'pending_docs':
                return 'bg-yellow-600/30 text-yellow-300 border-yellow-500/50';
            case 'pending_payment':
                return 'bg-orange-600/30 text-orange-300 border-orange-500/50';
            case 'processing':
                return 'bg-blue-600/30 text-blue-300 border-blue-500/50';
            case 'paid':
                return 'bg-cyan-600/30 text-cyan-300 border-cyan-500/50';
            case 'completed':
                return 'bg-green-600/30 text-green-300 border-green-500/50';
            case 'rejected':
                return 'bg-red-600/30 text-red-300 border-red-500/50';
            default:
                return 'bg-slate-600/30 text-slate-300 border-slate-500/50';
        }
    };
    const isDocumentUploaded = (docName_0)=>{
        if (!selectedOrderItem) return false;
        return selectedOrderItem.uploadedDocs && selectedOrderItem.uploadedDocs[docName_0] ? true : false;
    };
    const handleEditUser = async ()=>{
        if (!selectedUser || !editingUser) return;
        if (!editingUser.name || !editingUser.email) {
            alert('Nome e email são obrigatórios');
            return;
        }
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', selectedUser.id), editingUser, {
                merge: true
            });
            alert('Usuário atualizado com sucesso!');
            setEditingUser(null);
            // Atualizar lista local
            setUsers(users.map((u)=>u.id === selectedUser.id ? {
                    ...u,
                    ...editingUser
                } : u));
            setSelectedUser({
                ...selectedUser,
                ...editingUser
            });
        } catch (error_4) {
            console.error('Erro ao atualizar usuário:', error_4);
            alert('Erro ao atualizar usuário');
        }
    };
    const handleDeleteUser = async ()=>{
        if (!selectedUser) return;
        if (!confirm(`Tem certeza que deseja deletar o usuário ${selectedUser.name}? Esta ação é irreversível.`)) {
            return;
        }
        try {
            setDeletingUserId(selectedUser.id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', selectedUser.id));
            alert('Usuário deletado com sucesso!');
            setUsers(users.filter((u_0)=>u_0.id !== selectedUser.id));
            setSelectedUser(null);
            setEditingUser(null);
        } catch (error_5) {
            console.error('Erro ao deletar usuário:', error_5);
            alert('Erro ao deletar usuário');
        } finally{
            setDeletingUserId(null);
        }
    };
    const handleSaveLayout = async (layout)=>{
        try {
            // Se for layout padrão ou novo, criar/atualizar
            if (layout.id === 'new' || layout.id === 'default-layout') {
                const layoutToSave = {
                    ...layout,
                    id: undefined,
                    createdAt: layout.createdAt === 'new' ? new Date().toISOString() : layout.createdAt,
                    updatedAt: new Date().toISOString(),
                    createdBy: adminUser?.id || 'unknown'
                };
                // Verificar se já existe layout padrão
                const existingDefault = layouts.find((l)=>l.id === 'default-layout');
                if (existingDefault) {
                    // Atualizar layout padrão existente
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'layoutEdit', 'default-layout'), {
                        ...layoutToSave,
                        id: 'default-layout'
                    }, {
                        merge: true
                    });
                    alert('Layout padrão atualizado com sucesso!');
                    setCurrentLayout({
                        ...layoutToSave,
                        id: 'default-layout'
                    });
                } else {
                    // Criar novo layout padrão
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'layoutEdit', 'default-layout'), {
                        ...layoutToSave,
                        id: 'default-layout'
                    });
                    alert('Layout padrão salvo com sucesso!');
                    setCurrentLayout({
                        ...layoutToSave,
                        id: 'default-layout'
                    });
                }
            } else {
                // Atualizar layout normal
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'layoutEdit', layout.id), {
                    ...layout,
                    updatedAt: new Date().toISOString()
                });
                alert('Layout salvo com sucesso!');
                setCurrentLayout(layout);
            }
        } catch (error_6) {
            console.error('Erro ao salvar layout:', error_6);
            alert('Erro ao salvar layout');
        }
    };
    const handleDeleteLayout = async (layoutId)=>{
        if (!confirm('Tem certeza que deseja deletar este layout?')) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'layoutEdit', layoutId));
            alert('Layout deletado com sucesso!');
            setLayouts(layouts.filter((l_0)=>l_0.id !== layoutId));
            if (currentLayout?.id === layoutId) {
                setCurrentLayout(layouts.find((l_1)=>l_1.id !== layoutId) || null);
            }
        } catch (error_7) {
            console.error('Erro ao deletar layout:', error_7);
            alert('Erro ao deletar layout');
        }
    };
    const handleSaveProduct = async ()=>{
        if (!formData.title || !formData.description || formData.price <= 0 || formData.requiredDocuments.length === 0) {
            alert('Preencha todos os campos obrigatórios');
            return;
        }
        try {
            let imageUrl = formData.image;
            // Upload de imagem se fornecida
            if (formData.imageFile) {
                const storageRef_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storage"], `products/${formData.imageFile.name}-${Date.now()}`);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadBytes"])(storageRef_0, formData.imageFile);
                imageUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDownloadURL"])(storageRef_0);
            }
            const productData = {
                title: formData.title,
                description: formData.description,
                price: formData.price,
                category: formData.category,
                requiredDocuments: formData.requiredDocuments,
                requiredFiles: formData.requiredFiles,
                image: imageUrl,
                updatedAt: new Date().toISOString()
            };
            if (editingProduct) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'products', editingProduct.id), productData);
                alert('Produto atualizado com sucesso');
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'products'), {
                    ...productData,
                    createdAt: new Date().toISOString()
                });
                alert('Produto criado com sucesso');
            }
            resetForm();
            setShowProductForm(false);
        } catch (error_8) {
            console.error('Erro ao salvar produto:', error_8);
            alert('Erro ao salvar produto');
        }
    };
    const handleDeleteProduct = async (productId, imageUrl_0)=>{
        if (!confirm('Tem certeza que deseja deletar este produto?')) return;
        try {
            if (imageUrl_0) {
                const storageRef_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storage"], imageUrl_0);
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteObject"])(storageRef_1);
                } catch (e) {
                    console.warn('Erro ao deletar imagem:', e);
                }
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'products', productId));
            alert('Produto deletado com sucesso');
        } catch (error_9) {
            console.error('Erro ao deletar produto:', error_9);
            alert('Erro ao deletar produto');
        }
    };
    const resetForm = ()=>{
        setFormData({
            title: '',
            description: '',
            price: 0,
            category: 'insurance',
            requiredDocuments: [],
            requiredFiles: [],
            image: '',
            imageFile: null
        });
        setNewDoc('');
        setNewFile('');
        setEditingProduct(null);
    };
    const startEditProduct = (product)=>{
        setEditingProduct(product);
        setFormData({
            title: product.title,
            description: product.description,
            price: product.price,
            category: product.category,
            requiredDocuments: product.requiredDocuments,
            requiredFiles: product.requiredFiles || [],
            image: product.image,
            imageFile: null
        });
        setShowProductForm(true);
    };
    const StatCard = ({ icon: Icon, label, value, trend })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel p-6 rounded-xl border border-sky-500/20 hover:border-sky-500/40 transition-all",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-400 font-medium mb-1",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                lineNumber: 524,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-white",
                                children: value
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this),
                            trend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-xs mt-2 flex items-center gap-1 ${trend > 0 ? 'text-green-400' : 'text-red-400'}`,
                                children: [
                                    trend > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 527,
                                        columnNumber: 28
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownLeft$3e$__["ArrowDownLeft"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 527,
                                        columnNumber: 67
                                    }, this),
                                    Math.abs(trend),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                lineNumber: 526,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-sky-600/20 rounded-lg border border-sky-500/30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-6 w-6 text-sky-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                            lineNumber: 532,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                        lineNumber: 531,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                lineNumber: 522,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/page.tsx",
            lineNumber: 521,
            columnNumber: 14
        }, this);
    if (!adminUser || adminUser.role !== 'admin') {
        return null;
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-screen bg-[#020c1b]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-10 w-10 text-sky-400 animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                lineNumber: 541,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/page.tsx",
            lineNumber: 540,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-[#020c1b] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${sidebarOpen ? 'w-64' : 'w-20'} bg-white/5 backdrop-blur border-r border-sky-500/20 transition-all duration-300 flex flex-col`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-sky-500/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold text-sky-300",
                                    children: "🎯 Admin"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 550,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSidebarOpen(!sidebarOpen),
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    children: sidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 552,
                                        columnNumber: 30
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 552,
                                        columnNumber: 58
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 551,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                            lineNumber: 549,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                        lineNumber: 548,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 p-4 space-y-2 overflow-y-auto",
                        children: [
                            {
                                id: 'dashboard',
                                label: 'Dashboard',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
                            },
                            {
                                id: 'orders',
                                label: 'Pedidos Pendentes',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"]
                            },
                            {
                                id: 'completed',
                                label: 'Vendas Finalizadas',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"]
                            },
                            {
                                id: 'products',
                                label: 'Produtos',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
                            },
                            {
                                id: 'layout',
                                label: 'Layout Editor',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
                            },
                            {
                                id: 'stats',
                                label: 'Estatísticas',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
                            }
                        ].map(({ id, label: label_0, icon: Icon_0 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(id),
                                className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === id ? 'bg-sky-600/30 text-sky-300 border border-sky-500/50' : 'text-slate-400 hover:text-slate-300 hover:bg-white/5'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon_0, {
                                        className: "h-5 w-5 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 588,
                                        columnNumber: 15
                                    }, this),
                                    sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        children: label_0
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 589,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, id, true, {
                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                lineNumber: 587,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                        lineNumber: 558,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-sky-500/20 space-y-2",
                        children: [
                            sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-400 truncate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-slate-300 truncate",
                                        children: adminUser?.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 596,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate",
                                        children: adminUser?.email
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 597,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                lineNumber: 595,
                                columnNumber: 27
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogout,
                                className: "w-full flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-300 rounded-lg hover:bg-red-600/30 transition-colors text-sm font-medium border border-red-500/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 600,
                                        columnNumber: 13
                                    }, this),
                                    sidebarOpen && 'Sair'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                lineNumber: 599,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                lineNumber: 546,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 backdrop-blur border-b border-sky-500/20 p-6 flex items-center justify-between flex-wrap gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-white capitalize",
                                children: [
                                    activeTab === 'dashboard' && '📊 Dashboard',
                                    activeTab === 'orders' && '📦 Pedidos Pendentes',
                                    activeTab === 'completed' && '✅ Vendas Finalizadas',
                                    activeTab === 'products' && '🛍️ Produtos',
                                    activeTab === 'layout' && '🎨 Layout Editor',
                                    activeTab === 'stats' && '📈 Estatísticas'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                lineNumber: 610,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative hidden md:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-2.5 h-4 w-4 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 619,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Buscar...",
                                        value: searchQuery,
                                        onChange: (e_0)=>setSearchQuery(e_0.target.value),
                                        className: "pl-10 pr-4 py-2 bg-white/10 border border-sky-500/30 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 620,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                lineNumber: 618,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                        lineNumber: 609,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto space-y-6",
                            children: [
                                activeTab === 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
                                                    label: "Total Pedidos",
                                                    value: stats.total
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                                    label: "Pendentes",
                                                    value: stats.pending
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
                                                    label: "Concluídos",
                                                    value: stats.completed
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 632,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
                                                    label: "Receita Finalizada",
                                                    value: `R$ ${stats.revenue.toFixed(2)}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                                    label: "Receita Total",
                                                    value: `R$ ${stats.totalRevenue.toFixed(2)}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 634,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 629,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-panel rounded-xl border border-sky-500/20 p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-sky-300 mb-4",
                                                    children: "📋 Pedidos Recentes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 638,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-x-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "border-b border-sky-500/20",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-left py-3 px-4 text-slate-400 font-semibold",
                                                                            children: "Cliente"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 643,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-left py-3 px-4 text-slate-400 font-semibold",
                                                                            children: "Pedido ID"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 644,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-left py-3 px-4 text-slate-400 font-semibold",
                                                                            children: "Valor"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 645,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-left py-3 px-4 text-slate-400 font-semibold",
                                                                            children: "Status"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 646,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-left py-3 px-4 text-slate-400 font-semibold",
                                                                            children: "Data"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 647,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 642,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 641,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: orders.slice(0, 10).map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "border-b border-sky-500/10 hover:bg-white/5 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-3 px-4 text-slate-300",
                                                                                children: order.userName || 'Anônimo'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                lineNumber: 652,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-3 px-4 text-slate-400 font-mono text-xs",
                                                                                children: order.id.slice(0, 8)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                lineNumber: 653,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-3 px-4 text-sky-300 font-semibold",
                                                                                children: [
                                                                                    "R$ ",
                                                                                    order.total.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                lineNumber: 654,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-3 px-4",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `text-xs px-2 py-1 rounded-full border ${getStatusColor(order.status)}`,
                                                                                    children: order.status.replace('_', ' ')
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                    lineNumber: 656,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                lineNumber: 655,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-3 px-4 text-slate-400 text-xs",
                                                                                children: new Date(order.date).toLocaleDateString('pt-BR')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                lineNumber: 660,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, order.id, true, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 651,
                                                                        columnNumber: 59
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 650,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 639,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 637,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-panel p-6 rounded-2xl border border-sky-500/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-white flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 671,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Gerenciar Usuários (",
                                                            users.length,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 19
                                                }, this),
                                                usersLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center text-slate-400 py-8",
                                                    children: "Carregando usuários..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 676,
                                                    columnNumber: 35
                                                }, this) : users.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-slate-400 py-8",
                                                    children: "Nenhum usuário encontrado"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 676,
                                                    columnNumber: 136
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 max-h-96 overflow-y-auto",
                                                    children: users.map((u_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between p-4 bg-white/5 rounded-lg border border-sky-500/10 hover:border-sky-500/30 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-full bg-sky-600/30 flex items-center justify-center border border-sky-500/30",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                                className: "h-5 w-5 text-sky-300"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                lineNumber: 680,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 679,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "font-semibold text-white truncate",
                                                                                    children: u_1.name || '(sem nome)'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                    lineNumber: 683,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs text-slate-400 truncate",
                                                                                    children: u_1.email
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                    lineNumber: 684,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 682,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 678,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 ml-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-xs px-3 py-1 rounded-full font-medium ${u_1.role === 'admin' ? 'bg-sky-600/30 text-sky-300 border border-sky-500/30' : 'bg-slate-600/30 text-slate-300 border border-slate-500/30'}`,
                                                                            children: u_1.role === 'admin' ? '👑 Admin' : 'Cliente'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 688,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                setSelectedUser(u_1);
                                                                                setEditingUser(null);
                                                                            },
                                                                            className: "px-3 py-1 bg-cyan-600 text-white rounded-lg text-xs hover:bg-cyan-500 transition-colors font-medium whitespace-nowrap",
                                                                            children: "Detalhes"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 691,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 687,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, u_1.id, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 677,
                                                            columnNumber: 41
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 676,
                                                    columnNumber: 215
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 668,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                activeTab === 'orders' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: filteredOrders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-panel p-12 text-center rounded-xl border border-sky-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                className: "h-12 w-12 mx-auto text-slate-500 mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 706,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400",
                                                children: "Nenhum pedido pendente"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 707,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 705,
                                        columnNumber: 48
                                    }, this) : filteredOrders.map((order_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-panel p-6 rounded-xl border border-sky-500/20 hover:border-sky-500/40 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-lg font-bold text-white",
                                                                    children: order_0.userName || 'Cliente'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 711,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-400 font-mono",
                                                                    children: [
                                                                        "ID: ",
                                                                        order_0.id
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 712,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 710,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-xs px-3 py-1 rounded-full border ${getStatusColor(order_0.status)}`,
                                                            children: order_0.status.replace('_', ' ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 714,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 mb-4",
                                                    children: order_0.items.map((item_0, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setSelectedOrder(order_0);
                                                                setSelectedOrderItem(item_0);
                                                            },
                                                            className: "w-full text-left text-sm text-slate-300 bg-white/5 hover:bg-sky-600/20 p-3 rounded border border-sky-500/20 hover:border-sky-500/50 transition-all",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-semibold text-white",
                                                                                children: item_0.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                lineNumber: 726,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-slate-400 mt-1",
                                                                                children: [
                                                                                    "R$ ",
                                                                                    item_0.price.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                lineNumber: 727,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 725,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right",
                                                                        children: item_0.requiredDocuments && item_0.requiredDocuments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-sky-300",
                                                                            children: [
                                                                                Object.keys(item_0.uploadedDocs || {}).length,
                                                                                "/",
                                                                                item_0.requiredDocuments.length,
                                                                                " docs"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 730,
                                                                            columnNumber: 101
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 729,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 724,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, idx, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 720,
                                                            columnNumber: 61
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 719,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between pt-4 border-t border-sky-500/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-slate-400",
                                                                    children: "Total"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 740,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xl font-bold text-sky-300",
                                                                    children: [
                                                                        "R$ ",
                                                                        order_0.total.toFixed(2)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 741,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 739,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: order_0.status,
                                                            onChange: (e_1)=>handleStatusUpdate(order_0.id, e_1.target.value),
                                                            className: "px-4 py-2 bg-sky-600/30 border border-sky-500/50 rounded-lg text-sky-300 text-sm font-medium focus:outline-none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "pending_docs",
                                                                    children: "Analisando Docs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 744,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "pending_payment",
                                                                    children: "Aguardando Pagamento"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 745,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "processing",
                                                                    children: "Em Processamento"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 746,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "paid",
                                                                    children: "Pago"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 747,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "completed",
                                                                    children: "Concluído"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 748,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "rejected",
                                                                    children: "Rejeitado"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 749,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 743,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 738,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, order_0.id, true, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 708,
                                            columnNumber: 58
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 704,
                                    columnNumber: 40
                                }, this),
                                activeTab === 'completed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: filteredOrders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-panel p-12 text-center rounded-xl border border-sky-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "h-12 w-12 mx-auto text-slate-500 mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 758,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400",
                                                children: "Nenhuma venda finalizada"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 759,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 757,
                                        columnNumber: 48
                                    }, this) : filteredOrders.map((order_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-panel p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-lg font-bold text-white",
                                                                    children: order_1.userName || 'Cliente'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 763,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-400 font-mono",
                                                                    children: [
                                                                        "ID: ",
                                                                        order_1.id
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 764,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-green-400 mt-1",
                                                                    children: [
                                                                        "✅ Finalizado em ",
                                                                        new Date(order_1.date).toLocaleDateString('pt-BR')
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 765,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 762,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-slate-400",
                                                                    children: "Receita"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 768,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl font-bold text-green-400",
                                                                    children: [
                                                                        "R$ ",
                                                                        order_1.total.toFixed(2)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 769,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 767,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 761,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 mb-4",
                                                    children: order_1.items.map((item_1, idx_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-slate-300 bg-white/5 p-2 rounded",
                                                            children: [
                                                                item_1.title,
                                                                " - R$ ",
                                                                item_1.price.toFixed(2)
                                                            ]
                                                        }, idx_0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 774,
                                                            columnNumber: 63
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 773,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, order_1.id, true, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 760,
                                            columnNumber: 58
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 756,
                                    columnNumber: 43
                                }, this),
                                activeTab === 'products' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: !showProductForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        resetForm();
                                                        setShowProductForm(true);
                                                    },
                                                    className: "px-6 py-2 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-lg hover:from-sky-500 hover:to-blue-500 transition-all font-semibold flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 789,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Novo Produto"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 785,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 784,
                                                columnNumber: 21
                                            }, this),
                                            productsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center py-12",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-8 w-8 text-sky-400 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 795,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 794,
                                                columnNumber: 40
                                            }, this) : products.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-panel p-12 text-center rounded-xl border border-sky-500/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                        className: "h-12 w-12 mx-auto text-slate-500 mb-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 797,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400",
                                                        children: "Nenhum produto cadastrado"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 798,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500 mt-2",
                                                        children: 'Clique em "Novo Produto" para começar'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 799,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 796,
                                                columnNumber: 56
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: products.map((product_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "glass-panel p-6 rounded-xl border border-sky-500/20 hover:border-sky-500/40 transition-all",
                                                        children: [
                                                            product_0.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: product_0.image,
                                                                alt: product_0.title,
                                                                className: "w-full h-40 object-cover rounded-lg mb-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 802,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-bold text-white mb-2",
                                                                children: product_0.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 803,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-slate-300 mb-3 line-clamp-2",
                                                                children: product_0.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 804,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl font-bold text-sky-300",
                                                                        children: [
                                                                            "R$ ",
                                                                            product_0.price.toFixed(2)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 806,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs px-2 py-1 rounded-full bg-sky-600/30 text-sky-300 border border-sky-500/30 capitalize",
                                                                        children: product_0.category === 'insurance' ? 'Seguro' : product_0.category === 'license' ? 'Licença' : 'Documentação'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 807,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 805,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-4 flex gap-2 flex-wrap",
                                                                children: [
                                                                    product_0.requiredDocuments.slice(0, 3).map((doc_3, idx_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs bg-white/10 text-slate-300 px-2 py-1 rounded border border-slate-500/30",
                                                                            children: doc_3
                                                                        }, idx_1, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 812,
                                                                            columnNumber: 94
                                                                        }, this)),
                                                                    product_0.requiredDocuments.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs bg-white/10 text-slate-400 px-2 py-1 rounded",
                                                                        children: [
                                                                            "+",
                                                                            product_0.requiredDocuments.length - 3
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 815,
                                                                        columnNumber: 74
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 811,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>startEditProduct(product_0),
                                                                        className: "flex-1 px-3 py-2 bg-sky-600 text-white rounded-lg text-sm hover:bg-sky-500 transition-colors",
                                                                        children: "Editar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 820,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleDeleteProduct(product_0.id, product_0.image),
                                                                        className: "flex-1 px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-500 transition-colors",
                                                                        children: "Deletar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 823,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 819,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, product_0.id, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 801,
                                                        columnNumber: 52
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 800,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-panel p-8 rounded-xl border border-sky-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-white mb-6",
                                                children: editingProduct ? 'Editar Produto' : 'Novo Produto'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 830,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "Título",
                                                                value: formData.title,
                                                                onChange: (e_2)=>setFormData({
                                                                        ...formData,
                                                                        title: e_2.target.value
                                                                    }),
                                                                className: "px-4 py-2 bg-white/5 border border-sky-500/20 rounded-lg text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 836,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                placeholder: "Preço",
                                                                value: formData.price,
                                                                onChange: (e_3)=>setFormData({
                                                                        ...formData,
                                                                        price: parseFloat(e_3.target.value)
                                                                    }),
                                                                className: "px-4 py-2 bg-white/5 border border-sky-500/20 rounded-lg text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 840,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 835,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        placeholder: "Descrição",
                                                        value: formData.description,
                                                        onChange: (e_4)=>setFormData({
                                                                ...formData,
                                                                description: e_4.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 bg-white/5 border border-sky-500/20 rounded-lg text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none h-24 resize-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 846,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: formData.category,
                                                                onChange: (e_5)=>setFormData({
                                                                        ...formData,
                                                                        category: e_5.target.value
                                                                    }),
                                                                className: "px-4 py-2 bg-white/5 border border-sky-500/20 rounded-lg text-white focus:border-sky-500 focus:outline-none",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "insurance",
                                                                        children: "Seguro"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 856,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "license",
                                                                        children: "Licença"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 857,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "bureaucracy",
                                                                        children: "Documentação"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 858,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 852,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/*",
                                                                onChange: (e_6)=>setFormData({
                                                                        ...formData,
                                                                        imageFile: e_6.target.files?.[0] || null
                                                                    }),
                                                                className: "px-4 py-2 bg-white/5 border border-sky-500/20 rounded-lg text-white text-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 861,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 851,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t border-sky-500/20 pt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-white font-bold mb-3",
                                                                children: "Documentos Necessários"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 869,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2 mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        placeholder: "Ex: RG, CPF, Comprovante de Residência",
                                                                        value: newDoc,
                                                                        onChange: (e_7)=>setNewDoc(e_7.target.value),
                                                                        className: "flex-1 px-4 py-2 bg-white/5 border border-sky-500/20 rounded-lg text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 871,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            if (newDoc.trim()) {
                                                                                setFormData({
                                                                                    ...formData,
                                                                                    requiredDocuments: [
                                                                                        ...formData.requiredDocuments,
                                                                                        newDoc
                                                                                    ]
                                                                                });
                                                                                setNewDoc('');
                                                                            }
                                                                        },
                                                                        className: "px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-colors",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 881,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 872,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 870,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: formData.requiredDocuments.map((doc_4, idx_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "bg-sky-600/30 text-sky-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-sky-500/30",
                                                                        children: [
                                                                            doc_4,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setFormData({
                                                                                        ...formData,
                                                                                        requiredDocuments: formData.requiredDocuments.filter((_, i_0)=>i_0 !== idx_2)
                                                                                    }),
                                                                                className: "text-red-400 hover:text-red-300",
                                                                                children: "✕"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                lineNumber: 887,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, idx_2, true, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 885,
                                                                        columnNumber: 77
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 884,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 868,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t border-sky-500/20 pt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-white font-bold mb-3",
                                                                children: "Tipos de Arquivo Aceitos (opcional)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 899,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2 mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        placeholder: "Ex: PDF, JPG, PNG",
                                                                        value: newFile,
                                                                        onChange: (e_8)=>setNewFile(e_8.target.value.toUpperCase()),
                                                                        className: "flex-1 px-4 py-2 bg-white/5 border border-sky-500/20 rounded-lg text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 901,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            if (newFile.trim()) {
                                                                                setFormData({
                                                                                    ...formData,
                                                                                    requiredFiles: [
                                                                                        ...formData.requiredFiles,
                                                                                        newFile
                                                                                    ]
                                                                                });
                                                                                setNewFile('');
                                                                            }
                                                                        },
                                                                        className: "px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-colors",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 911,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 902,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 900,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: formData.requiredFiles.map((file_0, idx_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "bg-cyan-600/30 text-cyan-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-cyan-500/30",
                                                                        children: [
                                                                            file_0,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setFormData({
                                                                                        ...formData,
                                                                                        requiredFiles: formData.requiredFiles.filter((__0, i_1)=>i_1 !== idx_3)
                                                                                    }),
                                                                                className: "text-red-400 hover:text-red-300",
                                                                                children: "✕"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                lineNumber: 917,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, idx_3, true, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 915,
                                                                        columnNumber: 74
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 914,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 898,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3 pt-4 border-t border-sky-500/20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleSaveProduct,
                                                                className: "flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all font-bold",
                                                                children: editingProduct ? 'Atualizar Produto' : 'Criar Produto'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 928,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    resetForm();
                                                                    setShowProductForm(false);
                                                                },
                                                                className: "flex-1 px-4 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors font-bold",
                                                                children: "Cancelar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 931,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 927,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 834,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 829,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 782,
                                    columnNumber: 42
                                }, this),
                                activeTab === 'layout' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-panel p-6 rounded-xl border border-sky-500/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-bold text-sky-300",
                                                            children: "Meus Layouts"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 947,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setCurrentLayout({
                                                                    id: 'new',
                                                                    name: 'Novo Layout',
                                                                    description: 'Layout criado',
                                                                    canvasWidth: 1200,
                                                                    canvasHeight: 600,
                                                                    backgroundColor: {
                                                                        r: 2,
                                                                        g: 12,
                                                                        b: 27
                                                                    },
                                                                    layers: [],
                                                                    createdAt: new Date().toISOString(),
                                                                    updatedAt: new Date().toISOString(),
                                                                    createdBy: adminUser?.id || 'unknown'
                                                                });
                                                            },
                                                            className: "px-4 py-2 bg-sky-600 text-white rounded-lg text-sm hover:bg-sky-500 transition flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 966,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Novo Layout"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 948,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 946,
                                                    columnNumber: 19
                                                }, this),
                                                layoutsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center text-slate-400 py-8",
                                                    children: "Carregando layouts..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 971,
                                                    columnNumber: 37
                                                }, this) : layouts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-slate-400 py-8",
                                                    children: "Nenhum layout criado ainda"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 971,
                                                    columnNumber: 139
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: layouts.map((layout_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-4 rounded-lg border cursor-pointer transition-all ${currentLayout?.id === layout_0.id ? 'bg-sky-600/30 border-sky-500' : 'bg-white/5 border-sky-500/20 hover:border-sky-500/50'}`,
                                                            onClick: ()=>setCurrentLayout(layout_0),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "font-semibold text-white",
                                                                                children: layout_0.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                lineNumber: 975,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-slate-400 mt-1",
                                                                                children: layout_0.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                lineNumber: 976,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-slate-500 mt-2",
                                                                                children: [
                                                                                    layout_0.layers.length,
                                                                                    " camadas"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                                lineNumber: 977,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 974,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: (e_9)=>{
                                                                            e_9.stopPropagation();
                                                                            handleDeleteLayout(layout_0.id);
                                                                        },
                                                                        className: "p-2 hover:bg-red-600/30 rounded text-red-400",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 983,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 979,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 973,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, layout_0.id, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 972,
                                                            columnNumber: 48
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 971,
                                                    columnNumber: 219
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 945,
                                            columnNumber: 17
                                        }, this),
                                        currentLayout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-[600px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LayoutEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutEditor"], {
                                                initialLayout: currentLayout,
                                                onSave: handleSaveLayout
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 992,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 991,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 943,
                                    columnNumber: 40
                                }, this),
                                activeTab === 'stats' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-panel p-6 rounded-xl border border-sky-500/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-sky-300 mb-4",
                                                    children: "📊 Distribuição por Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 999,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        'pending_docs',
                                                        'pending_payment',
                                                        'processing',
                                                        'completed',
                                                        'rejected'
                                                    ].map((status_0)=>{
                                                        const count = orders.filter((o_7)=>o_7.status === status_0).length;
                                                        const percentage = orders.length > 0 ? count / orders.length * 100 : 0;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-sm mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-300 capitalize",
                                                                            children: status_0.replace('_', ' ')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 1006,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sky-300 font-semibold",
                                                                            children: count
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 1007,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 1005,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-full bg-white/5 rounded-full h-2 overflow-hidden border border-sky-500/20",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-gradient-to-r from-sky-600 to-blue-600 h-full",
                                                                        style: {
                                                                            width: `${percentage}%`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                        lineNumber: 1010,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 1009,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, status_0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1004,
                                                            columnNumber: 26
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 1000,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 998,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-panel p-6 rounded-xl border border-sky-500/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-sky-300 mb-4",
                                                    children: "💰 Resumo Financeiro"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 1020,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center p-3 bg-white/5 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-300",
                                                                    children: "Receita Total"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 1023,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl font-bold text-sky-300",
                                                                    children: [
                                                                        "R$ ",
                                                                        stats.totalRevenue.toFixed(2)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 1024,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1022,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center p-3 bg-white/5 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-300",
                                                                    children: "Receita Finalizada"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 1027,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl font-bold text-green-400",
                                                                    children: [
                                                                        "R$ ",
                                                                        stats.revenue.toFixed(2)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 1028,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1026,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center p-3 bg-white/5 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-300",
                                                                    children: "Ticket Médio"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 1031,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl font-bold text-cyan-300",
                                                                    children: [
                                                                        "R$ ",
                                                                        stats.avgTicket.toFixed(2)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 1032,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1030,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 1021,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 1019,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 997,
                                    columnNumber: 39
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                            lineNumber: 626,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                        lineNumber: 625,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                lineNumber: 607,
                columnNumber: 7
            }, this),
            selectedOrder && selectedOrderItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-panel rounded-2xl border border-sky-500/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 p-6 border-b border-sky-500/20 bg-[#020c1b] flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-white",
                                            children: selectedOrderItem.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 1046,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-400 mt-1",
                                            children: [
                                                "Pedido: ",
                                                selectedOrder.id
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 1047,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 1045,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedOrder(null);
                                        setSelectedOrderItem(null);
                                    },
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-6 w-6 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 1053,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 1049,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                            lineNumber: 1044,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-panel p-4 rounded-xl border border-sky-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sky-300 font-bold mb-3 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 1061,
                                                    columnNumber: 19
                                                }, this),
                                                "Informações do Serviço"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 1060,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-400",
                                                            children: "Categoria"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1066,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white font-semibold capitalize",
                                                            children: selectedOrderItem.category === 'insurance' ? 'Seguro' : selectedOrderItem.category === 'license' ? 'Licença' : 'Documentação'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1067,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 1065,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-400",
                                                            children: "Preço"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1072,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white font-semibold",
                                                            children: [
                                                                "R$ ",
                                                                selectedOrderItem.price.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1073,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 1071,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 1064,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-300 text-sm mt-3",
                                            children: selectedOrderItem.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 1076,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 1059,
                                    columnNumber: 15
                                }, this),
                                selectedOrderItem.requiredDocuments && selectedOrderItem.requiredDocuments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sky-300 font-bold flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 1082,
                                                    columnNumber: 21
                                                }, this),
                                                "Documentos Necessários (",
                                                Object.keys(selectedOrderItem.uploadedDocs || {}).length,
                                                "/",
                                                selectedOrderItem.requiredDocuments.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 1081,
                                            columnNumber: 19
                                        }, this),
                                        selectedOrderItem.requiredDocuments.map((doc_5)=>{
                                            const isUploaded = isDocumentUploaded(doc_5);
                                            const isUploading = uploadingDocs[doc_5];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `glass-panel p-4 rounded-xl border transition-all ${isUploaded ? 'border-green-500/30 bg-green-600/10' : 'border-yellow-500/30 bg-yellow-600/10'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                isUploaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                    className: "h-5 w-5 text-green-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 1092,
                                                                    columnNumber: 43
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                    className: "h-5 w-5 text-yellow-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 1092,
                                                                    columnNumber: 96
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-white font-semibold",
                                                                            children: doc_5
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 1094,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        isUploaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-green-400",
                                                                            children: "✅ Documento recebido"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                            lineNumber: 1095,
                                                                            columnNumber: 46
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                    lineNumber: 1093,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1091,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1090,
                                                        columnNumber: 25
                                                    }, this),
                                                    !isUploaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: `file-${doc_5}`,
                                                                type: "file",
                                                                accept: selectedOrderItem.requiredFiles?.join(',') || '*',
                                                                disabled: isUploading,
                                                                onChange: (e_10)=>{
                                                                    const file_1 = e_10.target.files?.[0];
                                                                    if (file_1) {
                                                                        handleUploadMissingDocument(doc_5, file_1);
                                                                    }
                                                                },
                                                                className: "flex-1 text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-600 file:text-white hover:file:bg-sky-500 disabled:opacity-50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 1101,
                                                                columnNumber: 29
                                                            }, this),
                                                            isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "h-5 w-5 text-sky-400 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 1107,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1100,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, doc_5, true, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 1089,
                                                columnNumber: 22
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 1080,
                                    columnNumber: 105
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-panel p-4 rounded-xl border border-sky-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sky-300 font-bold mb-3",
                                            children: "👤 Cliente"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 1115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400",
                                                            children: "Nome:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1117,
                                                            columnNumber: 22
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white",
                                                            children: selectedOrder.userName || 'N/A'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1117,
                                                            columnNumber: 68
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 1117,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400",
                                                            children: "Status do Pedido:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1118,
                                                            columnNumber: 22
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `font-semibold ${getStatusColor(selectedOrder.status)}`,
                                                            children: selectedOrder.status.replace('_', ' ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1118,
                                                            columnNumber: 80
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 1118,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400",
                                                            children: "Data:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1119,
                                                            columnNumber: 22
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white",
                                                            children: new Date(selectedOrder.date).toLocaleDateString('pt-BR')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                            lineNumber: 1119,
                                                            columnNumber: 68
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                    lineNumber: 1119,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                            lineNumber: 1116,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 1114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setSelectedOrder(null);
                                            setSelectedOrderItem(null);
                                        },
                                        className: "flex-1 px-4 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors font-bold",
                                        children: "Fechar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 1125,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 1124,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                            lineNumber: 1057,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                    lineNumber: 1043,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                lineNumber: 1042,
                columnNumber: 46
            }, this),
            selectedUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-panel rounded-2xl border border-sky-500/20 max-w-md w-full max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 p-6 border-b border-sky-500/20 bg-[#020c1b] flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-white",
                                    children: "Detalhes do Usuário"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 1140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedUser(null);
                                        setEditingUser(null);
                                    },
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-6 w-6 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 1145,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                    lineNumber: 1141,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                            lineNumber: 1139,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-6",
                            children: !editingUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-panel p-4 rounded-xl border border-sky-500/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm mb-1",
                                                        children: "Nome"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1154,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-semibold text-lg",
                                                        children: selectedUser.name || '(sem nome)'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1155,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 1153,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-panel p-4 rounded-xl border border-sky-500/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm mb-1",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1159,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-semibold",
                                                        children: selectedUser.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1160,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 1158,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-panel p-4 rounded-xl border border-sky-500/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm mb-1",
                                                        children: "ID do Usuário"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1164,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-300 text-xs font-mono",
                                                        children: selectedUser.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1165,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 1163,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-panel p-4 rounded-xl border border-sky-500/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm mb-2",
                                                        children: "Função"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1169,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs px-3 py-1 rounded-full font-medium ${selectedUser.role === 'admin' ? 'bg-sky-600/30 text-sky-300 border border-sky-500/30' : 'bg-slate-600/30 text-slate-300 border border-slate-500/30'}`,
                                                                children: selectedUser.role === 'admin' ? '👑 Admin' : selectedUser.role === 'employee' ? '👨‍💼 Colaborador' : 'Cliente'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 1171,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>toggleUserAdmin(selectedUser.id, selectedUser.role !== 'admin'),
                                                                disabled: userPromoting[selectedUser.id],
                                                                className: "px-3 py-1 bg-sky-600 text-white rounded-lg text-xs hover:bg-sky-500 disabled:opacity-50 transition-colors font-medium",
                                                                children: userPromoting[selectedUser.id] ? '...' : selectedUser.role === 'admin' ? 'Remover Admin' : 'Tornar Admin'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 1174,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1170,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 1168,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 1152,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 pt-4 border-t border-sky-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setEditingUser({
                                                        ...selectedUser
                                                    }),
                                                className: "flex-1 px-4 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-colors font-bold flex items-center justify-center gap-2",
                                                children: "✎ Editar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 1183,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleDeleteUser,
                                                disabled: deletingUserId === selectedUser.id,
                                                className: "flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 disabled:opacity-50 transition-colors font-bold flex items-center justify-center gap-2",
                                                children: deletingUserId === selectedUser.id ? '...' : '🗑️ Deletar'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 1188,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 1182,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400 text-sm font-medium block mb-2",
                                                        children: "Nome"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1196,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: editingUser.name || '',
                                                        onChange: (e_11)=>setEditingUser({
                                                                ...editingUser,
                                                                name: e_11.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 bg-white/5 border border-sky-500/20 rounded-lg text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1197,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 1195,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400 text-sm font-medium block mb-2",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1204,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        value: editingUser.email || '',
                                                        onChange: (e_12)=>setEditingUser({
                                                                ...editingUser,
                                                                email: e_12.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 bg-white/5 border border-sky-500/20 rounded-lg text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1205,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 1203,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400 text-sm font-medium block mb-2",
                                                        children: "Função"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1212,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: editingUser.role || 'client',
                                                        onChange: (e_13)=>setEditingUser({
                                                                ...editingUser,
                                                                role: e_13.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 bg-white/5 border border-sky-500/20 rounded-lg text-white focus:border-sky-500 focus:outline-none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "client",
                                                                children: "Cliente"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 1217,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "admin",
                                                                children: "Admin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 1218,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "employee",
                                                                children: "Colaborador"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                                lineNumber: 1219,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                        lineNumber: 1213,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 1211,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 1194,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 pt-4 border-t border-sky-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleEditUser,
                                                className: "flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors font-bold",
                                                children: "✓ Salvar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 1226,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setEditingUser(null),
                                                className: "flex-1 px-4 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors font-bold",
                                                children: "✕ Cancelar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                                lineNumber: 1229,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/admin/page.tsx",
                                        lineNumber: 1225,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/page.tsx",
                            lineNumber: 1149,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/page.tsx",
                    lineNumber: 1138,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/page.tsx",
                lineNumber: 1137,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/admin/page.tsx",
        lineNumber: 544,
        columnNumber: 10
    }, this);
}
_s(AdminDashboard, "FvEpXFP8Xnf985dJ32kPz3z8feo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_fd36241f._.js.map