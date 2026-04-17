import Link from 'next/link';

export default function Sobre() {
  return (
    <main className="container sobre-page">
      <h1>Sobre o Projeto</h1>
      <div className="card-info">
        <p><strong>Aluno:</strong> Blenda Moreira</p>
        <p><strong>Curso:</strong> Sistemas Para Internet </p>
        <p><strong>Instituição:</strong> FAETERJ – Unidade Barra Mansa</p>
        <hr />
        <p><em>O WeatherNow é uma aplicação web de monitoramento climático desenvolvida com foco em design moderno e performance.
                Este projeto foi criado como avaliação prática para a disciplina de Programação e Design para Web II, do curso de Tecnologia em Análise e Desenvolvimento de Sistemas da FAETERJ (Campus Barra Mansa).
                O grande diferencial desta aplicação é a sua arquitetura Full-Stack independente. Em vez de consumir serviços de terceiros diretamente no front-end, o WeatherNow possui a sua própria infraestrutura de back-end integrada, garantindo maior segurança e controle sobre o fluxo de informações.
                <br></br>
                🛠️ Tecnologias Utilizadas
                Front-end: Next.js 14, React 18 e CSS3 avançado.
                Back-end: Node.js e Next API Routes.
                Banco de Dados: PostgreSQL (via Neon DB) e pacote pg.
                Hospedagem: Vercel..</em></p>
      </div>
      
      <div className="footer-links">
        <Link href="/" className="btn-link">Voltar para o Home</Link>
      </div>
    </main>
  );
}