<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

<h3 align="center">Real Time Documents</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

A real-time document collaboration platform that lets users effortlessly create, edit, and share documents. Built with the latest Next.js 15, TypeScript, TailwindCSS, Convex, Clerk & LiveBlocks.

Credits: [Antonio Erdeljac](https://github.com/AntonioErdeljac)

## <a name="tech-stack">⚙️ Tech Stack</a>

- React 19
- Next.js 15
- Convex
- TailwindCSS
- ShadCN
- TypeScript

## <a name="features">🔋 Features</a>

👉 **User Authentication with Clerk**

👉 **Real-Time Collaboration**

👉 **View and Manage Files**

👉 **Download Files**

👉 **File Sharing**

👉 **Dashboard**

👉 **Global Search**

👉 **User Oraganization**

👉 **Modern Responsive Design**

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [pnpm](https://www.pnpm.io/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/nayak-nirmalya/real-time-docs.git
cd real-time-docs
```

**Installation**

Install the project dependencies using npm:

```bash
pnpm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
CONVEX_DEPLOYMENT=""
CLERK_SECRET_KEY=""
LIVEBLOCKS_SECRET_KEY=""
NEXT_PUBLIC_LIVEBLOCKS_KEY=""
NEXT_PUBLIC_CONVEX_URL=""
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
```

Replace the values with your actual credentials. You can obtain these credentials by signing up &
creating a new project on [Convex](https://www.convex.dev/), [Clerk](https://clerk.com/) & [LiveBlocks](https://liveblocks.io/).

**Running the Project**

```bash
pnpm "/^dev:.*/"
```

OR

```bash
pnpm dev:next
pnpm dev:convex
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

#
