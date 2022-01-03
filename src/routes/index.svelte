<script context="module">
	import { GraphQLClient, gql } from 'graphql-request';
	import queries from '$lib/queries/queries';

	export async function load() {
		const graphcms = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/ckxw5joan0l4r01yua0tn5qai/master');

		const skills = await graphcms.request(
			gql`
				${queries.skills}
			`
		);
		const languages = await graphcms.request(
			gql`
				${queries.languages}
			`
		);
		const timeline = await graphcms.request(
			gql`
				${queries.timeline}
			`
		);

		return {
			props: {
				skills: skills.listItems,
				languages: languages.listItems,
				timeline: timeline.timelineItems
			}
		};
	}
</script>

<script>
	import List from '$lib/components/list/List.svelte';
	import Timeline from '$lib/components/timeline/Timeline.svelte';

	export let skills;
	export let languages;
	export let timeline;
	console.log(timeline);
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
	<List data={skills} iconBackground="bg-pale-red" />
</section>

<!-- <section id="methods">
	<h2>Utvecklingsmestoder</h2>
	<List data={methods} />
</section> -->

<section id="experience">
	<h2>Erfarenhet</h2>
	<Timeline data={timeline} />
</section>

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
