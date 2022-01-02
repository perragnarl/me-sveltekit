<script>
	import Nav from '$lib/components/nav/Nav.svelte';

	export let type = 'default';
</script>

<header class="mb-20 flex-wrap p-8 bg-soft-grey border-[1.5rem] border-white">
	<div class="max-w-7xl mx-auto min-h-[400px]">
		<div class="flex justify-between items-center">
			<div id="logo">
				<img src="/logo.svg" alt="" />
			</div>
			<Nav />
		</div>
		{#if type !== 'compact'}
			<div id="intro" class="max-w-xl mt-16">
				<h1>Hejsan!</h1>
				<p>Med en passion för mitt arbete har jag en vilja och drivkraft att utmärka mig och ständigt förbättra det jag gör.</p>
				<p>Läs mer om min resa nedanför.</p>
			</div>
		{/if}
	</div>
</header>
