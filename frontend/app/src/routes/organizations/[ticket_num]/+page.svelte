<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import Card from '$lib/Card.svelte';

    let orgDetails = $state({});
    let similarOrgs = $state([]);

    async function fetchOrgDetails() {
        orgDetails = await fetch(
            `http://localhost:42000/organizations/${$page.params.ticket_num}`
        ).then(
            (res) => {
                return res.json();
            }
        ).then((data) => {
            orgDetails = data;
            console.log(orgDetails);
        });
    }

    async function fetchSimilarOrgs() {
        similarOrgs = await fetch(
            `http://localhost:42000/organizations/${$page.params.ticket_num}/similar`
        ).then((res) => res.json());
    }

    onMount(() => {
        fetchOrgDetails();
        fetchSimilarOrgs();
    });

</script>

<h1>{orgDetails.organization}</h1>

<p>{orgDetails.company_description}</p>

<h2>Similar Organizations</h2>

{#if similarOrgs.length > 0}
	<div class="rec-results">
		{#each similarOrgs as org}
			<Card {...org} />
		{/each}
	</div>
{:else}
	<p>No similar startups found</p>
{/if}
