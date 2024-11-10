<script>
	import StartupCard from '$lib/StartupCard.svelte';
	import PersonCard from '$lib/PersonCard.svelte';
	import PersonImage from '$lib/PersonImage.svelte';

	const { data } = $props();
	const person = data.person;
	const organization = data.organization;
	const also_from_organization = data.also_from_organization;
	const similar_people = data.similar_people;
</script>

<div class="card">
	<div class="image">
		<PersonImage {person} />
	</div>
	<div class="info">
		<h3>{person.name}</h3>
		<p>{person.designation}</p>
		{#if person.organization}
			<p>@{person.organization}</p>
		{/if}
	</div>
</div>

<h2 class="section-header">About</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>

{#if organization}
	<h2 class="section-header">Organization</h2>
	<StartupCard
		name={person.organization}
		description={person.company_description}
		image={organization.image}
		technology={person.technology}
		domain={person.sector}
		ticket_num={person.ticket_num}
	/>

	<h2 class="section-header">Others from {organization.split(' ')[0]}</h2>
	{#if also_from_organization.length > 0}
		{#each also_from_organization as person}
			<PersonCard {person} />
		{/each}
	{:else}
		<p>No one else is from this organization at Huddle.</p>
	{/if}
{/if}

<h2 class="section-header">Similar People</h2>
{#if similar_people}
	{#each similar_people as person}
		<PersonCard {person} />
	{/each}
{:else}
	<p>No similar people found.</p>
{/if}

<!-- {JSON.stringify(person)} -->
<!--
<br />
<br />
<br />
<hr />
<br />

{JSON.stringify(people)}
{JSON.stringify(organization)} -->

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		.image {
			img {
				border-radius: 50%;
			}
		}
		.info {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
		}
	}
</style>
