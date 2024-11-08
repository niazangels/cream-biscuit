<script>
	export let img;
	export let href;
	export let text;
	export let label;

    import huddle_startups from '$lib/_data/huddle_startups';

    const shuffled_startups = huddle_startups.sort(() => Math.random() - 0.5);
    const marquee_text = shuffled_startups.map(startup => startup.organization).join('  ·  ');
    
    console.log(marquee_text);

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
            <MarqueeText text={marquee_text} />
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
        
		border-radius: 8px;
		padding: 2rem;
		// background-color: #343434;
		// color: #fff;

        background-color: #F8D25C;
        color: #000;

		margin-block: 1rem;

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
