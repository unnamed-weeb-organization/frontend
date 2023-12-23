// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			useDefault?: boolean;
			message?: string;
		}

		interface Locals {
			user?: LocalsUser;
		}

		interface PageData {
			title?: string | (string | Name)[];
			status?: HTTPCode;
		}

		interface Session {
			token?: string;
		}

		// interface PageState {}
		// interface Platform {}
	}
}

export {};
