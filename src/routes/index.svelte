<script context="module">
	import { GraphQLClient, gql } from 'graphql-request';
	import queries from '$lib/queries/queries';

	export async function load() {
		const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_API);

		const skills = await graphcms.request(gql`${queries.skills}`);
		const languages = await graphcms.request(gql`${queries.languages}`);

		return {
			props: {
				skills: skills.listItems,
				languages: languages.listItems
			}
		};
	}
</script>

<script>
	import List from '$lib/components/list/List.svelte';

	export let skills;
	export let languages;
</script>

<svelte:head>
	<title>Resumé - Per-Ragnar Lindfors</title>
</svelte:head>

<!-- <section id="about">
	<Article title={home.attributes.aboutTitle}>
		{@html aboutBody}
	</Article>
</section> -->

<section id="skills">
	<h2>Mjukvara</h2>
	<List data={skills} iconBackground="bg-pale-red"/>
</section>

<!-- <section id="methods">
	<h2>Utvecklingsmestoder</h2>
	<List data={methods} />
</section> -->

<!-- <section id="experiences">
	<h2>Erfarenhet</h2>
	<Timeline data={experiences} />
</section> -->

<section id="languages">
	<h2>Språk</h2>
	<List data={languages} iconBackground="bg-pale-green" />
</section>

<!-- <section id="interests">
	<h2>Intressen</h2>
	<List data={interests} />
</section> -->
