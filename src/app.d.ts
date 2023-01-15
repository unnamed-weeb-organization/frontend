/// <reference types="@sveltejs/kit" />
import type { LocalsUser } from "$lib/typings/client/locals";
import type { Name } from "/typings/server/general";
import type { HTTPCode } from "/constants";

declare global {
	namespace App {
		interface Locals {
			user?: LocalsUser;
		}
		interface PageData {
			title?: string | (string | Name)[];
			status?: HTTPCode;
		}
		interface Error {
			useDefault?: boolean;
			message?: string;
		}
		interface Session {
			token?: string;
		}
		// interface Platform {}
	}

	declare module "*.svg?component" {
		const content: ConstructorOfATypedSvelteComponent;
		export default content;
	}

	declare module "*.svg?src" {
		const content: string;
		export default content;
	}

	declare module "*.svg?url" {
		const content: string;
		export default content;
	}

	declare module "*.svg?dataurl" {
		const content: string;
		export default content;
	}
}
