<!-- <script>
	import HuddleStartups from '$lib/_data/huddle_startups';
	const shuffled = HuddleStartups.sort(() => Math.random() - 0.5);
</script>

<div class="wrapper">
	<div class="marquee">
		<p>
			{#each shuffled.slice(0, 10) as startup}
				<span>{startup.organization} &centerdot; </span>

			{/each}
		</p>
		
        <p>
			{#each shuffled as startup}
				<span>{startup.organization}</span>
			{/each}
		</p>
		
	</div>
</div>

<style lang="scss">
	.wrapper {
		max-width: 100%;
		overflow: hidden;
	}

	.marquee {
		white-space: nowrap;
		overflow: hidden;
		display: inline-block;
		animation: marquee 1600s linear infinite;
	}

	.marquee p {
		display: inline-block;
		span {
			margin-right: 10px;
		}
	}


	@keyframes marquee {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(-50%, 0, 0);
		}
	}
</style> -->
