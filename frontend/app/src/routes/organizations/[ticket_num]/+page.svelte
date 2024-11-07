<script>
	import { page } from '$app/stores';
	import Card from '$lib/Card.svelte';

	let { data } = $props();
	console.log(data);
</script>

<main>
	<div class="details">
		<h1>{data.orgDetails.organization}</h1>

		<div class="tags">
			<span class="tag">{data.orgDetails.category}</span>
			<span class="tag">{data.orgDetails.technology}</span>
		</div>

        <h2>Company Description</h2>
		<p>{data.orgDetails.company_description}</p>

		<h2>Product Name</h2>
		<p>{data.orgDetails.product_name}</p>

		<h2>Product Description</h2>
		<p>{data.orgDetails.product_detail}</p>

		<div class="people">
			<h2>People</h2>
			<div class="person">
				<img src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${data.orgDetails.name}`} alt={data.orgDetails.name} />
				<p>{data.orgDetails.name}</p>
			</div>
		</div>
	</div>
	<div class="related">
		<h2>Similar Organizations</h2>

		{#if data.similarOrgs.length > 0}
			<div class="rec-results">
				{#each data.similarOrgs as org}
					<Card {...org} />
				{/each}
			</div>
		{:else}
			<p>No similar startups found</p>
		{/if}
	</div>
</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}
	.person {
		display: flex;
		flex-direction: column;
		img {
			width: 100px;
			height: 100px;
			border-radius: 50%;
			border: 2px solid #4a4a4a;
		}
	}
	.tags {
		display: flex;
            gap: 10px;
            .tag{
                padding: 0 6px;
                margin-block: 10px;
                border-radius: 5px;
                font-size: 12px;
                color: #222;
            background-color: #d7d7d7;
            }
        }

</style>
