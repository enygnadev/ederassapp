(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/pix.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildBRCode",
    ()=>buildBRCode,
    "crc16",
    ()=>crc16,
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Minimal BR Code (EMV) generator for PIX QR (BR Code)
// Implements EMV payload assembly and CRC16-CCITT (false) calculation
function field(id, value) {
    const len = value.length.toString().padStart(2, '0');
    return `${id}${len}${value}`;
}
function crc16(payload) {
    // CRC-16/CCITT-FALSE
    const poly = 0x1021;
    let crc = 0xffff;
    const bytes = new TextEncoder().encode(payload);
    for(let i = 0; i < bytes.length; i++){
        crc ^= bytes[i] << 8;
        for(let j = 0; j < 8; j++){
            if (crc & 0x8000) crc = (crc << 1 ^ poly) & 0xffff;
            else crc = crc << 1 & 0xffff;
        }
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
}
function buildBRCode({ pixKey, amount, txid = '***', merchantName = 'Loja', merchantCity = 'Cidade' }) {
    // Merchant Account Information (GUI + key)
    const mai = field('00', 'BR.GOV.BCB.PIX') + field('01', pixKey);
    let payload = '';
    payload += field('00', '01'); // Payload format indicator
    payload += field('01', '12'); // Point of initiation method: 12 = static QR (common practice)
    payload += field('26', mai);
    payload += field('52', '0000'); // Merchant Category Code (0000 = unspecified)
    payload += field('53', '986'); // Currency: BRL
    if (amount !== undefined && amount !== null) payload += field('54', amount.toFixed(2));
    payload += field('58', 'BR');
    payload += field('59', merchantName.substring(0, 25));
    payload += field('60', merchantCity.substring(0, 15));
    // Additional data field template: txid
    payload += field('62', field('05', txid.substring(0, 25)));
    // CRC placeholder
    const payloadForCrc = payload + '6304';
    const crc = crc16(payloadForCrc);
    payload += field('63', crc);
    return payload;
}
const __TURBOPACK__default__export__ = buildBRCode;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/checkout/[orderId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaymentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pix$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pix.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
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
function PaymentPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(79);
    if ($[0] !== "76132d439094be022871df236e5db59e68e495ca41d9281d5b9a2c4755142dea") {
        for(let $i = 0; $i < 79; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "76132d439094be022871df236e5db59e68e495ca41d9281d5b9a2c4755142dea";
    }
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const orderId = params.orderId;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [order, setOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    let t1;
    if ($[1] !== orderId) {
        t0 = ({
            "PaymentPage[useEffect()]": ()=>{
                if (!orderId) {
                    return;
                }
                const orderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "orders", orderId);
                const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(orderRef, {
                    "PaymentPage[useEffect() > onSnapshot()]": (snap)=>{
                        if (!snap.exists()) {
                            setOrder(null);
                        } else {
                            setOrder({
                                id: snap.id,
                                ...snap.data()
                            });
                        }
                        setLoading(false);
                    }
                }["PaymentPage[useEffect() > onSnapshot()]"]);
                return ()=>unsub();
            }
        })["PaymentPage[useEffect()]"];
        t1 = [
            orderId
        ];
        $[1] = orderId;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (loading) {
        let t2;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-[60vh]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-10 w-10 text-sky-400 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 61,
                    columnNumber: 71
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                lineNumber: 61,
                columnNumber: 12
            }, this);
            $[4] = t2;
        } else {
            t2 = $[4];
        }
        return t2;
    }
    if (!order) {
        let t2;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 py-12 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-white mb-4",
                    children: "Pedido não encontrado"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 71,
                    columnNumber: 70
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                lineNumber: 71,
                columnNumber: 12
            }, this);
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        return t2;
    }
    let t2;
    if ($[6] !== order.id || $[7] !== order.payment?.pixPayload || $[8] !== order.total) {
        t2 = order.payment?.pixPayload || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pix$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            pixKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PIX_KEY || "12345678901234567890",
            amount: order.total,
            txid: order.id.substring(0, 25),
            merchantName: "Eder Martins",
            merchantCity: "Santa Catarina"
        });
        $[6] = order.id;
        $[7] = order.payment?.pixPayload;
        $[8] = order.total;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    const pixPayload = t2;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(pixPayload)}`;
    let t3;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold text-white",
            children: "💳 Pagamento do Pedido"
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== order.id) {
        t4 = order.id.slice(0, 8);
        $[11] = order.id;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== order.total) {
        t5 = order.total.toFixed(2);
        $[13] = order.total;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] !== t4 || $[16] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-400 mt-2",
                    children: [
                        "Pedido #",
                        t4,
                        " — R$ ",
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 121,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== router) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "PaymentPage[<button>.onClick]": ()=>router.push("/dashboard/client")
            }["PaymentPage[<button>.onClick]"],
            className: "text-sky-400 hover:text-sky-300",
            children: "Voltar"
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[18] = router;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== t6 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-8",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[20] = t6;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== order.payment?.status) {
        t9 = order.payment?.status === "paid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
            className: "h-6 w-6 text-green-400"
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 149,
            columnNumber: 45
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "h-6 w-6 text-amber-400"
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 149,
            columnNumber: 98
        }, this);
        $[23] = order.payment?.status;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    const t10 = order.payment?.status === "paid" ? "\u2705 Pagamento Confirmado!" : "\u23F3 Aguardando Pagamento";
    let t11;
    if ($[25] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold text-white",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== t11 || $[28] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-4",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[27] = t11;
        $[28] = t9;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    const t13 = order.payment?.status === "paid" ? "Seu pagamento foi confirmado. Voc\xEA receber\xE1 em breve um email com os pr\xF3ximos passos." : "Escaneie o QR Code abaixo ou copie a chave PIX para efetuar o pagamento.";
    let t14;
    if ($[30] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-slate-400 mb-4",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[30] = t13;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== t12 || $[33] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel rounded-2xl p-6 border-sky-500/30",
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[32] = t12;
        $[33] = t14;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-bold text-white mb-4 text-lg",
            children: "📦 Itens"
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== order.items) {
        t17 = order.items.map(_PaymentPageOrderItemsMap);
        $[36] = order.items;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[38] = t17;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-bold text-white text-lg",
            children: "Total:"
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] !== order.total) {
        t20 = order.total.toFixed(2);
        $[41] = order.total;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[43] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 pt-4 border-t border-slate-700 flex justify-between items-center",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold text-sky-300 text-2xl",
                    children: [
                        "R$ ",
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 231,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[43] = t20;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== t18 || $[46] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel rounded-2xl p-6 border-sky-500/30",
            children: [
                t16,
                t18,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[45] = t18;
        $[46] = t21;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] !== order.payment?.method || $[49] !== order.payment?.status || $[50] !== pixPayload || $[51] !== qrCodeUrl) {
        t23 = order.payment?.method === "pix" && order.payment?.status !== "paid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel rounded-2xl p-8 border-sky-500/30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-bold text-white mb-6 text-lg",
                    children: "📲 Pagamento via PIX"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 248,
                    columnNumber: 145
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: qrCodeUrl,
                            alt: "QR Code PIX",
                            className: "rounded-xl border-2 border-sky-500/30 shadow-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                            lineNumber: 248,
                            columnNumber: 269
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-400 mt-4",
                            children: "Escaneie este código com seu celular"
                        }, void 0, false, {
                            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                            lineNumber: 248,
                            columnNumber: 370
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 248,
                    columnNumber: 220
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500 uppercase tracking-wider mb-2",
                            children: "Chave PIX para Copiar"
                        }, void 0, false, {
                            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                            lineNumber: 248,
                            columnNumber: 531
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "flex-1 text-sky-300 font-mono text-sm break-all p-3 bg-slate-950 rounded-lg",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PIX_KEY || "12345678901234567890"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 665
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: _PaymentPageButtonOnClick,
                                    className: "px-4 py-2 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors whitespace-nowrap",
                                    children: "Copiar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 825
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                            lineNumber: 248,
                            columnNumber: 624
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 248,
                    columnNumber: 459
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 bg-slate-800/50 rounded-xl p-6 border border-slate-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500 uppercase tracking-wider mb-2",
                            children: "BR Code (para banco):"
                        }, void 0, false, {
                            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                            lineNumber: 248,
                            columnNumber: 1095
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            className: "text-sky-300 font-mono text-xs break-all block p-3 bg-slate-950 rounded-lg max-h-24 overflow-y-auto",
                            children: pixPayload
                        }, void 0, false, {
                            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                            lineNumber: 248,
                            columnNumber: 1188
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 248,
                    columnNumber: 1018
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 248,
            columnNumber: 82
        }, this);
        $[48] = order.payment?.method;
        $[49] = order.payment?.status;
        $[50] = pixPayload;
        $[51] = qrCodeUrl;
        $[52] = t23;
    } else {
        t23 = $[52];
    }
    let t24;
    if ($[53] !== order.id || $[54] !== order.payment?.method || $[55] !== order.payment?.status || $[56] !== order.total) {
        t24 = order.payment?.method === "whatsapp" && order.payment?.status !== "paid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel rounded-2xl p-8 border-sky-500/30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-bold text-white mb-4 text-lg",
                    children: "💬 Pagamento via WhatsApp"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 259,
                    columnNumber: 150
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-300 mb-6",
                    children: "Clique no botão abaixo para iniciar uma conversa comigo pelo WhatsApp. Ele te guiará através do pagamento."
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 259,
                    columnNumber: 230
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: `https://wa.me/5548996241068?text=Olá!%20Gostaria%20de%20pagar%20o%20pedido%20%23${order.id.slice(0, 8)}%20no%20valor%20de%20R$%20${order.total.toFixed(2)}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-block px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors",
                    children: "💚 Iniciar Chat no WhatsApp"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 259,
                    columnNumber: 375
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 259,
            columnNumber: 87
        }, this);
        $[53] = order.id;
        $[54] = order.payment?.method;
        $[55] = order.payment?.status;
        $[56] = order.total;
        $[57] = t24;
    } else {
        t24 = $[57];
    }
    let t25;
    if ($[58] !== order.payment?.method || $[59] !== order.payment?.status) {
        t25 = order.payment?.method === "card" && order.payment?.status !== "paid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel rounded-2xl p-8 border-sky-500/30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-bold text-white mb-4 text-lg",
                    children: "💳 Pagamento com Cartão"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 270,
                    columnNumber: 146
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-400 mb-6",
                    children: "Você será redirecionado para o gateway de pagamento seguro para finalizar com cartão."
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 270,
                    columnNumber: 224
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors",
                    children: "Pagar com Cartão (Stripe)"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 270,
                    columnNumber: 348
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 270,
            columnNumber: 83
        }, this);
        $[58] = order.payment?.method;
        $[59] = order.payment?.status;
        $[60] = t25;
    } else {
        t25 = $[60];
    }
    let t26;
    if ($[61] !== order.id || $[62] !== order.payment?.method || $[63] !== order.payment?.status || $[64] !== order.total) {
        t26 = order.payment?.method === "manual" && order.payment?.status !== "paid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel rounded-2xl p-8 border-sky-500/30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-bold text-white mb-4 text-lg",
                    children: "📞 Pagamento Manual"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 279,
                    columnNumber: 148
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-400 mb-6",
                    children: "Agradecemos sua escolha. Entraremos em contato em breve para finalizar o pagamento."
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 279,
                    columnNumber: 222
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-500",
                    children: [
                        "Pedido: #",
                        order.id.slice(0, 8),
                        " | Valor: R$ ",
                        order.total.toFixed(2)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                    lineNumber: 279,
                    columnNumber: 344
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 279,
            columnNumber: 85
        }, this);
        $[61] = order.id;
        $[62] = order.payment?.method;
        $[63] = order.payment?.status;
        $[64] = order.total;
        $[65] = t26;
    } else {
        t26 = $[65];
    }
    let t27;
    if ($[66] !== order.payment?.status) {
        t27 = order.payment?.status === "paid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel rounded-2xl p-8 border-green-500/30 bg-green-500/10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                        className: "h-16 w-16 text-green-400 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                        lineNumber: 290,
                        columnNumber: 157
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-green-300 mb-2",
                        children: "Pagamento Confirmado!"
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                        lineNumber: 290,
                        columnNumber: 222
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300",
                        children: "Seu pedido será processado em breve. Você receberá atualizações por email."
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                        lineNumber: 290,
                        columnNumber: 303
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                lineNumber: 290,
                columnNumber: 128
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 290,
            columnNumber: 47
        }, this);
        $[66] = order.payment?.status;
        $[67] = t27;
    } else {
        t27 = $[67];
    }
    let t28;
    if ($[68] !== t15 || $[69] !== t22 || $[70] !== t23 || $[71] !== t24 || $[72] !== t25 || $[73] !== t26 || $[74] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t15,
                t22,
                t23,
                t24,
                t25,
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[68] = t15;
        $[69] = t22;
        $[70] = t23;
        $[71] = t24;
        $[72] = t25;
        $[73] = t26;
        $[74] = t27;
        $[75] = t28;
    } else {
        t28 = $[75];
    }
    let t29;
    if ($[76] !== t28 || $[77] !== t8) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 py-12 animate-fade-in",
            children: [
                t8,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[76] = t28;
        $[77] = t8;
        $[78] = t29;
    } else {
        t29 = $[78];
    }
    return t29;
}
_s(PaymentPage, "pUagfbBFicSuwQrienFvunrJQVU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PaymentPage;
function _PaymentPageButtonOnClick() {
    navigator.clipboard.writeText(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PIX_KEY || "12345678901234567890");
    alert("Chave copiada!");
}
function _PaymentPageOrderItemsMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-center bg-slate-800/50 p-3 rounded-lg border border-slate-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium text-slate-300",
                children: item.title
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                lineNumber: 326,
                columnNumber: 134
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-sky-300",
                children: [
                    "R$ ",
                    item.price.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
                lineNumber: 326,
                columnNumber: 198
            }, this)
        ]
    }, item.cartId, true, {
        fileName: "[project]/src/app/checkout/[orderId]/page.tsx",
        lineNumber: 326,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "PaymentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LoaderCircle
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("loader-circle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleCheckBig
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
];
const CircleCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check-big", __iconNode);
;
 //# sourceMappingURL=circle-check-big.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_a759887d._.js.map