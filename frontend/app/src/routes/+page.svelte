<script>
	import { onMount } from 'svelte';
	import Card from '$lib/Card.svelte';
	let ticketId = $state('vmYkMulO3r');
	let similarStartups = $state([]);

	async function searchStartups() {
		const response = await fetch(
			`http://localhost:42000/search/organizations?search_text=${ticketId}`
		)
			.then((res) => res.json())
			.then((data) => {
				similarStartups = data;
				console.log({ similarStartups });
				for (const startup of similarStartups) {
					console.log(startup.organization);
				}
			});
	}

</script>

<h1>Huddle RecSys</h1>

<form onsubmit={searchStartups}>
	<input type="text" bind:value={ticketId} />
	<button type="submit" class="btn">Get Similar Startups</button>
</form>

{#if similarStartups.length > 0}
	<h2>Similar Startups</h2>
	<div class="rec-results">
		{#each similarStartups as startup}
			<Card {...startup} />
		{/each}
	</div>
{:else}
	<p>No similar startups found</p>
{/if}

<style lang="scss">
	form {
		display: flex;
		gap: 0;

		input {
			flex: 1;
		}
	}
</style>
