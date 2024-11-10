<script>
	import PersonCard from '$lib/PersonCard.svelte';
	import Pill from '$lib/Pill.svelte';

	import { page } from '$app/stores';
	const filter = $page.url.searchParams.get('filter') || 'Attendees';

	const { data } = $props();
	let filter_type = $state(filter);
	let keyword = $state('');

    let people = $derived.by(() => {
        if (filter_type === 'Attendees') return data.people;
        if (filter_type === 'Investors') return data.investors;
        if (filter_type === 'Mentors') return data.mentors;
    });

	const searched_people = $derived.by(() =>
		people.filter((person) => 
			person.name.toLowerCase().includes(keyword.toLowerCase()) ||
			(person.organization && person.organization.toLowerCase().includes(keyword.toLowerCase()))
		)
	);


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
                    <div class="pill" class:active={filter_type === 'Attendees'} on:click={() => (filter_type = 'Attendees')}>Attendees</div>
                    <div class="pill" class:active={filter_type === 'Investors'} on:click={() => (filter_type = 'Investors')}>Investors</div>
                    <!-- <div class="pill" class:active={filter_type === 'Founders'} on:click={() => (filter_type = 'Founders')}>Founders</div> -->
                    <!-- <div class="pill" class:active={filter_type === 'Organizers'} on:click={() => (filter_type = 'Organizers')}>Organizers</div> -->
                    <div class="pill" class:active={filter_type === 'Mentors'} on:click={() => (filter_type = 'Mentors')}>Mentors</div>
                </div>
            </div>
        </div>


		<input type="text" placeholder={`Search ${filter_type}`} bind:value={keyword} />
	</div>

	<h3 class="section-header">{searched_people.length} {filter_type} @ Huddle</h3>

	{#each searched_people as person}
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
