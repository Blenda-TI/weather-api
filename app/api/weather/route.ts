import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cidade = searchParams.get('cidade');

  if (!cidade) {
    return NextResponse.json({ error: 'Cidade não informada' }, { status: 400, headers: corsHeaders });
  }

  try {
    // Busca técnica: limpa espaços e ignora maiúsculas/minúsculas
    const result = await pool.query(
      'SELECT * FROM weather WHERE LOWER(cidade) = LOWER($1)', 
      [cidade.trim()]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Não encontrado' }, { status: 404, headers: corsHeaders });
    }

    const data = result.rows[0];

    // Retorna apenas os dados brutos estruturados
    const rawData = {
      name: data.cidade,
      main: { 
        temp: parseFloat(data.temperatura), 
        humidity: data.umidade,
        feels_like: parseFloat(data.sensacao_termica)
      },
      weather: [{ 
        description: data.descricao, 
        icon: data.icone 
      }],
      wind: { speed: parseFloat(data.velocidade_vento) },
      sys: { country: data.pais }
    };

    return NextResponse.json(rawData, { headers: corsHeaders });

  } catch (error) {
    return NextResponse.json({ error: 'Erro de conexão' }, { status: 500, headers: corsHeaders });
  }
}