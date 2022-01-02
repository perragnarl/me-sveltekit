<script>
	import { page } from '$app/stores';
	$: isActive = $page.path === $$props.href;
</script>

<a {...$$props} class:active={isActive} class="py-3 px-4">
	<slot />
</a>

<style lang="postcss">
	.active {
		@apply bg-pale-green;
	}
</style>
