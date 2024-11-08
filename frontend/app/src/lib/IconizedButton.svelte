<script>
	export let img;
	export let href;
	export let text;
	export let label;

	import MarqueeText from '$lib/MarqueeText.svelte';
</script>

<a {href}>
	<div class="iconized-button">
		<div class="content">
			<span>{label}</span>
			<h2>{text}</h2>
		</div>
		<img src={img} alt={text} />
		<div>
			<MarqueeText />
		</div>
		<div></div>
	</div>
</a>

<style lang="scss">
	.iconized-button {
		align-items: center;
		gap: 0.5rem;

		display: grid;
		grid-template-columns: 80% 20%;
		grid-template-rows: 1fr 20px;
		background-color: #343434;

		border-radius: 8px;
		padding: 2rem;
		color: #fff;

		margin-block: 1rem;

		img {
			// border-radius: 8px;
			width: 100%;
		}
	}
	a {
		text-decoration: none;
	}
</style>
