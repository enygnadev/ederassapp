import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { Order } from '../../types';
import { Clock, CheckCircle, XCircle, FileText, Loader2, Package } from 'lucide-react';

export const ClientDashboard: React.FC = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!user) return;

    // Secure Query: Only fetch orders where userId == current user
    const q = query(
        collection(db, "orders"), 
        where("userId", "==", user.id),
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
  }, [user]);

  const getStatusBadge = (status: string) => {
    switch(status) {
        case 'pending_docs': return <span className="bg-yellow-100 text-yellow-800 border border-yellow-200 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-bold"><Clock className="h-3.5 w-3.5"/> Analisando Docs</span>;
        case 'processing': return <span className="bg-blue-100 text-blue-800 border border-blue-200 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-bold"><Clock className="h-3.5 w-3.5"/> Em Andamento</span>;
        case 'completed': return <span className="bg-green-100 text-green-800 border border-green-200 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-bold"><CheckCircle className="h-3.5 w-3.5"/> Concluído</span>;
        case 'rejected': return <span className="bg-red-100 text-red-800 border border-red-200 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-bold"><XCircle className="h-3.5 w-3.5"/> Pendência</span>;
        default: return null;
    }
  };

  if (loading) {
      return (
          <div className="flex justify-center items-center h-[60vh]">
              <Loader2 className="h-12 w-12 text-cyan-400 animate-spin" />
          </div>
      );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
            <h1 className="text-3xl font-bold text-white">Meus Pedidos</h1>
            <p className="text-slate-400 mt-1">Acompanhe o status das suas solicitações</p>
        </div>
        <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
            <span className="text-sm text-slate-300">Logado como: <span className="text-white font-semibold">{user?.name}</span></span>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="glass-panel rounded-2xl p-16 text-center">
            <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-10 w-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Sem pedidos ainda</h3>
            <p className="text-slate-500 mb-6">Você ainda não realizou nenhuma solicitação de serviço.</p>
        </div>
      ) : (
        <div className="space-y-6">
            {orders.map(order => (
                <div key={order.id} className="glass-panel rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-slate-50/80 backdrop-blur px-6 py-4 border-b border-slate-200 flex justify-between items-center flex-wrap gap-2">
                        <div>
                            <span className="text-sm text-slate-500 font-medium block">Pedido <span className="font-mono text-xs uppercase bg-slate-200 px-1.5 py-0.5 rounded text-slate-700 ml-1">#{order.id.slice(0,8)}</span></span>
                            <span className="text-xs text-slate-400 font-medium mt-1 block">{new Date(order.date).toLocaleDateString()} às {new Date(order.date).toLocaleTimeString()}</span>
                        </div>
                        <div className="text-right flex flex-col items-end gap-1">
                             {getStatusBadge(order.status)}
                             <p className="text-lg font-bold text-slate-900 mt-1">R$ {order.total.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Itens do Pedido:</h4>
                        <ul className="space-y-3">
                            {order.items.map(item => (
                                <li key={item.cartId} className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-slate-100">
                                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                        <FileText className="h-4 w-4" />
                                    </div>
                                    <span className="text-slate-700 font-medium flex-grow">{item.title}</span>
                                    {/* Docs Count */}
                                    <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded font-semibold">
                                        {Object.keys(item.uploadedDocs).length} docs
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      )}
    </div>
  );
};