<script>
	import '../app.css';
	import '@fontsource/poppins/900.css'
	import '@fontsource/fira-mono'
	import '@fontsource/fira-mono/500.css'
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
</script>

<Header />

<main class="max-w-4xl m-auto p-8">
	<slot />
</main>

<Footer />