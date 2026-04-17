import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cidade = searchParams.get('cidade');

  if (!cidade) {
    return NextResponse.json({ error: 'Por favor, informe a cidade.' }, { status: 400 });
  }

  try {
    const result = await pool.query(
      'SELECT * FROM weather WHERE cidade ILIKE $1',
      [cidade]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Cidade não encontrada.' }, { status: 404 });
    }

    const data = result.rows[0];

    // Mantemos a saída em inglês para a prova, mas lendo das colunas em português
    const respostaFormatada = {
      name: data.cidade,
      sys: { country: data.pais },
      main: {
        temp: parseFloat(data.temperatura),
        feels_like: parseFloat(data.sensacao_termica),
        humidity: data.umidade
      },
      weather: [{ 
        description: data.descricao, 
        icon: data.icone 
      }],
      wind: { speed: parseFloat(data.velocidade_vento) }
    };

    return NextResponse.json(respostaFormatada);
  } catch (error) {
    console.error('Erro na API:', error);
    return NextResponse.json({ error: 'Erro no servidor.' }, { status: 500 });
  }
}