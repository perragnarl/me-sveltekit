<script context="module">
	import { GraphQLClient } from 'graphql-request';
	import { getPost } from '$lib/queries/queries';

	export async function load({ page }) {
		const slug = page.params.slug;
		const graphcms = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/ckxw5joan0l4r01yua0tn5qai/master');

		const { post } = await graphcms.request(getPost(slug));

		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	import formattedDate from '$lib/utils/formattedDate';
	
	export let post;
</script>

<svelte:head>
	<title>{post.title} - Per-Ragnar Lindfors</title>
</svelte:head>

<article class="max-w-4xl mx-auto">	
	<h1>{post.title}</h1>
	<time date={formattedDate(post.createdAt)} class="mb-4 text-lg block">
		{formattedDate(post.createdAt)}
	</time>
	<div>
		{@html post.body.html}
	</div>
</article>

<style lang="postcss">
	ul {
		@apply ml-4;
	}
	li {
		@apply list-disc;
	}
</style>