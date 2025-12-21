import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Anchor, ShoppingCart, LogOut, User, Menu, X } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Dark Glass Header (Matching Deep Navy) */}
      <header className="sticky top-0 z-50 glass-nav shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2.5 rounded-xl shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <Anchor className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white leading-none tracking-tight">EDER MARTINS</h1>
                <p className="text-[10px] text-blue-200 uppercase tracking-[0.2em] mt-1">Assessoria Náutica</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to="/services" 
                className={`text-sm font-medium transition-colors duration-300 ${
                    location.pathname === '/services' ? 'text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]' : 'text-slate-300 hover:text-white'
                }`}
              >
                Serviços
              </Link>
              
              {user ? (
                <>
                  {user.role === 'client' && (
                    <Link to="/dashboard/client" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Meus Pedidos</Link>
                  )}
                  {user.role === 'admin' && (
                     <Link to="/dashboard/admin" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Painel Admin</Link>
                  )}
                  {user.role === 'employee' && (
                     <Link to="/dashboard/employee" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Painel Colaborador</Link>
                  )}
                  <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-700">
                    <span className="text-sm text-slate-400">Olá, <span className="text-white font-semibold">{user.name.split(' ')[0]}</span></span>
                    <button onClick={handleLogout} className="text-slate-400 hover:text-red-400 transition-colors">
                      <LogOut className="h-5 w-5" />
                    </button>
                  </div>
                </>
              ) : (
                <Link to="/login" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10">
                  <User className="h-4 w-4" />
                  Entrar
                </Link>
              )}

              {/* Cart Widget */}
              {(!user || user.role === 'client') && (
                <Link to="/cart" className="relative p-2 text-slate-300 hover:text-cyan-400 transition-colors">
                  <ShoppingCart className="h-6 w-6" />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full shadow-md animate-bounce">
                      {cart.length}
                    </span>
                  )}
                </Link>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-300 hover:text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Dark Glass) */}
        {isMenuOpen && (
          <div className="md:hidden glass-nav border-t border-slate-800 absolute w-full z-50">
             <div className="px-4 pt-2 pb-4 space-y-1">
                <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-300 hover:bg-white/5 rounded-md">Serviços</Link>
                {user ? (
                   <>
                    <Link to={`/dashboard/${user.role}`} onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-300 hover:bg-white/5 rounded-md">Painel</Link>
                    <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-3 text-base font-medium text-red-400 hover:bg-white/5 rounded-md">Sair</button>
                   </>
                ) : (
                  <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-300 hover:bg-white/5 rounded-md">Login</Link>
                )}
             </div>
          </div>
        )}
      </header>

      <main className="flex-grow relative">
        {children}
      </main>

      <footer className="bg-[#020c1b] text-slate-400 py-12 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-blue-600 p-1.5 rounded-lg">
                  <Anchor className="h-4 w-4 text-white" />
               </div>
               <h3 className="text-white font-bold text-lg">Eder Martins</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Especialista em documentação náutica. Regularize sua embarcação com agilidade, segurança e transparência.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                WhatsApp: (48) 99624-1068
              </li>
              <li className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                Email: contato@edernautica.com.br
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Atendimento</h3>
            <p className="text-sm text-slate-500">Segunda a Sexta<br />08:00 - 18:00</p>
            <div className="mt-4 flex gap-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors cursor-pointer"></div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          © 2024 Eder Martins Assessoria Náutica. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};