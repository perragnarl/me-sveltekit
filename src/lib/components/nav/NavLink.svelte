<script>
	import { page } from '$app/stores';
	export let href;
	
	$: isActive = $page.path === href;
</script>

<a href={href} class:bg-pale-green={isActive} class="py-3 px-4 font-medium uppercase text-lg">
	<slot />
</a>
