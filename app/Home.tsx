import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { MOCK_SERVICES } from '../types';
import { useCart } from '../context/CartContext';

export const Home: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Começa no segundo item para visual
  const [isPaused, setIsPaused] = useState(false);
  const { addToCart } = useCart();

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % MOCK_SERVICES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % MOCK_SERVICES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + MOCK_SERVICES.length) % MOCK_SERVICES.length);
  };

  const getCardStyle = (index: number) => {
    const total = MOCK_SERVICES.length;
    // Calculate distance accounting for wrap-around to make it circular visually if needed,
    // but for simple 3D stack, we treat index directly relative to activeSlide.
    // To make it loop smoothly visually requires duplicating DOM, but for this simplified version
    // we will calculate distance directly.
    
    let distance = index - activeSlide;
    
    // Logic to ensure the carousel feels centered even at ends (optional, purely visual style here)
    // We will stick to a linear list that you navigate through for stability.
    
    const isActive = index === activeSlide;
    const xOffset = distance * 110; // 110% width spacing
    const scale = isActive ? 1 : Math.max(0.8 - Math.abs(distance) * 0.1, 0.6);
    const rotateY = isActive ? 0 : distance * -15; // Rotate inwards
    const zIndex = total - Math.abs(distance);
    const opacity = Math.max(1 - Math.abs(distance) * 0.3, 0);
    const blur = isActive ? 0 : Math.abs(distance) * 2;

    return {
      transform: `translateX(${xOffset}%) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
      zIndex: zIndex,
      opacity: opacity,
      filter: `blur(${blur}px)`,
      transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
      position: 'absolute' as 'absolute',
      left: '0',
      right: '0',
      margin: '0 auto',
      width: '100%',
      maxWidth: '350px',
      pointerEvents: isActive ? 'auto' : 'none' as 'none', // Only active card is clickable for buttons inside
    };
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1920" 
                alt="Background Sea" 
                className="w-full h-full object-cover opacity-30 scale-105" 
            />
            {/* Deep Navy Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020c1b]/60 via-[#020c1b]/80 to-[#020c1b]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in pb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-900/20 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <span className="text-blue-200 text-xs font-semibold tracking-wider uppercase">Assessoria Especializada</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white drop-shadow-2xl">
            Navegue com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">Segurança</span> <br className="hidden md:block" /> e Legalidade.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Especialistas em documentação náutica. Seguro DPEM, licenças de pesca e regularização completa junto à Marinha.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-[#020c1b] bg-gradient-to-r from-blue-200 to-cyan-200 hover:from-white hover:to-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
              Ver Serviços Online
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/login" className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all hover:scale-105">
              Área do Cliente
            </Link>
          </div>
        </div>

        {/* Animated Waves */}
        <div className="waves-container">
            <svg className="waves-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(30, 58, 138, 0.3)" /> {/* Dark Blue Wave */}
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(30, 58, 138, 0.5)" /> {/* Medium Blue Wave */}
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(30, 58, 138, 0.7)" /> {/* Light Blue Wave */}
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#020c1b" /> {/* Main Background Match */}
                </g>
            </svg>
        </div>
      </section>

      {/* Warning Section */}
      <section className="relative z-20 px-4 -mt-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-500/80 to-amber-600/80 rounded-2xl shadow-xl shadow-amber-900/20 p-[1px]">
          <div className="bg-[#0a192f] rounded-xl px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-3 text-center backdrop-blur-md">
             <ShieldCheck className="h-6 w-6 text-yellow-400 shrink-0" />
             <p className="text-slate-200 font-medium">
               <span className="text-yellow-400 font-bold uppercase mr-1">Atenção:</span> 
               Proprietários de Caiaque com motor devem possuir o Seguro Obrigatório DPEM vigente.
             </p>
          </div>
        </div>
      </section>

      {/* 3D Smart Service Carousel */}
      <section className="py-24 relative overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Catálogo Premium</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Nossas Soluções</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Deslize para explorar os serviços. Tecnologia e agilidade para sua documentação.</p>
          </div>

          {/* Carousel Container */}
          <div className="relative h-[500px] flex items-center justify-center perspective-container">
             
             {/* Navigation Buttons */}
             <button onClick={prevSlide} className="absolute left-0 md:left-4 z-50 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:border-cyan-400/50 transition-all backdrop-blur-md text-white group">
                <ChevronLeft className="h-8 w-8 group-hover:scale-110 transition-transform" />
             </button>
             <button onClick={nextSlide} className="absolute right-0 md:right-4 z-50 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:border-cyan-400/50 transition-all backdrop-blur-md text-white group">
                <ChevronRight className="h-8 w-8 group-hover:scale-110 transition-transform" />
             </button>

             {/* Cards Stack */}
             <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                {MOCK_SERVICES.map((service, index) => {
                    // Only render visible range to improve performance if list is huge, 
                    // but for 5 items, rendering all is fine and creates better animation
                    if (Math.abs(index - activeSlide) > 2) return null; 

                    return (
                        <div 
                            key={service.id}
                            style={getCardStyle(index)}
                            className="rounded-3xl overflow-hidden glass-panel shadow-2xl border-t border-white/20"
                        >
                            {/* Card Content */}
                            <div className="relative h-full flex flex-col">
                                {/* Image Half */}
                                <div className="h-48 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020c1b] via-transparent to-transparent z-10"></div>
                                    <img 
                                        src={service.image} 
                                        alt={service.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-blue-600/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1">
                                        <Star className="h-3 w-3 fill-current" /> Destaque
                                    </div>
                                </div>

                                {/* Text Half */}
                                <div className="p-6 flex-grow flex flex-col bg-[#020c1b]/40 backdrop-blur-md">
                                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-slate-300 text-sm line-clamp-3 mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                    
                                    <div className="mt-auto">
                                        <div className="flex items-end justify-between mb-4">
                                            <div>
                                                <p className="text-xs text-slate-400 uppercase font-semibold">Investimento</p>
                                                <p className="text-2xl font-bold text-cyan-400">R$ {service.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-3">
                                            <Link 
                                                to="/services" 
                                                className="block text-center py-2.5 rounded-xl border border-white/20 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                                            >
                                                Detalhes
                                            </Link>
                                            <button 
                                                onClick={() => { addToCart(service); }}
                                                className="block text-center py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-sm font-bold text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all"
                                            >
                                                Adicionar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
             </div>
             
             {/* Pagination Dots */}
             <div className="absolute -bottom-8 flex gap-2">
                {MOCK_SERVICES.map((_, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === activeSlide ? 'w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'w-2 bg-slate-600 hover:bg-slate-500'}`}
                    />
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        {/* Radial sheen effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para regularizar?</h2>
          <p className="text-slate-300 mb-10 text-lg">Envie sua documentação agora mesmo pelo nosso sistema seguro.</p>
          
          <div className="glass-panel inline-block px-10 py-8 rounded-2xl mb-10 border-blue-500/20 bg-[#0a192f]/60 backdrop-blur-xl hover:bg-[#0a192f]/80 transition-colors">
             <p className="text-sm text-slate-400 mb-2 uppercase tracking-wide">Dúvidas? Fale conosco no WhatsApp</p>
             <div className="text-3xl font-bold text-cyan-400 tracking-wide flex items-center justify-center gap-2">
                (48) 99624-1068
             </div>
          </div>
          
          <div>
            <Link to="/services" className="inline-block bg-white text-[#020c1b] px-12 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1">
                Iniciar Atendimento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};