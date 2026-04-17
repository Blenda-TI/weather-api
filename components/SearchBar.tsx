"use client";
import { useState, FormEvent } from 'react';

interface SearchBarProps {
  aoBuscar: (cidade: string) => void;
}

export default function SearchBar({ aoBuscar }: SearchBarProps) {
  const [cidadeDigitada, setCidadeDigitada] = useState('');

  const aoEnviarFormulario = (evento: FormEvent) => {
    evento.preventDefault(); 
    if (cidadeDigitada.trim() !== '') {
      aoBuscar(cidadeDigitada);
    }
  };

  return (
    <form className="search-bar" onSubmit={aoEnviarFormulario}>
      <input 
        type="text" 
        placeholder="Digite a cidade do RJ..." 
        value={cidadeDigitada}
        onChange={(evento) => setCidadeDigitada(evento.target.value)}
      />
      <button type="submit">Buscar Clima</button>
    </form>
  );
}