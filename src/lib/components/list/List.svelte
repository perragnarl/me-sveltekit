<script>
	import ListItem from "./ListItem.svelte";

	export let data;
	export let iconBackground;
</script>

<ul class="grid grid-cols-3 flex-wrap gap-x-4 gap-y-7">
	{#each data as item}
		<ListItem
			name={item.name}
			icon={item.icon}
			asterisk={item.asterisk}
			iconBackground={iconBackground}
		/>		
	{/each}
</ul>