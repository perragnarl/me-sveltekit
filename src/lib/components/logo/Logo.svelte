<script>
	export let animate = false;
</script>

<div id="logo" class={animate ? 'slide-in-blurred-top' : ''}>
	<a href="/" title="Per-Ragnar Lindfors">
		<img src="/logo.svg" alt="" />
	</a>
</div>

<style>
	#logo {
		animation-delay: 1s;
	}
</style>
