<script>
	export let img;
	export let href;
	export let text;
	export let label;

    import huddle_startups from '$lib/_data/huddle_startups';

    const shuffled_startups = huddle_startups.sort(() => Math.random() - 0.5);
    const marquee_text = shuffled_startups.map(startup => startup.organization).join('  ·  ');
    
	import MarqueeText from '$lib/MarqueeText.svelte';
</script>

<a {href}>
	<div class="iconized-button">
		<div class="content">
			<span class="btn-text">{label}</span>
			<h2>{text}</h2>
		</div>
		<img src={img} alt={text} />
	</div>
	<MarqueeText text={marquee_text} />
</a>

<style lang="scss">
	.iconized-button {
		align-items: center;
		gap: 0.5rem;

		display: grid;
		grid-template-columns: 80% 20%;
		// grid-template-rows: 1fr 20px;
        
		border-radius: 8px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		padding: 2rem;

        background-color: #F8D25C;
        color: #000;

		margin-top: 1rem;

        h2{
            color: #2c2a2a;
        }
        span{
            color: #746c6c;
        }

		img {
			// border-radius: 8px;
			width: 100%;
		}
	}
	a {
		text-decoration: none;
	}
</style>
