<script>
	export let animate = false;

	function animationClass() {
		return animate ? 'slide-in-blurred-top' : '';
	}
</script>

<div id="logo" class={animationClass()}>
	<a href="/" title="Per-Ragnar Lindfors">
		<img src="/logo.svg" alt="" />
	</a>
</div>

<style>
	#logo {
		animation-delay: 1s;
	}
</style>
