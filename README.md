# ⚔️ Dev Samurai — Portfólio Cyberpunk

<p align="center">
  <img src="assets/readme/samurai.png" alt="Banner Dev Samurai" width="900">
</p>

<p align="center">
  <strong>Portfólio profissional desenvolvido para apresentar minha trajetória, habilidades, experiências, certificações e projetos como Desenvolvedor Full Stack.</strong>
</p>

<p align="center">
  Inspirado na estética <strong>Samurai</strong> e <strong>Cyberpunk</strong>, o projeto combina design futurista, animações modernas e uma arquitetura organizada, demonstrando conhecimentos em Front-end, Back-end, APIs REST, banco de dados e integração de sistemas.
</p>

---

# 🚀 Preview

## 🏠 Página Inicial

<p align="center">
  <img src="assets/readme/home.PNG" alt="Página inicial do portfólio" width="900">
</p>

---

## 📸 Páginas

<p align="center">
  <img src="assets/readme/sobre.PNG" alt="Página Sobre" width="48%">
  <img src="assets/readme/habilidades.PNG" alt="Página Habilidades" width="48%">
</p>

<p align="center">
  <img src="assets/readme/Projetos.PNG" alt="Página Projetos" width="48%">
  <img src="assets/readme/contato.PNG" alt="Página Contato" width="48%">
</p>

---

# 🎥 Demonstração

<p align="center">
  <img src="assets/readme/video.gif" alt="Demonstração do portfólio" width="900">
</p>

---

# 🎨 Conceito

O projeto foi desenvolvido com o objetivo de unir tecnologia, identidade visual e desenvolvimento Full Stack em uma única aplicação.

### ⚔️ Inspirações

* Cultura Samurai
* Estética Cyberpunk
* Interfaces futuristas
* Tecnologia e desenvolvimento
* Animações e efeitos visuais
* Experiência do usuário
* Design responsivo

---

# 🛠️ Tecnologias

## 🌐 Front-end

* HTML5
* CSS3
* JavaScript ES6+
* Fetch API
* DOM Manipulation
* Responsive Design

## ⚡ Back-end

* Python
* FastAPI
* SQLAlchemy
* PyMySQL
* APIs REST

## 🗄️ Banco de Dados

* MySQL

## 🔧 Ferramentas

* Git
* GitHub
* Visual Studio Code
* Railway
* GitHub Pages

## 📚 Bibliotecas

* Font Awesome

---

# ✨ Funcionalidades

* ✅ Layout responsivo
* ✅ Sidebar fixa
* ✅ Navegação dinâmica
* ✅ Scroll suave
* ✅ Reveal Animations
* ✅ Efeitos visuais Cyberpunk
* ✅ Página inicial
* ✅ Página Sobre
* ✅ Página de Habilidades
* ✅ Página de Projetos
* ✅ Página de Contato
* ✅ Página de Experiências
* ✅ Página de Certificações
* ✅ Backend desenvolvido com FastAPI
* ✅ API REST
* ✅ Integração Front-end + Back-end
* ✅ Integração com MySQL
* ✅ Formulário de contato
* ✅ Envio de mensagens através da API
* ✅ Persistência de dados
* ✅ JavaScript modular
* ✅ Organização profissional de código

---

# 🧑‍💻 Sobre o Projeto

O **Dev Samurai** é um portfólio desenvolvido para representar minha evolução como desenvolvedor e apresentar, de forma prática, meus conhecimentos técnicos.

Além de funcionar como uma página profissional, o projeto também foi utilizado como laboratório para aplicar conceitos de desenvolvimento Full Stack, incluindo:

* Desenvolvimento Front-end
* Desenvolvimento Back-end
* Criação de APIs REST
* Integração entre aplicações
* Persistência de dados
* Modelagem de banco de dados
* Arquitetura de projetos
* Modularização
* Versionamento com Git
* Deploy em ambiente de produção

---

# 📜 Certificações

O portfólio possui uma seção dedicada à apresentação das certificações, cursos e capacitações realizadas durante minha trajetória na área de tecnologia.

Entre os conhecimentos apresentados estão:

* 💻 Desenvolvimento de Software
* 🐍 Python
* 🌐 Desenvolvimento Web
* ⚡ JavaScript
* 🚀 Desenvolvimento Full Stack
* 🗄️ Banco de Dados
* 📚 Outros cursos e capacitações relacionados à tecnologia

---

# 💼 Experiências

## 👨‍🏫 Infinity School

Atuação como **Estagiário Professor de Programação**, trabalhando com:

* JavaScript
* Python
* HTML
* CSS
* Node.js
* Desenvolvimento de projetos
* Game Design
* Orientação de alunos

---

## 💻 CNX — Marketing & Automação Inteligente

Atuação como **Cofundador e Desenvolvedor Full Stack**, trabalhando com:

* Desenvolvimento de aplicações web
* Desenvolvimento de APIs REST
* Python
* FastAPI
* Node.js
* Banco de Dados
* Automações
* Integração de APIs
* Desenvolvimento de soluções para empresas

---

# 🗄️ Banco de Dados

O projeto utiliza **MySQL em ambiente de produção**.

As informações de conexão com o banco de dados são configuradas através de variáveis de ambiente, mantendo credenciais sensíveis fora do código-fonte.

```text
MYSQL_HOST
MYSQL_USER
MYSQL_PASSWORD
MYSQL_DATABASE
MYSQL_PORT
```

### 🔐 Segurança

As credenciais do banco de dados **não são armazenadas diretamente no código ou no repositório**.

A aplicação utiliza variáveis de ambiente para realizar a configuração da conexão.

