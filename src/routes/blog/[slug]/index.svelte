<script context="module">
	import { GraphQLClient, gql } from 'graphql-request';

	export async function load({ page }) {
		const slug = page.params.slug;
		const graphcms = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/ckxw5joan0l4r01yua0tn5qai/master');

		const { post } = await graphcms.request(gql`
			{
				post(where: {slug: "${slug}"}) {
				title
				body
				createdAt
				}
			}
		`);

		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	export let post;
</script>

<h1>{post.title}</h1>
<div>
	{post.body}
</div>