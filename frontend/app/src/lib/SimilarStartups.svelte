<script>
    export let startups;
    console.log(startups);

</script>

<div class="gallery">
	<div class="wrapper">
		{#each startups as startup}
        <div class="item">
            <!-- <a href={`/startups/${startup.ticket_num}`}> -->
					<div class="image">
						<img src="https://picsum.photos/80" alt="" />
				</div>
				<div class="info">
					<h3>{startup.organization}</h3>
					<p>{startup.company_detail}</p>
					</div>
                    <!-- </a> -->
				</div>
		{/each}
	</div>
</div>

<style lang="scss">
	:root {
		--space: 1rem;
	}

	.gallery {
		grid-column: full;
		display: grid;
		grid-template-columns: inherit;
		padding-block: var(--gap);
		overflow-x: scroll;
		overscroll-behavior-x: contain;
		scroll-snap-type: x mandatory;
		scrollbar-width: none;
        margin-block: 2rem 0;

		.wrapper {
			grid-column: content;
			display: flex;
			align-items: center;
			gap: var(--space);

			&::after {
				content: '';
				align-self: stretch;
				padding-inline-end: max(
					var(--space),
					(100vw - var(--content-max-width)) / 2 - var(--space)
				);
			}

			.item {
				flex-shrink: 0;
				display: flex;
				scroll-snap-align: center;
				inline-size: 100%;
				max-inline-size: 25rem;
				aspect-ratio: 16 / 9;

            }

			.item {
				align-items: center;
				justify-content: start;
				gap: 1rem;
				font-size: 2rem;
				// background: #cecece;
				border-radius: 8px;
				overflow: hidden;

				&:nth-of-type(n + 1) {
					background-color: #F8D25C;
				}
				&:nth-of-type(n + 2) {
					background-color: #4ECDC4;
				}
				&:nth-of-type(n + 3) {
					background-color: #FB6376;
				}
				&:nth-of-type(n + 4) {
					background-color: #9085D5;
				}

				.image {
					margin-left: 1rem;
                    img{
                        border-radius: 8px;
                    }
				}

				.info {
					// border: 1px solid red;
					h3 {
						font-size: 1.4rem;
					}
					p {
						font-size: 1.2rem;
					}
				}
			}
		}
	}
</style>
