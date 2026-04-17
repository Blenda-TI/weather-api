# 🌤️ WeatherNow

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon_DB-336791?style=for-the-badge&logo=postgresql)
![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3)

O **WeatherNow** é uma aplicação web Full-Stack de monitoramento climático projetada com foco em arquitetura moderna, performance e excelência em UI/UX. 

Desenvolvido como avaliação prática para a disciplina de Programação e Design para Web II da FAETERJ (Campus Barra Mansa), o projeto se destaca por possuir uma arquitetura de dados independente. Em vez de depender de APIs externas públicas no front-end, a aplicação conta com seu próprio servidor back-end integrado a um banco de dados relacional na nuvem.

## ✨ Principais Funcionalidades

* **API RESTful Nativa:** Utilização dos *Route Handlers* do Next.js para criar um back-end próprio (`/api/weather`) que processa requisições de forma segura.
* **Integração Direta com Banco de Dados:** Conexão assíncrona com PostgreSQL hospedado no **Neon DB**, garantindo leitura rápida dos dados climáticos utilizando a biblioteca `pg`.
* **Roteamento Dinâmico:** Implementação do moderno *App Router* do Next.js para gerar páginas dinâmicas e detalhadas para cada cidade (`/cidade/[name]`), tratando *Promises* de parâmetros de URL.
* **Design 'Midnight Tech':** Interface construída 100% em CSS puro, utilizando a técnica de *Glassmorphism* (efeito de vidro fosco), tipografia *Inter* e microinterações para uma experiência sofisticada em Dark Mode.

## 🛠️ Tecnologias Utilizadas

* **Front-end:** Next.js 14 (App Router), React 18, CSS3 Avançado.
* **Back-end:** Node.js, Next API Routes.
* **Banco de Dados:** PostgreSQL (hospedado na Neon DB).
* **Dependências Principais:** `pg` (PostgreSQL client para Node.js).

## 🚀 Como executar o projeto localmente

Para rodar este projeto no seu computador, você precisará ter o [Node.js](https://nodejs.org/) instalado.

**1. Clone o repositório**
```bash
git clone [https://github.com/Blenda-TI/WeatherApp.git](https://github.com/Blenda-TI/WeatherApp.git)
cd weathernow
````

**2. Instale as dependências**

```bash
npm install
```

**3. Configure as Variáveis de Ambiente**
Crie um arquivo chamado `.env.local` na raiz do projeto e adicione a sua *Connection String* do banco de dados Neon:

```env
DATABASE_URL="postgresql://usuario:senha@seu-host.neon.tech/neondb?sslmode=require"
```

*(Nota: Nunca comite o arquivo .env.local para o GitHub por questões de segurança).*

**4. Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

**5. Acesse a aplicação**
Abra o seu navegador e acesse: [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

## 🌐 Deploy (Produção)

O deploy desta aplicação foi otimizado para a plataforma **Vercel**.
Ao realizar o deploy, lembre-se de configurar a variável de ambiente `DATABASE_URL` diretamente no painel de configurações do projeto na Vercel (*Settings \> Environment Variables*).

-----

**Desenvolvido por [Seu Nome Aqui]** *Estudante de Análise e Desenvolvimento de Sistemas - FAETERJ Barra Mansa*

```

***

### O que fazer antes de salvar:
1. Altere o link `https://github.com/SEU_USUARIO/weathernow.git` para o link real do seu repositório.
2. Troque o `[Seu Nome Aqui]` no final pelo seu nome.

Com esse README, qualquer pessoa (ou recrutador) que bater o olho no seu GitHub vai entender imediatamente o nível de maturidade do seu código e as tecnologias modernas que você domina! Tem mais alguma dúvida sobre a entrega ou o GitHub?
```