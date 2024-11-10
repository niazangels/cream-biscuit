<script>
	export let name 
	export let description;
	export let technology;
	export let domain;
    export let ticket_num
	import StartupImage from './StartupImage.svelte';
</script>

<a href={`/startups/${ticket_num}`}>
	<div class="content">
		<div class="image">
			<StartupImage name={name} />
	</div>
	<div class="info">
		<h3>{name}</h3>
		<p class="description">{description}</p>
		<div class="pills">
			{#if technology}	
				<span class="pill">{technology}</span>
			{/if}
			{#if domain}
				<span class="pill">{domain}</span>
			{/if}
		</div>
	</div>
</div>
</a>

<style lang="scss">
    a {
        text-decoration: none;
        color: inherit;
    }
	.content {
		display: grid;
		grid-template-columns: 80px 1fr;
		gap: 2rem;
		align-items: center;
		margin-top: 1rem;
        margin-block: 1rem;

		.image img {
			border-radius: 8px;

		}
		.info {
            padding-right: 2rem;
            overflow: hidden;
            h3{
                font-size: 1.3rem;

                /* https://stackoverflow.com/a/34294113 */
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .pills{
                margin-left: -.5rem;

                .pill{
                    color: #5d5d5d;
                    font-size: 1.2rem;
                }
            }
            .description{
                margin-block: .2rem;
                font-size: 1.2rem;
                color: #8f8f8f;

                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
		}
	}
</style>
