<script>
	import SingleRowButton from '$lib/SingleRowButton.svelte';
	import PersonCard from '$lib/PersonCard.svelte';
	import SimilarStartups from '$lib/SimilarStartups.svelte';
	import StartupHeader from '$lib/StartupHeader.svelte';

	export let data;

	$: startup = data.startup;
	$: people = data.people;
	$: similar_startups = data.similar_startups;
	$: other_startups = data.other_startups;

</script>


<StartupHeader 
	ticket_num={startup.ticket_num}
	organization={startup.organization}
	sector={startup.sector}
	technology={startup.technology}
 />

<SingleRowButton text="Website" href={startup.website} />

<h2 class="section-header">About Company</h2>

{#if startup.company_description}
<p>{startup.company_description}</p>
{:else}
<p> -</p>
{/if}

{#if startup.product_name}
	<h2 class="section-header">Product</h2>
	<h3>{startup.product_name}</h3>
	<p>{startup.product_detail}</p>
{/if}

<h2 class="section-header">
	{#if people.length > 1}
		{people.length} People at Huddle
	{:else}
		1 Person at Huddle
	{/if}
</h2>

{#each people as person}
	<PersonCard {person} />
{/each}

<h2 class="section-header">
	Similar Startups
</h2>

<SimilarStartups startups={similar_startups} />


<h2 class="section-header">
	Other Startups
</h2>

<SimilarStartups startups={other_startups} />


<style lang="scss">
	p {
		color: #535353;
	}
	h3 {
		margin-block: 2rem 1rem;
	}
</style>
