"use client";
import React, { useState, useEffect, CSSProperties } from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { DEFAULT_SERVICES } from '../lib/defaultServices';
import { useCart } from '../context/CartContext';

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % DEFAULT_SERVICES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % DEFAULT_SERVICES.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + DEFAULT_SERVICES.length) % DEFAULT_SERVICES.length);

  const getCardStyle = (index: number): CSSProperties => {
    const total = DEFAULT_SERVICES.length;
    let distance = index - activeSlide;
    const isActive = index === activeSlide;
    const xOffset = distance * 110;
    const scale = isActive ? 1 : Math.max(0.8 - Math.abs(distance) * 0.1, 0.6);
    const rotateY = isActive ? 0 : distance * -15;
    const zIndex = total - Math.abs(distance);
    const opacity = Math.max(1 - Math.abs(distance) * 0.3, 0);
    const blur = isActive ? 0 : Math.abs(distance) * 2;

    return {
      transform: `translateX(${xOffset}%) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
      zIndex: zIndex,
      opacity: opacity,
      filter: `blur(${blur}px)`,
      transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
      position: 'absolute',
      left: '0',
      right: '0',
      margin: '0 auto',
      width: '100%',
      maxWidth: '350px',
      pointerEvents: isActive ? 'auto' : 'none',
    } as CSSProperties;
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1920" alt="Background Sea" className="w-full h-full object-cover opacity-25 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020c1b]/40 via-[#020c1b]/70 to-[#020c1b]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/20 via-transparent to-cyan-900/20"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in pb-20">
          <div className="inline-block px-6 py-2 rounded-full border border-sky-400/30 bg-sky-950/40 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-all duration-500">
            <span className="text-sky-200 text-xs font-bold tracking-widest uppercase">🚤 Assessoria Especializada em Náutica</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-white drop-shadow-2xl leading-tight">
            Navegue com <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-cyan-200 animate-pulse">Segurança</span> <br className="hidden md:block" /> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-sky-300">Legalidade</span>.
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Especialistas em documentação náutica com 20+ anos de experiência. Seguro DPEM, licenças de pesca, regularização completa junto à Marinha.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/services" className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-base font-bold text-[#020c1b] bg-gradient-to-r from-sky-300 to-cyan-300 hover:from-sky-200 hover:to-cyan-200 transition-all shadow-[0_0_25px_rgba(14,165,233,0.4)] hover:scale-110 hover:shadow-[0_0_40px_rgba(14,165,233,0.6)] duration-300">
              ✨ Ver Serviços Online
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
            <Link href="/login" className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-sky-400/50 backdrop-blur-md transition-all hover:scale-105 duration-300">
              📱 Área do Cliente
            </Link>
          </div>
        </div>

        <div className="waves-container">
        </div>
      </section>

      <section className="py-32 relative overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-sky-500/15 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-sky-400 text-xs font-bold tracking-[0.3em] uppercase mb-3 block">🎯 Catálogo Premium</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">Nossas Soluções Exclusivas</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">Deslize para explorar nossos serviços. Tecnologia, agilidade e excelência na documentação náutica.</p>
          </div>

          <div className="relative h-[500px] flex items-center justify-center perspective-container">
            <button onClick={prevSlide} className="absolute left-0 md:left-4 z-50 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:border-sky-400/50 transition-all backdrop-blur-md text-white group">
              <ChevronLeft className="h-8 w-8 group-hover:scale-110 transition-transform" />
            </button>
            <button onClick={nextSlide} className="absolute right-0 md:right-4 z-50 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:border-sky-400/50 transition-all backdrop-blur-md text-white group">
              <ChevronRight className="h-8 w-8 group-hover:scale-110 transition-transform" />
            </button>

            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
              {DEFAULT_SERVICES.map((service, index) => {
                if (Math.abs(index - activeSlide) > 2) return null;
                return (
                  <div key={service.id} style={getCardStyle(index)} className="rounded-3xl overflow-hidden glass-panel shadow-2xl border-t border-white/20">
                    <div className="relative h-full flex flex-col">
                      <div className="h-48 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020c1b] via-transparent to-transparent z-10"></div>
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                        <div className="absolute top-4 right-4 z-20 bg-sky-600/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current" /> Destaque
                        </div>
                      </div>

                      <div className="p-6 flex-grow flex flex-col bg-[#020c1b]/40 backdrop-blur-md">
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-slate-300 text-sm line-clamp-3 mb-4 leading-relaxed">{service.description}</p>
                        <div className="mt-auto">
                          <div className="flex items-end justify-between mb-4">
                            <div>
                              <p className="text-xs text-slate-400 uppercase font-semibold">Investimento</p>
                              <p className="text-2xl font-bold text-sky-400">R$ {service.price.toFixed(2)}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <Link href="/services" className="block text-center py-2.5 rounded-xl border border-white/20 text-sm font-semibold text-white hover:bg-white/10 transition-colors">Detalhes</Link>
                            <button onClick={() => { addToCart(service); }} className="block text-center py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 text-sm font-bold text-white hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all">Adicionar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute -bottom-8 flex gap-2">
              {DEFAULT_SERVICES.map((_, idx) => (
                <button key={idx} onClick={() => setActiveSlide(idx)} className={`h-2 rounded-full transition-all duration-300 ${idx === activeSlide ? 'w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'w-2 bg-slate-600 hover:bg-slate-500'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-sky-600/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">🚀 Pronto para Regularizar?</h2>
          <p className="text-slate-200 mb-14 text-xl max-w-2xl mx-auto leading-relaxed">Envie sua documentação agora mesmo pelo nosso sistema seguro e 100% online. Resposta em até 48 horas!</p>

          <div className="glass-panel inline-block px-12 py-10 rounded-2xl mb-12 border-sky-500/30 bg-sky-950/50 backdrop-blur-xl hover:bg-sky-950/70 transition-all hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] duration-300">
             <p className="text-sm text-sky-300 mb-3 uppercase tracking-widest font-bold">💬 Dúvidas? Fale conosco no WhatsApp</p>
             <div className="text-4xl font-black text-sky-300 tracking-wide flex items-center justify-center gap-2">
                (48) 99624-1068
             </div>
             <p className="text-xs text-slate-400 mt-3">Atendimento de seg-sex, 09:00-18:00</p>
          </div>

          <div>
            <Link href="/services" className="inline-block bg-gradient-to-r from-sky-400 to-cyan-400 text-[#020c1b] px-14 py-5 rounded-xl font-bold text-lg hover:from-sky-300 hover:to-cyan-300 transition-all shadow-[0_0_25px_rgba(14,165,233,0.4)] hover:shadow-[0_0_40px_rgba(14,165,233,0.6)] hover:-translate-y-1 duration-300">✨ Iniciar Atendimento Agora</Link>
          </div>
        </div>
      </section>
    </div>
  );
}