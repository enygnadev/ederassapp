import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Upload, FileCheck, Trash2, ArrowRight, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

export const Checkout: React.FC = () => {
  const { cart, removeFromCart, updateItemDocument, placeOrder, clearCart, isUploading } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  // Check if cart is empty
  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center text-white">
        <div className="inline-block p-6 rounded-full bg-slate-800/50 backdrop-blur mb-6">
            <AlertCircle className="h-12 w-12 text-slate-400" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Seu carrinho está vazio</h2>
        <button onClick={() => navigate('/services')} className="text-cyan-400 hover:text-cyan-300 font-medium hover:underline text-lg">
          Voltar para serviços
        </button>
      </div>
    );
  }

  // Handle Order Placement
  const handleFinishOrder = async () => {
    if (!user) {
        navigate('/login');
        return;
    }

    // Validation: Check if all docs are uploaded
    let missingDocs = false;
    cart.forEach(item => {
        item.requiredDocuments.forEach(doc => {
            if (!item.uploadedDocs[doc]) missingDocs = true;
        });
    });

    if (missingDocs) {
        setError('Por favor, anexe todos os documentos obrigatórios para continuar.');
        window.scrollTo(0, 0);
        return;
    }

    setError(null);

    try {
        await placeOrder(user.id, user.name);
        navigate('/dashboard/client');
    } catch (err) {
        setError('Ocorreu um erro ao processar seu pedido. Tente novamente.');
        console.error(err);
    }
  };

  const handleFileChange = (cartId: string, docName: string, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
        updateItemDocument(cartId, docName, event.target.files[0]);
        setError(null); // Clear global error if they upload something
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <h1 className="text-3xl font-bold text-white mb-8">Finalizar Solicitação</h1>

      {error && (
        <div className="bg-red-500/10 backdrop-blur border border-red-500/50 text-red-200 px-6 py-4 rounded-xl mb-8 flex items-center gap-3 shadow-lg">
            <AlertCircle className="h-6 w-6 shrink-0" />
            {error}
        </div>
      )}

      {isUploading && (
          <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-50 flex flex-col items-center justify-center">
              <Loader2 className="h-16 w-16 text-cyan-400 animate-spin mb-6" />
              <h2 className="text-2xl font-bold text-white">Enviando Documentos...</h2>
              <p className="text-slate-400 mt-2">Criptografando e salvando na nuvem. Aguarde.</p>
          </div>
      )}

      <div className="space-y-6">
        {/* Iterate through cart items */}
        {cart.map((item, index) => (
          <div key={item.cartId} className="glass-panel rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
            <div className="bg-slate-50/50 backdrop-blur px-6 py-4 border-b border-slate-200/50 flex justify-between items-center flex-wrap gap-4">
               <div>
                  <h3 className="font-bold text-slate-900 text-lg flex items-center gap-3">
                    <span className="bg-blue-600 text-white w-7 h-7 rounded-lg text-sm flex items-center justify-center shadow-md shadow-blue-500/30">{index + 1}</span>
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 ml-10 mt-1 font-medium">{item.category === 'insurance' ? 'Seguro' : 'Documento'}</p>
               </div>
               <div className="flex items-center gap-6">
                 <span className="font-bold text-slate-900 text-xl">R$ {item.price.toFixed(2)}</span>
                 <button 
                    onClick={() => removeFromCart(item.cartId)}
                    className="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors"
                    title="Remover item"
                 >
                    <Trash2 className="h-5 w-5" />
                 </button>
               </div>
            </div>

            <div className="p-8">
                <p className="text-sm font-semibold text-slate-700 mb-5 uppercase tracking-wide">Anexe os documentos necessários:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {item.requiredDocuments.map((doc) => {
                        const isUploaded = !!item.uploadedDocs[doc];
                        return (
                            <div key={doc} className={`border rounded-xl p-4 transition-all duration-300 ${isUploaded ? 'border-green-400 bg-green-50' : 'border-slate-200 bg-white/50 hover:bg-white/80'}`}>
                                <div className="flex justify-between items-start mb-3">
                                    <label className="text-sm font-bold text-slate-700 block max-w-[85%] leading-tight">
                                        {doc} <span className="text-red-500">*</span>
                                    </label>
                                    {isUploaded ? <CheckCircle className="h-5 w-5 text-green-600" /> : <AlertCircle className="h-5 w-5 text-amber-500" />}
                                </div>
                                
                                <div className="relative">
                                    <input 
                                        type="file" 
                                        id={`file-${item.cartId}-${doc}`}
                                        className="hidden" 
                                        onChange={(e) => handleFileChange(item.cartId, doc, e)}
                                    />
                                    <label 
                                        htmlFor={`file-${item.cartId}-${doc}`}
                                        className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg border text-sm font-bold cursor-pointer transition-all ${
                                            isUploaded 
                                            ? 'border-green-200 text-green-700 bg-white shadow-sm' 
                                            : 'border-slate-300 text-slate-600 hover:text-blue-600 hover:border-blue-400 hover:bg-white shadow-sm'
                                        }`}
                                    >
                                        {isUploaded ? (
                                            <>
                                                <FileCheck className="h-4 w-4" />
                                                {item.uploadedDocs[doc]?.name.substring(0, 15)}...
                                            </>
                                        ) : (
                                            <>
                                                <Upload className="h-4 w-4" />
                                                Selecionar Arquivo
                                            </>
                                        )}
                                    </label>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 glass-panel p-8 rounded-2xl border-t-4 border-t-blue-500">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <span className="text-xl text-slate-800 font-medium">Total do Pedido:</span>
            <span className="text-4xl font-extrabold text-blue-800">R$ {total.toFixed(2)}</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-end">
            <button 
                onClick={clearCart}
                className="px-6 py-4 border border-slate-300 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-colors"
            >
                Cancelar
            </button>
            <button 
                onClick={handleFinishOrder}
                disabled={isUploading}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105 transition-all"
            >
                {isUploading ? 'Processando...' : (
                    <>
                        Concluir Solicitação <ArrowRight className="h-5 w-5" />
                    </>
                )}
            </button>
        </div>
      </div>
    </div>
  );
};