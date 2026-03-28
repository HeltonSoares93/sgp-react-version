# Sistema de Gestão de Projetos (SGP) - Frontend

## O que é?
O **SGP (Sistema de Gestão de Projetos)** é uma aplicação web desenvolvida em React projetada para facilitar a administração corporativa contínua. Com uma interface amigável e limpa, o sistema permite o rastreamento, o cadastramento e o gerenciamento organizado das três principais entidades do ambiente de trabalho: **Usuários, Projetos e Tarefas**.

## Como Funciona?
O projeto foi construído como uma interface *Single Page Application* (SPA). A aplicação não salva dados no navegador; ela age apenas como uma cliente visual que se comunica de forma assíncrona (usando Axios) com uma API RESTful de retaguarda (Backend).

Através da interface, o administrador consegue realizar o fluxo de CRUD (Cadastro, Listagem, Atualização e Remoção) coordenado. Uma Tarefa sempre estará designada a um Usuário (Responsável) e associada a um grande escopo (Projeto), interligando a infraestrutura das telas.

## Tecnologias Utilizadas
- **React.js 19**: Biblioteca fundamental para a criação das telas através de componentes isolados, modulares e reutilizáveis.
- **Vite**: Construção de pacotes (*bundler*) extremamente leve que garante um servidor de inicialização instantânea no ambiente de desenvolvimento.
- **React-Bootstrap**: Base visual do design pattern estrutural para a padronização das grades Responsivas, Botões de Controle e visualização das *Modals*.
- **React-Router-DOM**: Gerenciador de navegação para alternar entre relatórios diferentes sem o recarregamento total (F5) da página web.
- **Axios**: Cliente escolhido para trafegar requisições HTTP seguras.

## Pré-requisitos
Para realizar a execução do SGP na sua máquina, certifique-se de configurar e instalar os seguintes quesitos:
1. Instalação do **Node.js** (versão 18+ recomendada) e do **NPM**;
2. *Um Backend compatível operando obrigatoriamente e rodando a sua própria API na porta Local `8080`* (Todos os nós de requisição buscam o `http://localhost:8080/...`). Se o backend estiver inativo ou em outra porta, as listas não receberão dados.

## Como Compilar e Executar

1. Clone o repositório deste projeto em um ambiente de sua preferência.
2. Com um emulador de terminal (Cmd, PowerShell ou Bash), acesse a raiz extraída do projeto:
   ```bash
   cd sgp-react-version
   ```
3. Instale todas as dependências mapeadas internamente baixando novamente os pacotes fundamentais contidos no *package.json*:
   ```bash
   npm install
   ```
4. Suba o servidor integrado de visualização local do Vite executando o script:
   ```bash
   npm run dev
   ```
5. Pronto! Acesse `http://localhost:5173/` no seu navegador principal e o frontend será montado na sua tela.

## Contato e Elaboração
Desenvolvido por **Helton Soares**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/helton-gomes-dev/)
