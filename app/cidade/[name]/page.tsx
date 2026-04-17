"use client";
// 1. Adicionamos o 'use' na importação do React
import { useEffect, useState, use } from 'react';
import WeatherCard from '../../../components/WeatherCard';
import Link from 'next/link';

// 2. Atualizamos a tipagem para avisar que params agora é uma Promise
interface PaginaDetalhesProps {
  params: Promise<{ name: string }>;
}

export default function CidadeDetalhes({ params }: PaginaDetalhesProps) {
  // 3. Usamos o hook 'use' para desempacotar a Promise e pegar o nome real
  const paramsDesempacotados = use(params);
  const nomeDaCidade = decodeURIComponent(paramsDesempacotados.name);

  const [resultadoDoClima, setResultadoDoClima] = useState<any>(null);

  useEffect(() => {
    async function buscarClimaDaCidade() {
      try {
        const resposta = await fetch(`/api/weather?cidade=${encodeURIComponent(nomeDaCidade)}`);
        if (resposta.ok) {
          const dados = await resposta.json();
          setResultadoDoClima(dados);
        }
      } catch (erro) {
        console.error("Erro:", erro);
      }
    }
    
    buscarClimaDaCidade();
  }, [nomeDaCidade]);

  return (
    <main className="container">
      <h1>Detalhes do Clima</h1>
      
      {resultadoDoClima ? (
        <WeatherCard dadosClima={resultadoDoClima} mostrarDetalhesExtras={true} />
      ) : (
        <p>Buscando informações...</p>
      )}
      
      <div className="footer-links">
        <Link href="/" className="btn-link">Voltar para Início</Link>
      </div>
    </main>
  );
}