# Exame de Engenharia Web 2026 - Época Normal

Este repositório contém a resolução do exame de época normal. O projeto está dividido em dois exercícios principais, conforme solicitado no enunciado.

## Estrutura do Repositório

- `ex1/`: API de Dados sobre Jogos de Tabuleiro.
- `ex2/`: Sistema de Gestão de Leituras (Engenharia Reversa).
- `index.html`: Interface frontend para o Exercício 2.
- `index_files/`: Recursos locais (CSS/JS) para a interface.

---

## 1. Persistência de Dados e Setup

### Persistência
Para ambos os exercícios, foi utilizado o **MongoDB** como sistema de gestão de base de dados NoSQL. A interação entre as aplicações Node.js e a base de dados é feita através da biblioteca **Mongoose**, garantindo a validação de esquemas e uma manipulação de dados eficiente.

### Setup Automático (Seeding)
O setup das bases de dados é totalmente automatizado via Docker:
- No **Exercício 1**, os dados são importados para a base de dados `jogostabuleiro` na coleção `jogos` a partir do ficheiro `jogos.json`.
- No **Exercício 2**, os dados são importados para a base de dados `leituras` na coleção `livros` a partir do ficheiro `livros.json`.
- O processo é gerido por um serviço `db-seed` em cada `docker-compose.yml`, que utiliza a utilidade `mongoimport`.

---

## 2. Instruções de Execução

### Pré-requisitos
- Docker e Docker Compose instalados.

### Exercício 1: API de Jogos
1. Navega para a pasta: `cd ex1`
2. Executa: `docker compose up --build -d`
3. A API estará disponível em: `http://localhost:17000`
4. Documentação Swagger: `http://localhost:17000/api-docs`

### Exercício 2: Lista de Leituras
1. Navega para a pasta: `cd ex2`
2. Executa: `docker compose up --build -d`
3. A API (Backend) estará disponível em: `http://localhost:19020`
4. A Interface Web (Frontend) estará disponível em: `http://localhost:19021`

---

## 3. Respostas Textuais Pedidas (Exercício 1.2)

As queries MongoDB solicitadas para o Exercício 1.2 foram guardadas no ficheiro:
👉 **[ex1/queries.txt](./ex1/queries.txt)**

As questões respondidas no ficheiro são:
1. Quantos jogos estão registados na BD?
2. Quantos jogos pertencem à categoria "Family"?
3. Lista de autores ordenada alfabeticamente.
4. Distribuição de jogos por ano de lançamento.
5. Distribuição de jogos por editora.

---

## 4. Notas de Implementação

- **Exercício 1**: Implementada uma API REST completa com suporte a filtros por editora e agregações complexas para autores e categorias.
- **Exercício 2**: Backend desenvolvido por engenharia reversa para suportar todas as operações da interface Vue.js (Listagem, Pesquisa, Adição, Alteração de estado "Lido" e Remoção). O MongoDB neste exercício está configurado para não ser exposto para o exterior, cumprindo os requisitos de segurança do enunciado.
