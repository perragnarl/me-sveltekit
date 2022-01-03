<script>
	export let slug;
	export let title;
	export let createdAt;

	const formattedDate = () => {
		let date = new Date(createdAt);
		return date.toLocaleDateString('sv-SE');
	};
</script>

<article class="mb-16">
	<h2 class="mb-2">
		<a href="/blog/{slug}">
			{title}
		</a>
	</h2>
	<time date={formattedDate()} class="mb-4 text-lg block">
		{formattedDate()}
	</time>
	<div>
		<slot />
	</div>
</article>
