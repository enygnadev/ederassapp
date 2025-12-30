(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/client/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
function ClientDashboard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(52);
    if ($[0] !== "edfc1c9f460a8631a7e7d9c165fe7c3ef15e0e6ed744867dccc3d08061616d2a") {
        for(let $i = 0; $i < 52; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "edfc1c9f460a8631a7e7d9c165fe7c3ef15e0e6ed744867dccc3d08061616d2a";
    }
    const { user, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [localOrders, setLocalOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusFilterLocal, setStatusFilterLocal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("newest");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("orders");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    if ($[2] !== authLoading || $[3] !== user) {
        t1 = ({
            "ClientDashboard[useEffect()]": ()=>{
                if (authLoading) {
                    return;
                }
                if (!user) {
                    setLoading(false);
                    setLocalOrders([]);
                    return;
                }
                const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "orders"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("userId", "==", user.id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("date", "desc"));
                setLoading(true);
                const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                    "ClientDashboard[useEffect() > onSnapshot(arg1)]": (snapshot)=>{
                        const fetchedOrders = snapshot.docs.map(_ClientDashboardUseEffectOnSnapshotArg1SnapshotDocsMap);
                        setLocalOrders(fetchedOrders);
                        setLoading(false);
                    }
                }["ClientDashboard[useEffect() > onSnapshot(arg1)]"], {
                    "ClientDashboard[useEffect() > onSnapshot(arg2)]": (error)=>{
                        console.error("Error fetching orders:", error);
                        setLoading(false);
                    }
                }["ClientDashboard[useEffect() > onSnapshot(arg2)]"]);
                return ()=>unsubscribe();
            }
        })["ClientDashboard[useEffect()]"];
        t2 = [
            user,
            authLoading
        ];
        $[2] = authLoading;
        $[3] = user;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const getStatusBadge = _ClientDashboardGetStatusBadge;
    let out;
    if ($[6] !== localOrders || $[7] !== search || $[8] !== sortBy || $[9] !== statusFilterLocal) {
        out = localOrders.slice();
        if (statusFilterLocal !== "all") {
            let t3;
            if ($[11] !== statusFilterLocal) {
                t3 = ({
                    "ClientDashboard[out.filter()]": (o)=>o.status === statusFilterLocal
                })["ClientDashboard[out.filter()]"];
                $[11] = statusFilterLocal;
                $[12] = t3;
            } else {
                t3 = $[12];
            }
            out = out.filter(t3);
        }
        if (search.trim()) {
            const q_0 = search.toLowerCase();
            out = out.filter({
                "ClientDashboard[out.filter()]": (o_0)=>(o_0.userName || "").toLowerCase().includes(q_0) || o_0.id.toLowerCase().includes(q_0) || o_0.items.some({
                        "ClientDashboard[out.filter() > o_0.items.some()]": (i)=>i.title.toLowerCase().includes(q_0)
                    }["ClientDashboard[out.filter() > o_0.items.some()]"])
            }["ClientDashboard[out.filter()]"]);
        }
        bb0: switch(sortBy){
            case "newest":
                {
                    out.sort(_ClientDashboardOutSort);
                    break bb0;
                }
            case "oldest":
                {
                    out.sort(_ClientDashboardOutSort2);
                    break bb0;
                }
            case "value_asc":
                {
                    out.sort(_ClientDashboardOutSort3);
                    break bb0;
                }
            case "value_desc":
                {
                    out.sort(_ClientDashboardOutSort4);
                }
        }
        $[6] = localOrders;
        $[7] = search;
        $[8] = sortBy;
        $[9] = statusFilterLocal;
        $[10] = out;
    } else {
        out = $[10];
    }
    const filteredOrders = out;
    const totalPages = Math.max(1, Math.ceil(filteredOrders.length / 6));
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[13] !== authLoading || $[14] !== filteredOrders || $[15] !== loading || $[16] !== localOrders || $[17] !== page || $[18] !== search || $[19] !== sortBy || $[20] !== statusFilterLocal || $[21] !== tab || $[22] !== totalPages || $[23] !== user) {
        t7 = Symbol.for("react.early_return_sentinel");
        bb1: {
            const pageOrders = filteredOrders.slice((page - 1) * 6, page * 6);
            const OrderTimeline = _ClientDashboardOrderTimeline;
            const getRank = _ClientDashboardGetRank;
            if (authLoading || loading) {
                let t8;
                if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
                    t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center h-[60vh]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-12 w-12 text-sky-400 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                            lineNumber: 152,
                            columnNumber: 75
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                        lineNumber: 152,
                        columnNumber: 16
                    }, this);
                    $[29] = t8;
                } else {
                    t8 = $[29];
                }
                t7 = t8;
                break bb1;
            }
            if (!user) {
                let t8;
                let t9;
                if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
                    t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-white mb-3",
                        children: "Você não está logado"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                        lineNumber: 164,
                        columnNumber: 16
                    }, this);
                    t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 mb-6",
                        children: "Faça login para ver seus pedidos ou comece um novo no catálogo de serviços."
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                        lineNumber: 165,
                        columnNumber: 16
                    }, this);
                    $[30] = t8;
                    $[31] = t9;
                } else {
                    t8 = $[30];
                    t9 = $[31];
                }
                let t10;
                if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
                    t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto px-4 py-20 text-center",
                        children: [
                            t8,
                            t9,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        className: "px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-colors",
                                        children: "Entrar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 139
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/services",
                                        className: "px-4 py-2 border border-sky-600 text-sky-300 rounded-lg hover:bg-white/5 transition-colors",
                                        children: "Ver Serviços"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 262
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                lineNumber: 174,
                                columnNumber: 83
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                        lineNumber: 174,
                        columnNumber: 17
                    }, this);
                    $[32] = t10;
                } else {
                    t10 = $[32];
                }
                t7 = t10;
                break bb1;
            }
            t3 = "max-w-7xl mx-auto px-4 py-12 animate-fade-in";
            let t8;
            if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
                t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl md:text-5xl font-black text-white mb-2",
                    children: "Painel do Cliente"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 185,
                    columnNumber: 14
                }, this);
                $[33] = t8;
            } else {
                t8 = $[33];
            }
            let t9;
            if ($[34] !== user?.name) {
                t9 = user?.name.split(" ")[0];
                $[34] = user?.name;
                $[35] = t9;
            } else {
                t9 = $[35];
            }
            let t10;
            if ($[36] !== t9) {
                t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-slate-300",
                            children: [
                                "Bem-vindo, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-sky-300",
                                    children: t9
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 73
                                }, this),
                                " — aqui estão seus pedidos."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                            lineNumber: 200,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 200,
                    columnNumber: 15
                }, this);
                $[36] = t9;
                $[37] = t10;
            } else {
                t10 = $[37];
            }
            let t11;
            if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
                t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-panel px-6 py-3 rounded-xl border border-sky-500/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-slate-300",
                        children: [
                            "Status: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sky-300 font-bold",
                                children: "Logado"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                lineNumber: 208,
                                columnNumber: 139
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                        lineNumber: 208,
                        columnNumber: 90
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 208,
                    columnNumber: 15
                }, this);
                $[38] = t11;
            } else {
                t11 = $[38];
            }
            if ($[39] !== t10) {
                t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4",
                    children: [
                        t10,
                        t11
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 214,
                    columnNumber: 14
                }, this);
                $[39] = t10;
                $[40] = t4;
            } else {
                t4 = $[40];
            }
            let t12;
            if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
                t12 = [
                    [
                        "orders",
                        "\uD83D\uDCCB Meus Pedidos"
                    ],
                    [
                        "settings",
                        "\u2699\uFE0F Configura\xE7\xF5es"
                    ]
                ];
                $[41] = t12;
            } else {
                t12 = $[41];
            }
            if ($[42] !== tab) {
                t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex items-center gap-3 border-b border-slate-700/50",
                    children: t12.map({
                        "ClientDashboard[(anonymous)()]": (t13)=>{
                            const [id, label] = t13;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ClientDashboard[(anonymous)() > <button>.onClick]": ()=>setTab(id)
                                }["ClientDashboard[(anonymous)() > <button>.onClick]"],
                                className: `px-4 py-3 text-sm font-semibold transition-all border-b-2 ${tab === id ? "border-sky-500 text-sky-300" : "border-transparent text-slate-400 hover:text-slate-300"}`,
                                children: label
                            }, id, false, {
                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                lineNumber: 231,
                                columnNumber: 22
                            }, this);
                        }
                    }["ClientDashboard[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 228,
                    columnNumber: 14
                }, this);
                $[42] = tab;
                $[43] = t5;
            } else {
                t5 = $[43];
            }
            t6 = tab === "orders" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-panel p-6 rounded-2xl border border-sky-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-sky-300 mb-4 text-sm uppercase tracking-wider",
                                        children: "Status de Pedidos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 167
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: "Pendente"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 341
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-white",
                                                        children: localOrders.filter(_ClientDashboardLocalOrdersFilter).length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 389
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 303
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: "Em Andamento"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 541
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-white",
                                                        children: localOrders.filter(_ClientDashboardLocalOrdersFilter2).length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 593
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 503
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: "Pago"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 746
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-white",
                                                        children: localOrders.filter(_ClientDashboardLocalOrdersFilter3).length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 790
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 708
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: "Concluídos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 943
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-white",
                                                        children: localOrders.filter(_ClientDashboardLocalOrdersFilter4).length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 993
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 905
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 266
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                lineNumber: 241,
                                columnNumber: 97
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-panel p-6 rounded-2xl border border-sky-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-sky-300 mb-4 text-sm uppercase tracking-wider",
                                        children: "Seu Rank"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 1190
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg ${getRank(localOrders.reduce(_ClientDashboardLocalOrdersReduce, 0)).color}`,
                                                children: getRank(localOrders.reduce(_ClientDashboardLocalOrdersReduce2, 0)).label[0]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 1321
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-white",
                                                        children: getRank(localOrders.reduce(_ClientDashboardLocalOrdersReduce3, 0)).label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 1588
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-slate-400",
                                                        children: [
                                                            "Total gasto: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sky-300 font-semibold",
                                                                children: [
                                                                    "R$ ",
                                                                    localOrders.reduce(_ClientDashboardLocalOrdersReduce4, 0).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 1759
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 1706
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 1583
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 1280
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                lineNumber: 241,
                                columnNumber: 1120
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-panel p-6 rounded-2xl border border-sky-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-sky-300 mb-4 text-sm uppercase tracking-wider",
                                        children: "Resumo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 1978
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: "Total de Pedidos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 2141
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-white",
                                                        children: localOrders.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 2197
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 2103
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: "Itens Adquiridos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 2307
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-white",
                                                        children: localOrders.reduce(_ClientDashboardLocalOrdersReduce5, 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 2363
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 2269
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: "Gasto Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 2512
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-sky-300",
                                                        children: [
                                                            "R$ ",
                                                            localOrders.reduce(_ClientDashboardLocalOrdersReduce6, 0).toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 2563
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 2474
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 2066
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                lineNumber: 241,
                                columnNumber: 1908
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                        lineNumber: 241,
                        columnNumber: 37
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-panel p-4 rounded-2xl mb-8 border border-sky-500/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-3 items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row items-center gap-3 w-full md:w-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: search,
                                            onChange: {
                                                "ClientDashboard[<input>.onChange]": (e)=>{
                                                    setSearch(e.target.value);
                                                    setPage(1);
                                                }
                                            }["ClientDashboard[<input>.onChange]"],
                                            placeholder: "Buscar por pedido, item...",
                                            className: "w-full md:w-64 p-2.5 rounded-lg bg-white/5 border border-sky-500/20 text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                                            lineNumber: 241,
                                            columnNumber: 2940
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: statusFilterLocal,
                                            onChange: {
                                                "ClientDashboard[<select>.onChange]": (e_0)=>{
                                                    setStatusFilterLocal(e_0.target.value);
                                                    setPage(1);
                                                }
                                            }["ClientDashboard[<select>.onChange]"],
                                            className: "p-2.5 rounded-lg bg-white/5 border border-sky-500/20 text-white focus:border-sky-500 focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "all",
                                                    children: "Todos os status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 172
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "pending_docs",
                                                    children: "Pendente Docs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 216
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "processing",
                                                    children: "Em Andamento"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 267
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "paid",
                                                    children: "Pago"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 315
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "completed",
                                                    children: "Concluído"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 349
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 251
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: sortBy,
                                            onChange: {
                                                "ClientDashboard[<select>.onChange]": (e_1)=>setSortBy(e_1.target.value)
                                            }["ClientDashboard[<select>.onChange]"],
                                            className: "p-2.5 rounded-lg bg-white/5 border border-sky-500/20 text-white focus:border-sky-500 focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "newest",
                                                    children: "Mais recentes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 172
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "oldest",
                                                    children: "Mais antigos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 217
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "value_desc",
                                                    children: "Valor (maior)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 261
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "value_asc",
                                                    children: "Valor (menor)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 310
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 402
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 2861
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-slate-400",
                                    children: [
                                        "Total pedidos: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-sky-300",
                                            children: filteredOrders.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 428
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 373
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                            lineNumber: 241,
                            columnNumber: 2783
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                        lineNumber: 241,
                        columnNumber: 2708
                    }, this),
                    filteredOrders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-panel rounded-2xl p-16 text-center border border-sky-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                    className: "h-10 w-10 text-slate-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 730
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                lineNumber: 253,
                                columnNumber: 631
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white mb-2",
                                children: "Sem pedidos ainda"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                lineNumber: 253,
                                columnNumber: 784
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 mb-6",
                                children: "Você ainda não realizou nenhuma solicitação de serviço."
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                lineNumber: 253,
                                columnNumber: 856
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/services",
                                className: "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-xl hover:from-sky-500 hover:to-cyan-500 transition-all",
                                children: [
                                    "Ir ao Catálogo",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 1156
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                lineNumber: 253,
                                columnNumber: 950
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                        lineNumber: 253,
                        columnNumber: 548
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            pageOrders.map({
                                "ClientDashboard[pageOrders.map()]": (order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-panel rounded-2xl overflow-hidden hover:border-sky-500/50 transition-all border border-sky-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/5 backdrop-blur px-6 py-4 border-b border-sky-500/20 flex justify-between items-start md:items-center flex-wrap gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-slate-400 font-medium block",
                                                                children: [
                                                                    "Pedido ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-xs uppercase bg-sky-600/30 px-2 py-1 rounded text-sky-300 ml-2",
                                                                        children: [
                                                                            "# ",
                                                                            order.id.slice(0, 8)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                                        lineNumber: 254,
                                                                        columnNumber: 410
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 344
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-slate-500 font-medium mt-1 block",
                                                                children: [
                                                                    new Date(order.date).toLocaleDateString("pt-BR"),
                                                                    " às ",
                                                                    new Date(order.date).toLocaleTimeString("pt-BR", {
                                                                        hour: "2-digit",
                                                                        minute: "2-digit"
                                                                    })
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 544
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderTimeline, {
                                                                    status: order.status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 339
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right flex flex-col items-end gap-2",
                                                        children: [
                                                            getStatusBadge(order.status),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-black text-sky-300 mt-1",
                                                                children: [
                                                                    "R$ ",
                                                                    order.total.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 199
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex gap-2",
                                                                children: [
                                                                    order.status === "pending_docs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: `/checkout/${order.id}`,
                                                                        className: "px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-colors text-sm font-semibold",
                                                                        children: "Continuar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                                        lineNumber: 257,
                                                                        columnNumber: 352
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "px-3 py-2 border border-sky-500 text-sky-300 rounded-lg hover:bg-white/5 transition-colors text-sm font-semibold",
                                                                        children: "Detalhes"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                                        lineNumber: 257,
                                                                        columnNumber: 518
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 283
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 111
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 195
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xs font-bold text-sky-400 uppercase tracking-wider mb-4",
                                                        children: "Itens do Pedido:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 707
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-3",
                                                        children: order.items.map(_ClientDashboardPageOrdersMapOrderItemsMap)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 805
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 686
                                            }, this)
                                        ]
                                    }, order.id, true, {
                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 59
                                    }, this)
                            }["ClientDashboard[pageOrders.map()]"]),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-slate-400",
                                        children: [
                                            "Página ",
                                            page,
                                            " de ",
                                            totalPages
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                        lineNumber: 258,
                                        columnNumber: 107
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: page <= 1,
                                                onClick: {
                                                    "ClientDashboard[<button>.onClick]": ()=>setPage(_ClientDashboardButtonOnClickSetPage)
                                                }["ClientDashboard[<button>.onClick]"],
                                                className: "px-4 py-2 border border-sky-500/50 text-sky-300 rounded-lg hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                children: "← Anterior"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 223
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: page >= totalPages,
                                                onClick: {
                                                    "ClientDashboard[<button>.onClick]": ()=>setPage({
                                                            "ClientDashboard[<button>.onClick > setPage()]": (p_0)=>Math.min(totalPages, p_0 + 1)
                                                        }["ClientDashboard[<button>.onClick > setPage()]"])
                                                }["ClientDashboard[<button>.onClick]"],
                                                className: "px-4 py-2 border border-sky-500/50 text-sky-300 rounded-lg hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                children: "Próxima →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 228
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                                        lineNumber: 258,
                                        columnNumber: 182
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/client/page.tsx",
                                lineNumber: 258,
                                columnNumber: 51
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                        lineNumber: 253,
                        columnNumber: 1206
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/client/page.tsx",
                lineNumber: 241,
                columnNumber: 32
            }, this);
        }
        $[13] = authLoading;
        $[14] = filteredOrders;
        $[15] = loading;
        $[16] = localOrders;
        $[17] = page;
        $[18] = search;
        $[19] = sortBy;
        $[20] = statusFilterLocal;
        $[21] = tab;
        $[22] = totalPages;
        $[23] = user;
        $[24] = t3;
        $[25] = t4;
        $[26] = t5;
        $[27] = t6;
        $[28] = t7;
    } else {
        t3 = $[24];
        t4 = $[25];
        t5 = $[26];
        t6 = $[27];
        t7 = $[28];
    }
    if (t7 !== Symbol.for("react.early_return_sentinel")) {
        return t7;
    }
    let t8;
    if ($[44] !== tab) {
        t8 = tab === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel p-8 rounded-2xl border border-sky-500/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-bold text-sky-300 mb-4 text-lg uppercase tracking-wider",
                    children: "Configurações"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 294,
                    columnNumber: 102
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-400 mb-6",
                    children: "Gerenciar suas preferências e notificações"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 294,
                    columnNumber: 197
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-3 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true,
                                    className: "w-4 h-4 rounded border-sky-500 accent-sky-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 363
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-slate-300",
                                    children: "Receber notificações por e-mail"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 468
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                            lineNumber: 294,
                            columnNumber: 305
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-3 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true,
                                    className: "w-4 h-4 rounded border-sky-500 accent-sky-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 613
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-slate-300",
                                    children: "Receber atualizações de pedidos por WhatsApp"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 718
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                            lineNumber: 294,
                            columnNumber: 555
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-3 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    className: "w-4 h-4 rounded border-sky-500 accent-sky-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 876
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-slate-300",
                                    children: "Receber promoções e ofertas especiais"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 959
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                            lineNumber: 294,
                            columnNumber: 818
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 294,
                    columnNumber: 278
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-colors font-semibold",
                        children: "Salvar Preferências"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/client/page.tsx",
                        lineNumber: 294,
                        columnNumber: 1080
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 294,
                    columnNumber: 1058
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/client/page.tsx",
            lineNumber: 294,
            columnNumber: 32
        }, this);
        $[44] = tab;
        $[45] = t8;
    } else {
        t8 = $[45];
    }
    let t9;
    if ($[46] !== t3 || $[47] !== t4 || $[48] !== t5 || $[49] !== t6 || $[50] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/client/page.tsx",
            lineNumber: 302,
            columnNumber: 10
        }, this);
        $[46] = t3;
        $[47] = t4;
        $[48] = t5;
        $[49] = t6;
        $[50] = t8;
        $[51] = t9;
    } else {
        t9 = $[51];
    }
    return t9;
}
_s(ClientDashboard, "zOTWkef6fvvFikiK+pwp2rCW0cA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ClientDashboard;
function _ClientDashboardButtonOnClickSetPage(p) {
    return Math.max(1, p - 1);
}
function _ClientDashboardPageOrdersMapOrderItemsMap(item, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-sky-500/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-sky-600/30 p-2 rounded-lg text-sky-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 318,
                    columnNumber: 170
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/client/page.tsx",
                lineNumber: 318,
                columnNumber: 111
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-300 font-medium flex-grow",
                children: item.title
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/client/page.tsx",
                lineNumber: 318,
                columnNumber: 208
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs bg-sky-600/30 text-sky-300 px-2 py-1 rounded font-semibold",
                children: [
                    "R$ ",
                    item.price.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/client/page.tsx",
                lineNumber: 318,
                columnNumber: 282
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/app/dashboard/client/page.tsx",
        lineNumber: 318,
        columnNumber: 10
    }, this);
}
function _ClientDashboardLocalOrdersReduce6(s_4, o_10) {
    return s_4 + o_10.total;
}
function _ClientDashboardLocalOrdersReduce5(sum, o_9) {
    return sum + o_9.items.length;
}
function _ClientDashboardLocalOrdersReduce4(s_3, o_8) {
    return s_3 + o_8.total;
}
function _ClientDashboardLocalOrdersReduce3(s_2, o_7) {
    return s_2 + o_7.total;
}
function _ClientDashboardLocalOrdersReduce2(s_1, o_6) {
    return s_1 + o_6.total;
}
function _ClientDashboardLocalOrdersReduce(s_0, o_5) {
    return s_0 + o_5.total;
}
function _ClientDashboardLocalOrdersFilter4(o_4) {
    return o_4.status === "completed";
}
function _ClientDashboardLocalOrdersFilter3(o_3) {
    return o_3.status === "paid";
}
function _ClientDashboardLocalOrdersFilter2(o_2) {
    return o_2.status === "processing";
}
function _ClientDashboardLocalOrdersFilter(o_1) {
    return o_1.status === "pending_docs";
}
function _ClientDashboardGetRank(total) {
    if (total > 1000) {
        return {
            label: "Ouro",
            color: "bg-yellow-500"
        };
    }
    if (total > 500) {
        return {
            label: "Prata",
            color: "bg-slate-400"
        };
    }
    return {
        label: "Bronze",
        color: "bg-amber-700"
    };
}
function _ClientDashboardOrderTimeline(t0) {
    const { status: status_0 } = t0;
    const steps = [
        "pending_docs",
        "processing",
        "paid",
        "completed"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 text-xs",
        children: steps.map({
            "ClientDashboard[OrderTimeline > steps.map()]": (s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-2 py-1 rounded-full border ${s === status_0 ? "bg-sky-600 text-white border-sky-700" : "bg-white/10 text-slate-400 border-white/20"}`,
                    children: s.replace("_", " ")
                }, s, false, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 374,
                    columnNumber: 60
                }, this)
        }["ClientDashboard[OrderTimeline > steps.map()]"])
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/client/page.tsx",
        lineNumber: 373,
        columnNumber: 10
    }, this);
}
function _ClientDashboardOutSort4(a, b) {
    return b.total - a.total;
}
function _ClientDashboardOutSort3(a_0, b_0) {
    return a_0.total - b_0.total;
}
function _ClientDashboardOutSort2(a_1, b_1) {
    return new Date(a_1.date).getTime() - new Date(b_1.date).getTime();
}
function _ClientDashboardOutSort(a_2, b_2) {
    return new Date(b_2.date).getTime() - new Date(a_2.date).getTime();
}
function _ClientDashboardGetStatusBadge(status) {
    switch(status){
        case "pending_docs":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-yellow-600/30 text-yellow-300 border border-yellow-500/50 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                            lineNumber: 393,
                            columnNumber: 162
                        }, this),
                        " Analisando Docs"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 393,
                    columnNumber: 16
                }, this);
            }
        case "processing":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-sky-600/30 text-sky-300 border border-sky-500/50 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                            lineNumber: 397,
                            columnNumber: 153
                        }, this),
                        " Em Andamento"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 397,
                    columnNumber: 16
                }, this);
            }
        case "paid":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-cyan-600/30 text-cyan-300 border border-cyan-500/50 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                            lineNumber: 401,
                            columnNumber: 156
                        }, this),
                        " Pago"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 401,
                    columnNumber: 16
                }, this);
            }
        case "completed":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-green-600/30 text-green-300 border border-green-500/50 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                            lineNumber: 405,
                            columnNumber: 159
                        }, this),
                        " Concluído"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 405,
                    columnNumber: 16
                }, this);
            }
        case "rejected":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-red-600/30 text-red-300 border border-red-500/50 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/client/page.tsx",
                            lineNumber: 409,
                            columnNumber: 153
                        }, this),
                        " Pendência"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/client/page.tsx",
                    lineNumber: 409,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return null;
            }
    }
}
function _ClientDashboardUseEffectOnSnapshotArg1SnapshotDocsMap(doc) {
    return {
        id: doc.id,
        ...doc.data()
    };
}
var _c;
__turbopack_context__.k.register(_c, "ClientDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
"[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleX
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
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m15 9-6 6",
            key: "1uzhvr"
        }
    ],
    [
        "path",
        {
            d: "m9 9 6 6",
            key: "z0biqf"
        }
    ]
];
const CircleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-x", __iconNode);
;
 //# sourceMappingURL=circle-x.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>FileText
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
            d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
            key: "1oefj6"
        }
    ],
    [
        "path",
        {
            d: "M14 2v5a1 1 0 0 0 1 1h5",
            key: "wfsgrz"
        }
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
];
const FileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("file-text", __iconNode);
;
 //# sourceMappingURL=file-text.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)");
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
"[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Package
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
            d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
            key: "1a0edw"
        }
    ],
    [
        "path",
        {
            d: "M12 22V12",
            key: "d0xqtd"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "path",
        {
            d: "m7.5 4.27 9 5.15",
            key: "1c824w"
        }
    ]
];
const Package = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("package", __iconNode);
;
 //# sourceMappingURL=package.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Package",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRight
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
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_3f449947._.js.map