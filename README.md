# Livraria Front-End

Este projeto é uma aplicação front-end desenvolvida em React utilizando Vite. A aplicação permite visualizar livros disponíveis e cadastrar novos livros para doação.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para desenvolvimento front-end.
- **SCSS**: Pré-processador CSS para estilização.

## Funcionalidades

### Página de Livros
- Exibe uma lista de livros disponíveis.
- Cada livro contém informações como título, autor, categoria e imagem.
- Os dados são consumidos de uma API externa.

### Página de Doação
- Permite o cadastro de novos livros para doação.
- Formulário para inserir título, categoria, autor e URL da imagem do livro.
- Envia os dados para a API para registro.

## Estrutura de Componentes

- **Header**: Cabeçalho da aplicação.
- **Footer**: Rodapé da aplicação.
- **Livros**: Página para exibição de livros.
- **Doar**: Página para cadastro de novos livros.

## Como Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

## API Utilizada

A aplicação consome dados da seguinte API:
- **Base URL**: `https://bookregisterapi.onrender.com`

### Endpoints
- **GET /livros**: Retorna a lista de livros disponíveis.
- **POST /doar**: Cadastra um novo livro.

## Estilização

Os estilos são organizados em arquivos SCSS para facilitar a manutenção e reutilização de código.

