# 🫧 Intent API

Intent API é uma API simples desenvolvida em Node.js + TypeScript utilizando Fastify, criada para registrar e gerenciar intents (intenções de ação) enviadas por dispositivos ou aplicações externas. A proposta do projeto é funcionar como uma camada intermediária onde sistemas podem enviar ações, acompanhar o status dessas ações e consultar essas informações posteriormente.

A API permite criar intents, listar intents existentes, buscar intents específicas e atualizar o status delas. Cada intent registra informações importantes como qual dispositivo enviou a ação, qual ação foi solicitada, qual recurso será utilizado e qual o status atual da execução.

# Funcionalidades

Criação de intents através de requisições HTTP.
Listagem de todas as intents registradas.
Busca de intents por ID.
Atualização do status de uma intent.
Endpoint de verificação para saber se a API está online.

# Os status disponíveis atualmente são:

- "PENDING"
- "ACK"
- "DONE"
- "FAILED"

# Cada intent registrada possui os seguintes campos:

- "id"
- "deviceId"
- "action"
- "resource"
- "status"
- "createdAt"

# Estrutura do Projeto

O projeto foi organizado de forma simples para facilitar manutenção e desenvolvimento futuro.

src
 ├── config
 ├── controllers
 ├── models
 ├── plugins
 ├── routes
 ├── services
 ├── store
 ├── utils
 ├── app.ts
 └── index.ts

Controllers recebem as requisições da API.
Services concentram a lógica principal do sistema.
Routes definem os endpoints da aplicação.
Models definem as estruturas de dados utilizadas.
Store mantém o armazenamento temporário das intents.
Plugins adicionam funcionalidades extras como autenticação.

Endpoints

# Status da API:

GET /
GET /health

# Gerenciamento de intents:

POST /intents
GET /intents
GET /intents/:id
PATCH /intents/:id/status

# Tecnologias utilizadas

- Node.js
- TypeScript
- Fastify
- ts-node-dev

# Observação

Atualmente as intents são armazenadas apenas em memória, ou seja, ao reiniciar o servidor todos os dados são perdidos. O projeto foi desenvolvido como base ou protótipo e pode evoluir futuramente para utilizar bancos de dados como SQLite, PostgreSQL ou Redis.

# Objetivo do Projeto

A proposta dessa API é servir como um gerenciador de ações entre dispositivos e sistemas, podendo ser utilizada em automações, bots, integrações com aplicações externas ou qualquer sistema que precise registrar e acompanhar ações enviadas para um servidor.
