<script>
	import Icon from '$lib/components/icon/Icon.svelte';

	export let name,
		icon,
		asterisk = false;
</script>

<li class="flex items-center">
	<Icon extraClass="mr-3">{@html icon}</Icon>
	{name}
	{#if asterisk}*{/if}
</li>
