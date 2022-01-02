<script>
	export let value;
	export let type;

	const url = type === 'mail' ? `mailto:${value}` : `tel:${value}`;
</script>

<a href={url} class="bg-charcoal py-2 px-3 hover:bg-blue-400 text-beige text-right inline-block text-xl font-medium">
	{value}
</a>
