import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// 1. Defina os headers de permissão
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Permite que qualquer site acesse
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// 2. Crie esta função OPTIONS (O navegador precisa dela para validar o acesso)
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cidade = searchParams.get('cidade');

  if (!cidade) {
    return NextResponse.json({ error: 'Informe a cidade' }, { status: 400, headers: corsHeaders });
  }

  try {
    const result = await pool.query('SELECT * FROM weather WHERE cidade ILIKE $1', [cidade]);
    
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Não encontrada' }, { status: 404, headers: corsHeaders });
    }

    const data = result.rows[0];
    const respostaFormatada = {
      name: data.cidade,
      main: { 
        temp: parseFloat(data.temperatura), 
        humidity: data.umidade,
        feels_like: parseFloat(data.sensacao_termica) 
      },
      weather: [{ description: data.descricao, icon: data.icone }],
      wind: { speed: parseFloat(data.velocidade_vento) },
      sys: { country: data.pais }
    };

    // 3. IMPORTANTE: Passe os headers no final do seu JSON de sucesso
    return NextResponse.json(respostaFormatada, { headers: corsHeaders });

  } catch (error) {
    return NextResponse.json({ error: 'Erro no servidor' }, { status: 500, headers: corsHeaders });
  }
}