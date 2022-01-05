<script>
	import viewport from '$lib/utils/inView';
	import { fly } from 'svelte/transition';

	export let item;
	export let i;
	let inView = false;
</script>

<li
	use:viewport
	on:enterViewport={() => inView = true}
	class="{i === 0 ? 'before:bg-pale-green' : 'before:bg-stone-200'}"
>
	{#if inView}
		<div
			class={[
				'flex md:inline-flex p-4 ml-8 md:p-8 w-full md:w-[calc(50%-2rem)] flex-col',
				i % 2 !== 0 ? 'md:ml-auto' : 'md:ml-0',
				i === 0 ? 'bg-pale-green' : 'bg-stone-100',
			].join(' ')}
			transition:fly={{ y:400, duration:1000 }}
		>
			<h3 class="text-2xl">{item.title}</h3>
			<p class="my-2 text-xl">{item.subtitle}</p>
			<time class="text-base" datetime="{item.from}/{item.until}">
				{item.from} - {item.until}
			</time>
		</div>		
	{/if}
</li>

<style lang="postcss">
	li {
		@apply flex my-8 md:my-16 min-h-[120px] before:absolute before:w-[30px] before:h-[30px] md:before:w-[50px] md:before:h-[50px] before:left-[-13px] md:before:left-[calc(50%-23px)] before:rounded-full before:mt-10 before:border-4 md:before:border-8 before:border-white;
	}
</style>
