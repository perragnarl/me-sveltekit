<script context="module">
	import { GraphQLClient } from 'graphql-request';
	import { getResume } from '$lib/queries/queries';

	export async function load() {
		const graphcms = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/ckxw5joan0l4r01yua0tn5qai/master');
		const resume = await graphcms.request(getResume());

		console.log(resume.about[0].body.html);
		
		return {
			props: {
				about: resume.about[0].body.html,
				skills: resume.skills,
				languages: resume.languages,
				timeline: resume.timeline
			}
		};
	}
</script>

<script>
	import List from '$lib/components/list/List.svelte';
	import Timeline from '$lib/components/timeline/Timeline.svelte';
	
	export let about;
	export let skills;
	export let languages;
	export let timeline;
</script>

<svelte:head>
	<title>Resumé - Per-Ragnar Lindfors</title>
</svelte:head>

<section id="about" class="max-w-4xl mx-auto">
	<article>
		{@html about}
	</article>
</section>

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

<section id="languages">
	<h2>Språk</h2>
	<List data={languages} iconBackground="bg-pale-green" />
</section>

<!-- <section id="interests">
	<h2>Intressen</h2>
	<List data={interests} />
</section> -->
