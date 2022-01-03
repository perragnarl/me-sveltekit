<script>
	import Saos from 'saos';
	export let data;
</script>

<div class="relative">
	<span class="absolute w-1 bg-zinc-200 h-full md:left-1/2" />
	<ol>
		{#each data as item, i}
			<li
				class={`flex my-8 md:my-16 before:absolute before:w-[30px] before:h-[30px] md:before:w-[50px] md:before:h-[50px] before:left-[-13px] md:before:left-[calc(50%-23px)] before:rounded-full before:mt-10 before:border-4 md:before:border-8 before:border-white
				${i === 0 ? 'before:bg-pale-green' : 'before:bg-zinc-200'}`}
			>
				<Saos once={true} animation={'slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}>
					<div
						class={`bg-pale-yellow flex md:inline-flex p-4 ml-8 md:p-8 w-full md:w-[calc(50%-2rem)] flex-col
						${i % 2 !== 0 ? 'md:ml-auto' : 'md:ml-0'}`}
					>
						<h3 class="text-2xl">{item.title}</h3>
						<p class="my-2 text-xl">{item.subtitle}</p>
						<time class="text-base" datetime={`${item.from}/${item.until}`}>
							{item.from} - {item.until}
						</time>
					</div>
				</Saos>
			</li>
		{/each}
	</ol>
</div>

<style>
	@keyframes -global-slide-top {
		0% {
			-webkit-transform: translateY(400px);
			transform: translateY(400px);
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
	}
</style>
