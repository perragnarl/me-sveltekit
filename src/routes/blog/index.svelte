<script context="module">
	import { GraphQLClient, gql } from 'graphql-request';
	import queries from '$lib/queries/queries';

	export async function load() {
		const graphcms = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/ckxw5joan0l4r01yua0tn5qai/master');

		const { posts } = await graphcms.request(gql`${queries.posts}`);

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Skriverier - Per-Ragnar Lindfors</title>
</svelte:head>

{#each posts as post}
	<h2><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
	{post.body}
{/each}
