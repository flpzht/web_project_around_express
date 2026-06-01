# Around the U.S. Express API

API RESTful desenvolvida com Node.js, Express e MongoDB para o projeto Around the U.S. (EUA Afora). A aplicação fornece endpoints para gerenciamento de usuários e cards, utilizando Mongoose para modelagem de dados e persistência no banco de dados.

## Funcionalidades

### Usuários

* Listagem de todos os usuários
* Busca de usuário por ID
* Criação de usuários
* Validação de dados de entrada
* Validação de URLs para avatar

### Cards

* Listagem de todos os cards
* Criação de cards
* Exclusão de cards
* Relacionamento entre cards e usuários através de ObjectId
* Preenchimento automático de referências com populate()

### Tratamento de Erros

* 400 — Dados inválidos
* 404 — Recurso não encontrado
* 500 — Erro interno do servidor

## Tecnologias

* Node.js
* Express
* MongoDB
* Mongoose
* Nodemon

## Estrutura do Projeto

```text
web_project_around_express/
├── app.js
├── package.json
├── controllers/
│   ├── users.js
│   └── cards.js
├── models/
│   ├── user.js
│   └── card.js
├── routes/
│   ├── users.js
│   └── cards.js
└── utils/
    └── errors.js
```

## Banco de Dados

A aplicação utiliza MongoDB local.

```javascript
mongoose.connect('mongodb://localhost:27017/aroundb');
```

Banco utilizado:

```text
aroundb
```

## Modelos

### User

| Campo  | Tipo   | Regras                         |
| ------ | ------ | ------------------------------ |
| name   | String | obrigatório, 2 a 30 caracteres |
| about  | String | obrigatório, 2 a 30 caracteres |
| avatar | String | obrigatório, URL válida        |

### Card

| Campo     | Tipo       | Regras                         |
| --------- | ---------- | ------------------------------ |
| name      | String     | obrigatório, 2 a 30 caracteres |
| link      | String     | obrigatório, URL válida        |
| owner     | ObjectId   | obrigatório                    |
| likes     | ObjectId[] | padrão: []                     |
| createdAt | Date       | padrão: Date.now               |

## Rotas

### Usuários

| Método | Endpoint   | Descrição               |
| ------ | ---------- | ----------------------- |
| GET    | /users     | Lista todos os usuários |
| GET    | /users/:id | Busca usuário por ID    |
| POST   | /users     | Cria um novo usuário    |

### Cards

| Método | Endpoint   | Descrição            |
| ------ | ---------- | -------------------- |
| GET    | /cards     | Lista todos os cards |
| POST   | /cards     | Cria um novo card    |
| DELETE | /cards/:id | Remove um card       |

## Exemplos de Requisição

### Criar Usuário

POST /users

```json
{
  "name": "Felipe",
  "about": "Desenvolvedor",
  "avatar": "https://site.com/avatar.jpg"
}
```

Resposta:

```json
{
  "data": {
    "_id": "68387f...",
    "name": "Felipe",
    "about": "Desenvolvedor",
    "avatar": "https://site.com/avatar.jpg"
  }
}
```

Status:

```http
201 Created
```

## Instalação

### Clone o repositório

```bash
git clone <url-do-repositorio>
cd web_project_around_express
```

### Instale as dependências

```bash
npm install
```

### Inicie o MongoDB

Certifique-se de que o serviço MongoDB esteja em execução localmente na porta padrão 27017.

### Inicie a aplicação

Modo produção:

```bash
npm start
```

Modo desenvolvimento:

```bash
npm run dev
```

Servidor disponível em:

```text
http://localhost:3000
```

## Respostas de Erro

### Dados inválidos

```json
{
  "message": "Invalid user data"
}
```

Status:

```http
400 Bad Request
```

### Recurso não encontrado

```json
{
  "message": "User not found"
}
```

Status:

```http
404 Not Found
```

### Erro interno

```json
{
  "message": "Internal server error"
}
```

Status:

```http
500 Internal Server Error
```
