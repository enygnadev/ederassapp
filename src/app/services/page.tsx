"use client";
import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { ServiceProduct } from '@/types';
import { Plus, Check, FileText, DollarSign, ArrowRight, Loader2 } from 'lucide-react';
import { DEFAULT_SERVICES } from '@/lib/defaultServices';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';

export default function ServicesPage() {
  const { addToCart, cart } = useCart();
  const [addedIds, setAddedIds] = React.useState<string[]>([]);
  const [services, setServices] = useState<ServiceProduct[]>(DEFAULT_SERVICES);
  const [loading, setLoading] = useState(false);

  // Carregar serviços do Firestore
  useEffect(() => {
    try {
      const q = query(collection(db, "products"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const dbServices: ServiceProduct[] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as ServiceProduct));
        
        // Se houver serviços no BD, use-os. Caso contrário, use os padrões
        if (dbServices.length > 0) {
          setServices(dbServices);
        } else {
          setServices(DEFAULT_SERVICES);
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } catch (error) {
      console.error('Erro ao carregar serviços:', error);
      setServices(DEFAULT_SERVICES);
      setLoading(false);
    }
  }, []);

  const handleAdd = (service: ServiceProduct) => {
    addToCart(service);
    setAddedIds(prev => [...prev, service.id]);
    setTimeout(() => setAddedIds(prev => prev.filter(id => id !== service.id)), 2000);
  };

  return (
    <div className="min-h-screen py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-sky-400 text-xs font-bold tracking-[0.3em] uppercase mb-3 block">🎯 Catálogo Completo</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Serviços Profissionais</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Todos os documentos e regularizações necessárias para sua embarcação. Serviços especializados com expertise de 20+ anos.
          </p>
        </div>

        {/* Grid de Serviços */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 text-sky-400 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
            <div key={service.id} className="glass-panel rounded-2xl overflow-hidden flex flex-col hover:transform hover:-translate-y-2 transition-all duration-300 group border-sky-500/20 hover:border-sky-500/50">
              <div className="relative h-56 overflow-hidden bg-gradient-to-b from-sky-900 to-slate-900">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020c1b] via-transparent to-transparent z-10"></div>
                <div className="absolute top-4 right-4 z-20 bg-sky-600/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide shadow-lg">
                  {service.category === 'bureaucracy' ? '📝 Documentação' : service.category === 'insurance' ? '🛡️ Seguro' : '📜 Licença'}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-sky-300 transition-colors">{service.title}</h3>
                <p className="text-sm text-slate-300 mb-6 flex-grow line-clamp-3">{service.description}</p>

                {/* Documentos Necessários */}
                <div className="mb-6 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <p className="text-xs font-bold text-sky-300 uppercase mb-3 flex items-center gap-2">
                    <FileText className="h-4 w-4" /> {service.requiredDocuments.length} Documentos
                  </p>
                  <ul className="space-y-2">
                    {service.requiredDocuments.slice(0, 3).map((doc, idx) => (
                      <li key={idx} className="text-[12px] text-slate-400 flex items-start gap-2">
                        <span className="text-sky-400 mt-0.5">•</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                    {service.requiredDocuments.length > 3 && (
                      <li className="text-[12px] text-sky-400 font-semibold">
                        +{service.requiredDocuments.length - 3} documentos adicionais
                      </li>
                    )}
                  </ul>
                </div>

                {/* Preço e Botão */}
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Investimento</p>
                    <p className="text-2xl font-black text-sky-300 flex items-center gap-1">
                      <DollarSign className="h-5 w-5" />
                      {service.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => handleAdd(service)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all duration-300 ${
                      addedIds.includes(service.id)
                        ? 'bg-green-600 text-white shadow-lg shadow-green-500/50'
                        : 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white hover:from-sky-500 hover:to-cyan-500 shadow-lg shadow-sky-500/30 hover:scale-105'
                    }`}
                  >
                    {addedIds.includes(service.id) ? (
                      <>
                        <Check className="h-5 w-5" />
                        <span>Adicionado!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="h-5 w-5" />
                        <span>Adicionar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}

        {/* CTA Final */}
        {cart.length > 0 && (
          <div className="bg-gradient-to-r from-sky-600/20 to-cyan-600/20 border-2 border-sky-500/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Você tem {cart.length} {cart.length === 1 ? 'serviço' : 'serviços'} no carrinho</h2>
            <p className="text-slate-300 mb-6">
              Total: <span className="text-sky-300 font-black text-2xl">R$ {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
            </p>
            <Link
              href="/checkout"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-[#020c1b] font-bold text-lg rounded-xl hover:from-sky-400 hover:to-cyan-400 transition-all hover:scale-105 shadow-lg shadow-sky-500/30"
            >
              ✨ Ir para Checkout
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}