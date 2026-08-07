# Arquitetura do RoutineOS

## Visão geral

O RoutineOS será desenvolvido utilizando uma arquitetura separando frontend, backend e banco de dados.

## Componentes

### Frontend

Responsável pela interface e interação com o usuário.

Tecnologias previstas:

- React
- Vite
- Tailwind CSS

### Backend

Responsável pelas regras de negócio e API.

Tecnologias previstas:

- Node.js
- Express
- Prisma
- Zod

### Banco de dados

- PostgreSQL

## Fluxo

Frontend
↓
API REST
↓
Backend
↓
Prisma
↓
PostgreSQL
