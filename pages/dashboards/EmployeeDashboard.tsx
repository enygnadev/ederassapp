import React, { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { db } from '../../firebase';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { Order } from '../../types';
import { Eye, Check, X, Loader2, Download } from 'lucide-react';

export const EmployeeDashboard: React.FC = () => {
  const { updateOrderStatus } = useCart();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Employee query: Pending or Processing only
    const q = query(
        collection(db, "orders"),
        orderBy("date", "asc") // Oldest first for queue
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
        const allOrders: Order[] = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Order));
        
        // Filter in memory for simplicity or add composite index for status
        const tasks = allOrders.filter(o => o.status === 'pending_docs' || o.status === 'processing');
        setOrders(tasks);
        setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-[60vh]"><Loader2 className="h-10 w-10 text-cyan-400 animate-spin" /></div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white">Fila de Análise</h1>
        <p className="text-slate-400 mt-1">Gerencie e aprove as documentações pendentes</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {orders.map(order => (
             <div key={order.id} className="glass-panel rounded-2xl flex flex-col hover:shadow-xl transition-shadow border-t-4 border-t-blue-500">
                <div className="p-6 border-b border-slate-200/60 bg-slate-50/50 backdrop-blur flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg">Pedido #{order.id.slice(0, 8)}</h3>
                        <p className="text-sm text-slate-600 font-semibold">{order.userName}</p>
                        <p className="text-xs text-slate-500 mt-1">{new Date(order.date).toLocaleString()}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide ${
                        order.status === 'pending_docs' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                        {order.status === 'pending_docs' ? 'Análise Docs' : 'Processamento'}
                    </span>
                </div>
                
                <div className="p-6 flex-grow bg-white/80">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-4">Documentos na Nuvem:</h4>
                    <div className="space-y-4">
                        {order.items.map(item => (
                            <div key={item.cartId} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <p className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    {item.title}
                                </p>
                                <ul className="space-y-2">
                                    {Object.entries(item.uploadedDocs).map(([docName, url]) => (
                                        <li key={docName} className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm">
                                            <span className="text-slate-600 text-xs font-medium truncate max-w-[150px]">{docName}</span>
                                            <div className="flex items-center gap-2">
                                                <a 
                                                    href={url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="flex items-center gap-1.5 text-blue-600 hover:text-white hover:bg-blue-600 bg-blue-50 px-3 py-1.5 rounded-md transition-all text-xs font-bold"
                                                >
                                                    <Eye className="h-3 w-3" /> Visualizar
                                                </a>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-4 bg-slate-50/50 backdrop-blur border-t border-slate-200/60 flex justify-end gap-3 rounded-b-2xl">
                    <button 
                        onClick={() => updateOrderStatus(order.id, 'rejected')}
                        className="px-5 py-2.5 bg-white border border-red-200 text-red-600 rounded-xl hover:bg-red-50 text-sm font-bold flex items-center gap-2 transition-colors shadow-sm"
                    >
                        <X className="h-4 w-4" /> Rejeitar
                    </button>
                    {order.status === 'pending_docs' ? (
                         <button 
                            onClick={() => updateOrderStatus(order.id, 'processing')}
                            className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 text-sm font-bold flex items-center gap-2 shadow-md shadow-blue-500/20"
                        >
                            <Loader2 className="h-4 w-4" /> Iniciar Proc.
                        </button>
                    ) : (
                        <button 
                            onClick={() => updateOrderStatus(order.id, 'completed')}
                            className="px-5 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 text-sm font-bold flex items-center gap-2 shadow-md shadow-green-500/20"
                        >
                            <Check className="h-4 w-4" /> Concluir
                        </button>
                    )}
                </div>
             </div>
        ))}

        {orders.length === 0 && (
            <div className="col-span-full text-center py-20 glass-panel rounded-2xl">
                <p className="text-slate-500 text-lg font-medium">Nenhuma tarefa pendente na fila.</p>
                <p className="text-slate-400 text-sm">Ótimo trabalho!</p>
            </div>
        )}
      </div>
    </div>
  );
};