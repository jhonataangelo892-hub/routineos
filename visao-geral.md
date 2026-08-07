# 🎯 RoutineOS — Visão Geral

&gt; **Sistema de Produtividade Pessoal e Gerenciamento de Rotina**

---

## 📋 O que é o RoutineOS?

O **RoutineOS** é uma aplicação web que combina a flexibilidade visual do Notion com ferramentas especializadas de produtividade pessoal. O objetivo é centralizar projetos, tarefas, notas, calendário e controle de expediente em um único lugar.

---

## 🚀 Status do Projeto

| Fase | Status | Previsão |
|------|--------|----------|
| 📄 Documentação | ✅ Concluído | Agosto/2026 |
| 🏗️ Setup do ambiente | 🚧 Em andamento | Agosto/2026 |
| 🔐 Autenticação | ⏳ Pendente | Setembro/2026 |
| 📊 Dashboard | ⏳ Pendente | Setembro/2026 |
| 📁 Projetos & Tarefas | ⏳ Pendente | Outubro/2026 |
| 📅 Calendário | ⏳ Pendente | Outubro/2026 |
| ⏱️ Expediente | ⏳ Pendente | Novembro/2026 |
| 📈 Estatísticas | ⏳ Pendente | Novembro/2026 |

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** — Interface declarativa
- **Vite** — Build tool ultrarrápido
- **Tailwind CSS** — Estilização utility-first
- **React Router v6** — Navegação
- **Zustand** — State management
- **React Query** — Data fetching

### Backend
- **Node.js 20 LTS** — Runtime
- **Express.js** — Framework web
- **Prisma ORM** — Acesso ao banco type-safe
- **PostgreSQL** — Banco relacional
- **JWT** — Autenticação stateless
- **bcrypt** — Hash de senhas

### Infraestrutura
- **Docker** — Containerização
- **GitHub Codespaces** — Ambiente de desenvolvimento
- **GitHub Actions** — CI/CD (futuro)

---

## 🏗️ Arquitetura

**Padrão:** Arquitetura em camadas — Frontend → API → Services → Repositories → ORM → Banco

---

## 📁 Estrutura do Repositório


---

## 🎯 Funcionalidades Principais

| Módulo | Descrição |
|--------|-----------|
| **🔐 Autenticação** | Login, cadastro, recuperação de senha com JWT |
| **📊 Dashboard** | Visão consolidada do dia com widgets customizáveis |
| **📁 Projetos** | Organização em Kanban, Lista e Timeline |
| **✅ Tarefas** | Prioridades, subtarefas, recorrência, anexos |
| **📝 Notas** | Editor em blocos com hierarquia infinita |
| **📅 Calendário** | Visualizações mensal/semanal/diária com drag-and-drop |
| **⏱️ Expediente** | Timer nativo, modo Pomodoro, relatórios de tempo |
| **📈 Estatísticas** | Heatmap, streaks, metas e insights de produtividade |
| **🔔 Notificações** | Lembretes de prazo e metas atingidas |

---

## 📄 Documentação Completa

A especificação técnica completa do projeto está disponível em:

📎 [`docs/Especificacao_RoutineOS_v1.0.pdf`](./Especificacao_RoutineOS_v1.0.pdf)

> Inclui: requisitos, arquitetura, modelagem de banco de dados, API REST, regras de negócio, wireframes, roadmap e segurança.

---

## 🚀 Como rodar localmente

*(Em breve — ambiente de desenvolvimento em configuração)*

---

## 🤝 Contribuição

Este é um projeto pessoal em desenvolvimento ativo. Feedbacks e sugestões são bem-vindos via [Issues](../../issues).

---

## 📝 Licença

Este projeto está licenciado sob a [MIT License](../LICENSE).
