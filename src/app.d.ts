declare namespace App {
	interface Locals {
		user: import("$lib/typings/server/user").User | null;
	}
	interface PageData {
		title?: string;
	}
	interface Error {
		override?: boolean;
	}
	// interface Platform {}
}

declare module '*.svg?component' {
	const content: ConstructorOfATypedSvelteComponent
	export default content
}

declare module '*.svg?src' {
	const content: string
	export default content
}

declare module '*.svg?url' {
	const content: string
	export default content
}

declare module '*.svg?dataurl' {
	const content: string
	export default content
}