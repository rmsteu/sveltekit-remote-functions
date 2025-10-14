# SvelteKit Remote Functions

This is a SvelteKit CRUD app example using:
- [Remote functions](https://svelte.dev/docs/kit/remote-functions) for type-safe communication between client and server
- [Better Auth](https://www.better-auth.com/) for authentication
- [Drizzle ORM](https://orm.drizzle.team/) for working with the SQLite database
- [Pico CSS](https://picocss.com/) for styling

## Setup

### ⬇️ Get the code

```sh
npx degit joysofcode/sveltekit-remote-functions example
```

### ⬇️ Starter

If you want to follow along with the [YouTube tutorial](https://youtu.be/Ldnmirx0QtI) use the [starter branch](https://github.com/joysofcode/sveltekit-remote-functions/tree/starter) instead:

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
