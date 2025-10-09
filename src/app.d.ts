import type { Session, User } from '$lib/server/database/schema'

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			session?: Session
			user?: User
		}
	}
}

export {}
