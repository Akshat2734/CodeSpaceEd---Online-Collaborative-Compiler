
# 🚀 CodeSpaceEd - Online Collaborative Compiler

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Convex-FF6B6B" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?logo=clerk&logoColor=white" />
  <img src="https://img.shields.io/badge/Zustand-593D88" />
  <img src="https://img.shields.io/badge/Monaco-007ACC?logo=visualstudiocode" />
  <img src="https://img.shields.io/badge/Piston_API-2C3E50" />
  <img src="https://img.shields.io/badge/Lemon_Squeezy-FFB800" />
</p>

---

## 📖 Overview

**CodeSpaceEd** is a modern cloud-based collaborative coding platform that enables developers to write, execute, and share code directly from the browser.

It combines a VS Code–like editing experience with real-time backend synchronization, premium subscriptions, community snippet sharing, and secure cloud execution powered by the **Piston API**.

---

## 🌟 Core Features
* **Multi-Language Code Execution:** Integrates the Piston API to compile and execute languages including Python, JavaScript, TypeScript, C++, Java, Rust, and Go directly from the browser.
* **Advanced Editor Interface:** Utilizes the Monaco Editor (`@monaco-editor/react`) to provide a VS Code-like experience with syntax highlighting, autocomplete, and customizable themes.
* **Community Snippet Sharing:** Users can publish their code, view snippets from others, leave comments, and star their favorite scripts in a dedicated community hub.
* **Premium Subscriptions:** Features a "Pro" tier integrated with Lemon Squeezy, allowing users to unlock premium functionalities via secure webhook-based payment verification.

## 🚀 Scalability & Backend Architecture
* **Convex Backend-as-a-Service:** Replaces a traditional REST API and database with Convex, providing real-time data synchronization, ACID-compliant transactions, and strict schema validation.
* **Clerk Authentication:** Offloads identity management to Clerk, seamlessly syncing user sessions with the Convex database using JWTs and webhook events.
* **Zustand State Management:** Handles complex client-side states (active language, theme selection, output results, and execution loading states) without unnecessary React re-renders.
* **HTTP Webhook Endpoints:** Convex exposes HTTP routes to securely catch async webhooks from external services like Lemon Squeezy to upgrade user profiles instantly.

---

# 🛠 Tech Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | Next.js 15, React, TypeScript |
| Styling | Tailwind CSS |
| State Management | Zustand |
| Editor | Monaco Editor |
| Authentication | Clerk |
| Backend | Convex |
| Database | Convex Database |
| Code Execution | Piston API |
| Billing | Lemon Squeezy |
| Deployment | Vercel |

---

# 🏗 High Level Architecture

```mermaid
graph TD

    User((User))

    User --> NextJS[Next.js Frontend]

    NextJS --> Clerk[Clerk Authentication]

    NextJS --> Zustand[Zustand Store]

    Zustand --> Monaco[Monaco Editor]

    Zustand --> Piston[Piston API]

    NextJS --> Convex[(Convex)]

    Clerk --> Convex

    NextJS --> Lemon[Lemon Squeezy]

    Lemon --> Webhook[Convex HTTP Webhook]

    Webhook --> Convex
```

---

# 🔄 Request Lifecycle

```mermaid
sequenceDiagram

participant User
participant Monaco
participant Zustand
participant Piston
participant Convex

User->>Monaco: Write Code

User->>Zustand: Click Run

Zustand->>Piston: POST Code + Language

Piston-->>Zustand: Output / Error

Zustand-->>Monaco: Display Result

Zustand->>Convex: Save Execution Log

Convex-->>User: Update History
```

---

# 🏛 System Components

```mermaid
graph LR

Frontend --> Editor

Frontend --> Authentication

Frontend --> Community

Frontend --> Billing

Editor --> Monaco

Authentication --> Clerk

Community --> Convex

Billing --> Lemon

Editor --> Piston
```

---

# 🗂 Folder Structure

```text
CodeSpaceEd
│
├── app
├── components
├── convex
├── hooks
├── lib
├── providers
├── store
├── public
├── styles
├── types
├── utils
└── middleware.ts
```

---

# 🔄 Code Execution Flow

```mermaid
flowchart LR

A[User Writes Code]

--> B[Monaco Editor]

--> C[Run Button]

--> D[Zustand Store]

--> E[Piston API]

--> F[Compile & Execute]

--> G[Output]

--> H[Save History]

--> I[Convex Database]

--> J[Execution History]
```

---

# 💳 Subscription Flow

```mermaid
sequenceDiagram

participant User

participant Frontend

participant Lemon

participant Convex

User->>Frontend: Upgrade to Pro

Frontend->>Lemon: Checkout

Lemon-->>User: Payment

Lemon->>Convex: Webhook

Convex->>Convex: Verify Signature

Convex->>Convex: Update User

Convex-->>Frontend: User is Pro
```

---

# 🔐 Authentication Flow

```mermaid
flowchart TD
    A([User])
    B[Clerk Login]
    C[JWT Token]
    D[Next.js]
    E[Convex]
    F[Authenticated User]
    G[Application]

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
```
---

# 🌍 Infrastructure

```mermaid
graph TD
    A([Browser])
    B[Vercel]
    C[Next.js App]
    D[(Convex)]
    E[Piston API]
    F[Clerk]
    G[Lemon Squeezy]
    H[Convex Webhook]

    A --> B
    B --> C
    C --> D
    C --> E
    C --> F
    C --> G
    G --> H
    H --> D
```

---

# ⚡ State Management

The application uses **Zustand** to manage

- Current Language
- Theme
- Font Size
- Code
- Console Output
- Loading State
- Execution Status
- User Preferences

---

# 🔒 Security

- Clerk Authentication
- JWT Validation
- Protected Convex Mutations
- Secure Lemon Squeezy Webhooks
- Sandboxed Code Execution
- Strict Database Schema Validation

---

# 📈 Scalability

The application is designed to scale horizontally.

- Stateless Next.js Frontend
- Real-time Convex Backend
- External Sandboxed Code Execution
- Event-driven Webhooks
- CDN-backed Asset Delivery
- Automatic Vercel Scaling
- Optimistic UI Updates
- ACID Transactions
- WebSocket Synchronization

---

# 🚀 Future Improvements

- Live Collaborative Coding
- Pair Programming
- Video Calling
- AI Code Assistant
- Code Review Suggestions
- Container-based Execution
- Team Workspaces
- Project Management
- Version Control
- Custom Themes

---

# 👨‍💻 Author

**Akshat Midha**

Built with ❤️ using

Next.js • React • TypeScript • Convex • Clerk • Monaco Editor • Zustand • Piston API • Lemon Squeezy

