"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';

export default function CheckoutPage() {
  const { cart, removeFromCart, clearCart, placeOrder, isUploading } = useCart();
  const router = useRouter();

  const handlePlaceOrder = async () => {
    // For demo, use placeholder user id/name
    try {
      await placeOrder('demoUserId', 'Demo User');
      router.push('/dashboard/client');
    } catch (err) {
      console.error(err);
      alert('Erro ao enviar pedido');
    }
  };

  if (!cart || cart.length === 0) {
    return <div className="max-w-4xl mx-auto p-8 text-center">Seu carrinho está vazio.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Resumo do Pedido</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.cartId} className="p-4 bg-white/5 rounded-lg flex items-center justify-between">
            <div>
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-slate-400">R$ {item.price.toFixed(2)}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => removeFromCart(item.cartId)} className="px-4 py-2 rounded-lg bg-red-500 text-white">Remover</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <button onClick={() => clearCart()} className="px-4 py-2 rounded-lg bg-gray-700 text-white">Limpar</button>
        </div>
        <div>
          <button onClick={handlePlaceOrder} disabled={isUploading} className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-bold">{isUploading ? 'Enviando...' : 'Finalizar Pedido'}</button>
        </div>
      </div>
    </div>
  );
}