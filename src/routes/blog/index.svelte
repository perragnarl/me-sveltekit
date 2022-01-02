<script context="module">
	import { GraphQLClient, gql } from 'graphql-request';
	import queries from '$lib/queries/queries';

	export async function load() {
		const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_API);

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
	<h2>{post.title}</h2>
	{post.body}
{/each}
