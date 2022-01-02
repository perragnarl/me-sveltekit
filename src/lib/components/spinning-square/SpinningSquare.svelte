<script>
	export let appearance;
</script>

<div class={appearance} />

<style>
	@keyframes bounce {
		0%,
		100% {
			transform: translateY(-25%);
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}
		50% {
			transform: none;
			animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
		}
	}
	div {
		border-radius: 9999px;
		animation: bounce 2s infinite;
		position: absolute;
		opacity: 0.4;
	}
</style>
