# 🧩 Nuxt + Shadcn-vue + TailwindCSS + Supabase Starter

This repository is a reference implementation maintained by the VueNuxt Hub team. It demonstrates how to build scalable Nuxt 3 applications using:

- 🧪 **Nuxt 3**
- 💨 **TailwindCSS**
- 🧱 **Shadcn-vue**
- 🔐 **Supabase** (for backend, auth, DB)
- 🌱 **FakerJS** for seeding fake data

This project is ideal for anyone looking to start a full-featured Nuxt application with modern tooling already wired up.

---

## 📦 Project Installation

```bash
git clone https://github.com/your-username/vue-nuxt-hub-starter.git
cd vue-nuxt-hub-starter
npm install
```

## 💡 Setup Shadcn-vue in Nuxt

[reference](https://www.shadcn-vue.com/docs/installation/nuxt)

### 🪄 1. Add TailwindCSS

This project already includes TailwindCSS (tailwindcss, @tailwindcss/vite) via Nuxt modules. No extra steps needed.

### ⚙️ 2. Run Nuxt Prepare

Required to set up auto-imports and prepare components.

```bash
npm run postinstall
```

### 🧩 3. Initialize Shadcn-vue

```bash
npm run shadcn-init
```

You will be prompted to select your preferred UI options and base directory.

### 🧱 4. Add UI Components

```bash
npm run create:component card,badge,button
```

This scaffolds essential UI components used across the app.

## 🔐 Supabase Integration

[reference](https://vueschool.io/articles/vuejs-tutorials/how-to-create-supabase-database-migration-files-in-vue-js/)

### ✅ 1. Install Supabase CLI (locally)

```bash
npm install -g supabase --save-dev
```

### ⚙️ 2. Initialize Supabase

```bash
npm run supabase:init
```

This sets up the supabase/config.toml and initializes the local project.

````bash
Generate VS Code settings for Deno? [y/N] n
Generate IntelliJ Settings for Deno? [y/N] n
``

### 🔐 3. Login to Supabase
```bash
npm run supabase:login
````

This logs you into your Supabase account via CLI.

### 🛠️ .env File Setup

Before linking your Supabase project, create a .env file in the root of your project and add the following:

```bash
SUPABASE_PROJECT_ID=your-project-id
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

> 🗒️ Make sure to use your actual project values from the Supabase dashboard. These will be used by the Supabase client and CLI scripts.

### 🔗 4. Link Local Project to Remote Supabase

```bash
npm run supabase:link
```

This securely links your local folder to the correct remote Supabase project using SUPABASE_PROJECT_ID from your .env.

You have to enter database password kept to Supabase project.

## 🧱 Database Schema & Migration

### ✍️ 1. Create a New Migration File

```bash
npm run db:migrate:new projects-schema
```

This generates a new SQL migration file in supabase/migrations/.

Paste the below schema to `supabase/migrations/projects-schema.sql`

```sql
DROP table if exists projects;

create table
  projects (
    id bigint primary key generated always as identity not null,
    created_at timestamptz default now() not null,
    name text not null,
    slug text unique not null,
    collaborators text array default array[]::varchar[] not null
  );
```

### 🚀 2. Apply the Migration (Reset)

Check for `seed.sql` file present in supabase folder, if not create a `seed.sql` file

```bash
npm run db:reset
```

⚠️ This will wipe and recreate your Supabase database schema based on your latest migrations.

## 🌱 Seeder Setup

### 📦 1. Install Faker.js

Faker.js is used to generate fake project names, slugs, and collaborator emails for testing purposes.

```bash
npm install @faker-js/faker --save-dev
```

### 🧬 2. Seed the `projects` Table

After setting up your database schema and running migrations, you can populate it with fake data:

```bash
npm run db:seed
```

This runs the `database/seed.js` script, which connects to Supabase and inserts random data into the `projects` table using Faker.js.

## 🧾 Generate Supabase Types

Automatically generate TypeScript types from your Supabase schema for safer DB queries and autocompletion.

### ✅ 1. Ensure your `.env` includes the following:

```bash
SUPABASE_PROJECT_ID=your-project-id
```

This will be used by the `supabase:types` script to fetch your remote schema.

### 🛠️ 2. Run the Type Generation Script

```bash
npm run supabase:types
```

This command will:

- Connect to your Supabase project using the CLI
- Generate TypeScript types for all public tables
- Output them to: database/types.ts

```bash
// Example output in types.ts

export type Json = string | number | boolean | null | ...
export interface Database {
  public: {
    Tables: {
      projects: { ... }
    }
  }
}
```

> 🎯 Use these types across your project to get autocomplete + safety when using Supabase queries.

## 🧪 Scripts Reference

Here’s a quick look at the main scripts (defined in `package.json`):
| Script | Description |
| -------------------------- | --------------------------------- |
| `npm run dev` | Start local dev server |
| `npm run build` | Build Nuxt for production |
| `npm run shadcn-init` | Initialize Shadcn-vue |
| `npm run create:component` | Add UI components |
| `npm run supabase:init` | Init Supabase project config |
| `npm run supabase:link` | Link to remote Supabase project |
| `npm run supabase:types` | Generate TypeScript types from DB |
| `npm run db:migrate:new` | Create new migration file |
| `npm run db:reset` | Rebuild DB schema from migrations |
| `npm run db:seed` | Insert fake project data |

## 📁 Tech Stack

- Nuxt 3 + Vue 3
- Supabase (PostgreSQL + Auth)
- TailwindCSS
- Shadcn-vue UI Library
- FakerJS for database seeding

## 💬 Maintained by VueNuxt Hub

This project is part of the VueNuxt Hub ecosystem – a central place for Nuxt/Vue developers to explore high-quality resources, guides, and starter kits.

If you find this helpful, star ⭐ the repo and share your feedback!

---

## 🤝 Contributing

Want to improve this starter? Fix a bug or add a feature?  
Feel free to open an issue or submit a pull request!

---

## 🔗 Connect with VueNuxt Hub

Follow [VueNuxt Hub on LinkedIn](https://www.linkedin.com/company/vuenuxt-hub) for updates, releases, and community tips.
