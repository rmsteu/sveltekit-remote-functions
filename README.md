# SvelteKit Remote Functions

This is a SvelteKit [remote functions](https://svelte.dev/docs/kit/remote-functions) example using [Better Auth](https://www.better-auth.com/) for authentication and [Drizzle ORM](https://orm.drizzle.team/) for working with the database.

## Setup

### ⬇️ Get the code

```sh
npx degit joysofcode/sveltekit-remote-functions example
```

If you're following along with the tutorial:

```sh
npx degit joysofcode/sveltekit-remote-functions#starter example
```

### ✏️ Rename .env.example

```sh
mv .env.example .env
```

### 📦️ Install dependencies

```sh
npm i
```

### Create tables from Drizzle schema

```sh
npm run db:push
```

### 🧑‍💻 Start the development server

```sh
npm run dev
```
