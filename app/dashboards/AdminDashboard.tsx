import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { Order } from '../../types';
import { Users, TrendingUp, AlertOctagon, FileCheck, Loader2 } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Admin query: Fetch ALL orders
    const q = query(
        collection(db, "orders"),
        orderBy("date", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedOrders: Order[] = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Order));
        setOrders(fetchedOrders);
        setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const totalRevenue = orders.reduce((acc, order) => acc + order.total, 0);
  const pendingOrders = orders.filter(o => o.status === 'pending_docs' || o.status === 'processing').length;
  const completedOrders = orders.filter(o => o.status === 'completed').length;

  if (loading) return <div className="flex justify-center items-center h-[60vh]"><Loader2 className="h-10 w-10 text-cyan-400 animate-spin" /></div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-white">Painel Administrativo</h1>
        <span className="text-xs font-bold bg-blue-500/20 text-blue-200 border border-blue-500/30 px-3 py-1.5 rounded-full uppercase tracking-wide">Admin Access</span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="glass-panel p-6 rounded-2xl">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Receita Total</p>
                    <h3 className="text-2xl font-extrabold text-slate-800 mt-2">R$ {totalRevenue.toFixed(2)}</h3>
                </div>
                <div className="bg-green-100 p-2.5 rounded-xl text-green-600 shadow-sm">
                    <TrendingUp className="h-6 w-6" />
                </div>
            </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Pedidos</p>
                    <h3 className="text-2xl font-extrabold text-slate-800 mt-2">{orders.length}</h3>
                </div>
                <div className="bg-blue-100 p-2.5 rounded-xl text-blue-600 shadow-sm">
                    <FileCheck className="h-6 w-6" />
                </div>
            </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Pendentes</p>
                    <h3 className="text-2xl font-extrabold text-slate-800 mt-2">{pendingOrders}</h3>
                </div>
                <div className="bg-yellow-100 p-2.5 rounded-xl text-yellow-600 shadow-sm">
                    <AlertOctagon className="h-6 w-6" />
                </div>
            </div>
        </div>
        
        <div className="glass-panel p-6 rounded-2xl">
             <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Clientes</p>
                    <h3 className="text-2xl font-extrabold text-slate-800 mt-2">{new Set(orders.map(o => o.userId)).size}</h3>
                </div>
                <div className="bg-purple-100 p-2.5 rounded-xl text-purple-600 shadow-sm">
                    <Users className="h-6 w-6" />
                </div>
            </div>
        </div>
      </div>

      <div className="glass-panel rounded-2xl overflow-hidden shadow-xl">
        <div className="px-8 py-6 border-b border-slate-200/60 bg-white/40 backdrop-blur">
            <h3 className="font-bold text-slate-800 text-lg">Histórico Recente</h3>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50/80 text-slate-500 font-bold uppercase text-xs tracking-wider">
                    <tr>
                        <th className="px-8 py-4">ID</th>
                        <th className="px-8 py-4">Cliente</th>
                        <th className="px-8 py-4">Data</th>
                        <th className="px-8 py-4">Valor</th>
                        <th className="px-8 py-4">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white/80">
                    {orders.slice(0, 10).map(order => (
                        <tr key={order.id} className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-8 py-4 font-mono text-xs text-slate-400 font-bold">{order.id.slice(0, 8)}</td>
                            <td className="px-8 py-4 font-bold text-slate-800">{order.userName || 'Desconhecido'}</td>
                            <td className="px-8 py-4 text-slate-600 font-medium">{new Date(order.date).toLocaleDateString()}</td>
                            <td className="px-8 py-4 font-bold text-slate-900">R$ {order.total.toFixed(2)}</td>
                            <td className="px-8 py-4">
                                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                                    order.status === 'completed' ? 'bg-green-100 text-green-700' : 
                                    order.status === 'rejected' ? 'bg-red-100 text-red-700' :
                                    order.status === 'processing' ? 'bg-blue-100 text-blue-700' :
                                    'bg-yellow-100 text-yellow-700'
                                }`}>
                                    {order.status.replace('_', ' ')}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};