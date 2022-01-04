<script context="module">
	import { GraphQLClient } from 'graphql-request';
	import { getPosts } from '$lib/queries/queries';

	export async function load() {
		const graphcms = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/ckxw5joan0l4r01yua0tn5qai/master');

		const { posts } = await graphcms.request(getPosts());

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import formattedDate from '$lib/utils/formattedDate';
	import PostTeaser from "$lib/components/post-teaser/PostTeaser.svelte";

	export let posts;
</script>

<svelte:head>
	<title>Skriverier - Per-Ragnar Lindfors</title>
</svelte:head>

<div class="max-w-4xl mx-auto">	
	{#each posts as post}
		<PostTeaser slug={post.slug} title={post.title} createdAt={formattedDate(post.createdAt)}>
			{post.intro}
		</PostTeaser>
	{/each}
</div>
