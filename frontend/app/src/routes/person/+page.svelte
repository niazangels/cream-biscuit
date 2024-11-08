<script>
	import PersonCard from '$lib/PersonCard.svelte';
	import Pill from '$lib/Pill.svelte';

	import { page } from '$app/stores';
	const filter = $page.url.searchParams.get('filter') || 'All';

	const { data } = $props();
	const people = data.people;

	let keyword = $state('');

	const searched_people = $derived.by(() =>
		people.filter((person) => person.name.toLowerCase().includes(keyword.toLowerCase()))
	);

	let filter_type = $state(filter);

	const filtered_people = $derived.by(() => {
		if (filter_type === 'All') return searched_people;
		let count = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
		return searched_people
			.sort(() => Math.random() - 0.5)
			.slice(0, count);
	});

</script>

<div class="scrollable">
	<div class="fixed">
		<h2>{filter_type} @ Huddle</h2>

        <div class="filters">
            <div class="image">
                <img src="/images/icons/{filter_type.toLowerCase()}.png" alt="filter_type.toLowerCase()">
            </div>
            <div class="info">
                <div class="pills">
                    <div class="pill" class:active={filter_type === 'All'} on:click={() => (filter_type = 'All')}>All</div>
                    <div class="pill" class:active={filter_type === 'Investors'} on:click={() => (filter_type = 'Investors')}>Investors</div>
                    <div class="pill" class:active={filter_type === 'Founders'} on:click={() => (filter_type = 'Founders')}>Founders</div>
                    <div class="pill" class:active={filter_type === 'Organizers'} on:click={() => (filter_type = 'Organizers')}>Organizers</div>
                    <div class="pill" class:active={filter_type === 'Mentors'} on:click={() => (filter_type = 'Mentors')}>Mentors</div>
                </div>
            </div>
        </div>


		<input type="text" placeholder={`Search ${filter_type}`} bind:value={keyword} />
	</div>

	<h3 class="section-header">{filtered_people.length} {filter_type} @ Huddle</h3>

	{#each filtered_people as person}
		<PersonCard {person} />
	{/each}
</div>

<style>
	.fixed {
		position: sticky;
		top: 0;
		background-color: white;
		width: 100%;
	}
	.pills {
		margin-block: 1rem;
		.pill {
			cursor: pointer;
			padding: 0.5rem 1rem;
            margin-block: .3rem;
			border-radius: 9999px;
		}
	}

    .filters{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-block: 1rem;
    }
</style>
