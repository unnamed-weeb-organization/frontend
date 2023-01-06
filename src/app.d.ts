declare namespace App {
	interface Locals {
		user: import("$lib/typings/server/user").User | null;
	}
	interface PageData {
		title?: string | (string | import("$lib/typings/server/general").Name)[];
	}
	interface Error {
		useDefault?: boolean;
		message?: string;
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
