<script>
	import Icon from '$lib/components/icon/Icon.svelte';

	export let name;
	export let icon;
	export let iconBakground;
	export let asterisk = false;
</script>

<li class="flex items-center">
	<Icon name={icon} appearance={'mr-4 ' + iconBakground}></Icon>
	{name}
	{#if asterisk}*{/if}
</li>