---

# 🔄 Fluxo da Aplicação

```text
                    PORTFÓLIO
                        │
                        ▼
              JavaScript / Fetch API
                        │
                        ▼
                 FastAPI / Python
                        │
                        ▼
                  SQLAlchemy ORM
                        │
                        ▼
                      MySQL
```

---

# 🏗️ Arquitetura

```text
                    FRONT-END
              HTML • CSS • JavaScript
                         │
                         ▼
                    Fetch API
                         │
                         ▼
                 FASTAPI / PYTHON
                         │
                         ▼
                   SQLAlchemy
                         │
                         ▼
                      MySQL
```

Essa arquitetura permite separar as responsabilidades da aplicação, facilitando manutenção, escalabilidade e evolução futura do projeto.

---

# 📁 Estrutura do Projeto

```text
meu-portifolio/
│
├── assets/
│   ├── css/
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── menu.js
│   │   ├── reveal.js
│   │   ├── scroll.js
│   │   └── contato.js
│   │
│   └── images/
│       └── readme/
│
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── routers/
│   │   ├── schemas/
│   │   ├── database.py
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .venv/
│
├── index.html
├── habilidades.html
├── projetos.html
├── contato.html
├── README.md
└── .gitignore
```

---

# 🧠 Conceitos Aplicados

Durante o desenvolvimento foram aplicados conceitos importantes de desenvolvimento de software:

* Organização de projetos
* Arquitetura de pastas
* Modularização
* Clean Code
* Responsividade
* APIs REST
* FastAPI
* SQLAlchemy
* MySQL
* Integração Front-end + Back-end
* Fetch API
* CRUD
* Git Flow
* Versionamento com Git
* UI/UX
* Estruturas escaláveis
* Variáveis de ambiente
* Deploy em produção

---

# 📱 Responsividade

O projeto foi desenvolvido pensando em diferentes tamanhos de tela.

```text
💻 Desktop
🖥️ Monitores
💼 Notebook
📱 Smartphone
📟 Tablet
```

A interface utiliza técnicas de **Responsive Web Design** para adaptar o conteúdo aos diferentes dispositivos.

---

# 🚀 Roadmap

### ✅ Concluído

* [x] Estrutura inicial
* [x] Layout responsivo
* [x] Página Sobre
* [x] Página Habilidades
* [x] Página Projetos
* [x] Página Contato
* [x] Página de Experiências
* [x] Página de Certificações
* [x] Organização do JavaScript
* [x] Estrutura do Backend
* [x] API com FastAPI
* [x] Integração com MySQL
* [x] Formulário de contato
* [x] Envio de mensagens
* [x] Deploy da API
* [x] Deploy do Portfólio

### 🔮 Próximos passos

* [ ] Dashboard administrativo
* [ ] Sistema de autenticação
* [ ] Melhorias de SEO
* [ ] Internacionalização
* [ ] Monitoramento da API
* [ ] Melhorias de performance
* [ ] Novos projetos

---

# ☁️ Deploy

O projeto possui ambiente de produção com **Front-end, Back-end e Banco de Dados integrados**.

## 🌐 Front-end

O portfólio está publicado e disponível online.

## ⚡ Back-end

A API foi desenvolvida utilizando **FastAPI + Python** e está hospedada no **Railway**.

### 🔗 API

```text
https://meu-portifolio-production-dd2b.up.railway.app
```

### 📚 Documentação da API

A API possui documentação automática através do Swagger:

```text
https://meu-portifolio-production-dd2b.up.railway.app/docs
```

---

# 🔌 Integração do Formulário

O formulário de contato do portfólio se comunica diretamente com a API.

O fluxo funciona da seguinte maneira:

```text
Usuário
   │
   ▼
Formulário de Contato
   │
   ▼
JavaScript / Fetch API
   │
   ▼
FastAPI
   │
   ▼
Validação dos dados
   │
   ▼
SQLAlchemy
   │
   ▼
MySQL
   │
   ▼
Mensagem armazenada
```

Essa integração demonstra, na prática, a comunicação entre **Front-end, Back-end e Banco de Dados**.

---

# 📊 Stack do Projeto

```text
┌─────────────────────────────────────┐
│             FRONT-END               │
│       HTML • CSS • JavaScript       │
└─────────────────┬───────────────────┘
                  │
                  │ Fetch API
                  ▼
┌─────────────────────────────────────┐
│              BACK-END               │
│          Python • FastAPI           │
└─────────────────┬───────────────────┘
                  │
                  │ SQLAlchemy
                  ▼
┌─────────────────────────────────────┐
│             DATABASE                │
│               MySQL                 │
└─────────────────────────────────────┘
```

---

# 🎯 Objetivo

O objetivo principal do projeto é apresentar minha experiência e evolução como desenvolvedor, utilizando um projeto real para demonstrar conhecimentos em diferentes áreas do desenvolvimento de software.

O **Dev Samurai** representa a combinação entre:

> ⚔️ Identidade
> 💻 Tecnologia
> 🧠 Conhecimento
> 🚀 Desenvolvimento
> 🎨 Criatividade

---

# 👨‍💻 Desenvolvedor

**Pablo Martins**

Desenvolvedor Full Stack com experiência em desenvolvimento de aplicações web, APIs REST, automações e bancos de dados.

### Tecnologias principais

```text
Python
FastAPI
Node.js
JavaScript
HTML5
CSS3
MySQL
SQLAlchemy
Git
GitHub
```

---

<p align="center">
  ⚔️ <strong>Dev Samurai</strong>
  <br>
  Desenvolvendo soluções. Evoluindo constantemente.
</p>
