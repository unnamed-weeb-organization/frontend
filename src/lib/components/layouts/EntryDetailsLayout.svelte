<div class="flex flex-col md:flex-row w-full py-6 overflow-y-auto">
	<div class="details_container">
		<div class="info_container">
			<slot name="info_container" />
		</div>
		<div class="column_container">
			<slot name="column_container" />
		</div>
	</div>

	<div class="flex flex-col w-full px-4 mt-8 gap-4 md:px-0 md:mt-0 xl:contents">
		<slot />
	</div>
</div>

<style lang="postcss">
	.details_container {
		@apply z-10 flex flex-col md:w-fit md:px-8;
	}

	.info_container {
		@apply flex flex-col items-center gap-4 md:items-start;
	}

	.column_container {
		@apply grid grid-cols-2 md:grid-cols-1 gap-4
        justify-items-center text-center md:justify-items-start md:text-start
        mt-8;
	}
</style>
