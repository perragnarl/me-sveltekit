<script>
	import Icon from '$lib/components/icon/Icon.svelte';
	import Logo from '$lib/components/logo/Logo.svelte';
</script>

<footer class="bg-charcoal text-beige p-8 border-[1.5rem] border-white">
	<section class="max-w-7xl mx-auto pt-8 pb-4">
		<div class="mb-6 flex justify-end">
			<Logo />
		</div>
		<div>
			<h2>Kontakt</h2>
			<ul class="flex gap-4 flex-wrap">
				<li>
					<Icon name="mail" background={false} appearance="mr-2" />
					<a href="mailto:hej@perragnarlindfors.se" class="hover:underline">
						hej@perragnarlindfors.se
					</a>
				</li>

				<li class="md:ml-auto mr-4 text-right">
					<Icon name="linkedin" background={false} appearance="mr-2" />
					<a href="https://www.linkedin.com/in/perragnarj/" class="hover:underline">
						LinkedIn
					</a>
				</li>

				<li>
					<Icon name="github" background={false} appearance="mr-2" />
					<a href="https://github.com/perragnarl" class="hover:underline"> Github </a>
				</li>
			</ul>
		</div>
	</section>
</footer>

<style lang="postcss">
	li {
		@apply flex items-center;
	}
</style>
