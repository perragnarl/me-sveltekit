<script>
	import Nav from '$lib/components/nav/Nav.svelte';
	import Logo from '$lib/components/logo/Logo.svelte';
	import BouncingBall from '$lib/components/bouncing-ball/BouncingBall.svelte';

	export let type;
</script>

<header class="mb-20 flex-wrap px-8 py-20 bg-soft-grey border-[1.5rem] border-white">
	<div class="max-w-7xl mx-auto">
		<div class="flex justify-between items-center">
			<Logo />
			<Nav />
		</div>
		{#if type === 'extended'}
			<div class="flex flex-1 relative">
				<div id="intro" class="max-w-xl mt-16">
					<h1 class="text-6xl font-black -rotate-2 mb-16 font-poppins">Hejsan!</h1>
					<p>Med en passion för mitt arbete har jag en vilja och drivkraft att utmärka mig och ständigt förbättra det jag gör.</p>
					<p>Läs mer om min resa nedanför.</p>
				</div>
				<div>
					<BouncingBall appearance="bg-pale-yellow h-64 w-64 bottom-40 right-0" />
					<BouncingBall appearance="bg-pale-red h-80 w-80 bottom-0 right-0" />
					<BouncingBall appearance="bg-pale-green h-48 w-48 bottom-0 right-60" />
				</div>
			</div>
		{/if}
	</div>
</header>
