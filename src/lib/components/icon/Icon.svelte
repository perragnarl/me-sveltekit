<script>
	export let background = true;
	export let extraClass = '';
</script>

<span
	class={`w-9 h-9 inline-flex justify-center items-center	${background ? 'bg-gradient-to-r from-green-400 to-blue-400 rounded-full' : ''} ${extraClass}`}>
	<svg class={`fill-current ${background ? 'text-beige w-5 h-5' : 'w-9 h-9'}`}>
		<slot />
	</svg>
</span>
