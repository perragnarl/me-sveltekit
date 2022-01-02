<script>
	export let name;
	export let background = true;
	export let appearance = '';

	let backgroundStyles = background && 'rounded-full'
</script>

<span class={`${appearance} ${backgroundStyles}`}>
	<svg class={background ? 'w-5 h-5 fill-black opacity-50' : 'w-9 h-9 fill-beige'}>
		<use xlink:href={`/icon-sprite.svg#${name}`}></use>
	</svg>
</span>

<style lang="postcss">
	span {
		@apply w-9 h-9 inline-flex justify-center items-center;
	}
</style>
