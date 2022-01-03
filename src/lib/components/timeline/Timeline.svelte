<script>
	import TimelineItem from "./TimelineItem.svelte";

	export let data;
</script>

<div class="relative">
	<span class="absolute w-1 bg-zinc-200 h-full md:left-1/2" />
	<ol>
		{#each data as item, i}
			<TimelineItem item={item} index={i} />
		{/each}
	</ol>
</div>
