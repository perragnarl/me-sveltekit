<script context="module">
	import { GraphQLClient, gql } from 'graphql-request';

	export async function load() {
		const graphcms = new GraphQLClient(
			'https://api-eu-central-1.graphcms.com/v2/ckxw5joan0l4r01yua0tn5qai/master'
		);

		const GETPOSTS = gql`
			{
				posts {
					title
					body
					createdAt
				}
			}
		`;

		const { posts } = await graphcms.request(GETPOSTS);

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
