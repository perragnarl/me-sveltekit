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
	export let post;

	const formattedDate = () => {
		let date = new Date(post.createdAt);
		return date.toLocaleDateString('sv-SE');
	};
</script>

<h1>{post.title}</h1>
<time date={formattedDate()} class="mb-4 text-lg block">
	{formattedDate()}
</time>
<div>
	{@html post.body.html}
</div>