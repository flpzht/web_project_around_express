# # Around the U.S._express

API RESTful construída com Node.js e Express, desenvolvida como back-end do projeto "EUA Afora". Serve dados de usuários e cards a partir de arquivos JSON locais, como solução temporária antes da integração com banco de dados.

## Funcionalidades

- Listagem de todos os usuários
- Busca de usuário por ID
- Listagem de todos os cards
- Respostas de erro padronizadas em JSON para rotas inexistentes e IDs não encontrados

## Rotas

| Método | Endpoint | Descrição | Resposta de erro |
|--------|----------|-----------|-----------------|
| GET | `/users` | Retorna todos os usuários | — |
| GET | `/users/:id` | Retorna um usuário pelo ID | `404` se ID não encontrado |
| GET | `/cards` | Retorna todos os cards | — |
| qualquer | `*` | Rota não mapeada | `404` sempre |

## Tecnologias

- Node.js
- Express
- Módulo `fs` (leitura de arquivos JSON)
- Módulo `path` (caminhos de arquivo multiplataforma)

## Estrutura do Projeto

```
web_project_around_express/
├── app.js
├── package.json
├── routes/
│   ├── users.js
│   └── cards.js
└── data/
    ├── users.json
    └── cards.json
```

## Como rodar localmente

**Pré-requisitos:** Node.js instalado.

```bash
# Clone o repositório
git clone <url-do-repositório>
cd web_project_around_express

# Instale as dependências
npm install

# Inicie o servidor
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## Exemplos de uso

```bash
# Listar todos os usuários
GET http://localhost:3000/users

# Buscar usuário por ID
GET http://localhost:3000/users/8340d0ec33270a25f2413b69

# Listar todos os cards
GET http://localhost:3000/cards
```
