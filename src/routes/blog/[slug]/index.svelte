<script context="module">
	import { GraphQLClient, gql } from 'graphql-request';

	export async function load({ page }) {
		const slug = page.params.slug;
		const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_API);

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