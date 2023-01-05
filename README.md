# unnamed_weeb_music_database/frontend

SvelteKit frontend for the [`unnamed_weeb_music_database/backend`](https://github.com/unnamed-weeb-organization/database)

## Getting Started

-   `pnpm install` to install dependencies.
-   `pnpm dev` to start the dev server.

## Notes

1. Tailwind's `dark:` modifier doesn't work inside svelte's `<script>` tags, as these classes are scope. However, as workarounds, you can either use `dark:` directly in the `class=` property, or wrap the `.dark` class within svelte's `:global()` specifier.  

## Acknowledgements

1. Bootstrapped with [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte)

2. Icons listed under [this](./src/lib/assets/icons) directory are part of [Unicons'](**https://iconscout.com/contributors/unicons/icons) [Line Icon Collection](https://iconscout.com/contributors/unicons/icons/unicons-line)

3. Logos listed under [this](./src/lib/assets/logos) directory are under [Public Domain](https://en.wikipedia.org/wiki/Public_domain), as per their listings in respective wikimedia pages. Exceptions are listed below:
    1. Twitter logo is licensed under [Apache License 2.0](https://github.com/twitter/opensource-website/blob/main/LICENSE)

## License

This repository is licensed under [GPL3](./LICENSE.md).
