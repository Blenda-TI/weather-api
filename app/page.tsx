"use client";
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import Link from 'next/link';

export default function TelaPrincipal() {
  const [resultadoDoClima, setResultadoDoClima] = useState<any>(null);

  const buscarDadosDaApi = async (nomeDaCidade: string) => {
    try {
      const resposta = await fetch(`/api/weather?cidade=${encodeURIComponent(nomeDaCidade)}`);
      
      if (!resposta.ok) {
        alert("Cidade não encontrada.");
        return;
      }

      const dados = await resposta.json();
      setResultadoDoClima(dados); 
    } catch (erro) {
      console.error("Erro na busca:", erro);
    }
  };

  return (
    <main className="container">
      <h1>WeatherNow 🌤️</h1>
      
      <SearchBar aoBuscar={buscarDadosDaApi} />
      
      {resultadoDoClima && <WeatherCard dadosClima={resultadoDoClima} />}

      <div className="footer-links">
        <Link href="/sobre" className="btn-link-outline">Sobre o Projeto</Link>
      </div>
    </main>
  );
}