<script>
	import StartupCard from '$lib/StartupCard.svelte';
	import PersonCard from '$lib/PersonCard.svelte';

	const { data } = $props();
	const person = data.person;
	const organization = data.organization;
	const people = data.people;
	const similar_people = data.similar_people;
	const image_size = 120;
</script>

<div class="card">
	<div class="image">
		<img
			src={`https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=/${person.name}&scale=70&backgroundColor=F8D25C&mouth=concerned,default,disbelief,eating,grimace,serious,smile,tongue,twinkle`}
			alt={person.name}
			width={image_size}
			height={image_size}
		/>
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
		name={organization.organization}
		description={organization.company_description}
		image={organization.image}
		technology={organization.technology}
		domain={organization.sector}
		ticket_num={organization.ticket_num}
	/>

	<h2 class="section-header">Others from {organization.organization.split(' ')[0]}</h2>
	{#if people}
		{#each people as person}
			<PersonCard {person} />
		{/each}
	{:else}
		<p>No one else from {organization.organization} at Huddle.</p>
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

{JSON.stringify(person)}
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
