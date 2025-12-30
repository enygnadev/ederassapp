"use client";
import React from 'react';
import { useAuth } from '../../../context/AuthContext';

export default function ClientDashboard() {
  const { user } = useAuth();
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold">Painel do Cliente</h1>
      <p className="mt-4">Bem-vindo, {user?.name || 'Cliente'} — aqui estão seus pedidos.</p>
    </div>
  );
}