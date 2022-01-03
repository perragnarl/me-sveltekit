<script>
	import Icon from '$lib/components/icon/Icon.svelte';

	export let name;
	export let icon;
	export let iconBackground;
	export let asterisk = false;
</script>

<li class="flex items-center">
	<Icon name={icon} appearance={'mr-4 ' + iconBackground} />
	{name}
	{#if asterisk}*{/if}
</li>
