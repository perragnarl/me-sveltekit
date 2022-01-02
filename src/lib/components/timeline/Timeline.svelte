<script>
	export let data;
</script>

<ol>
	{#each data as item}
		<li>
			<h3>{item.attributes.title}</h3>
			<p>{item.attributes.subtitle}</p>
			<time datetime="{`${item.attributes.from}/${item.attributes.until}`}">
				{item.attributes.from} - {item.attributes.until}
			</time>
		</li>
	{/each}
</ol>
