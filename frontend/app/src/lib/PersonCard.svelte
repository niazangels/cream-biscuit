<script>
	import PersonImage from "./PersonImage.svelte";

	const { person } = $props();

	// const person = {
	// 	name: 'John_Doe',
	// 	title: 'CEO',
	// 	organization: 'Acme Inc.',
	// };
	const image_size = 60;
</script>

<a href={`/person/${person.ticket_num}`}>
	<div class="card">
		<div class="image">
			<PersonImage {person} image_size=80 />
		</div>
		<div class="info">
			<h3>{person.name}</h3>
			<p>{person.designation}</p>
			{#if person.organization}
				<p>@{person.organization}</p>
			{/if}
		</div>
	</div>
</a>

<style lang="scss">
	a {
		text-decoration: none;
		color: inherit;
	}
	.card {
		display: grid;
		grid-template-columns: 60px 1fr;
		gap: 1rem;
		padding: 1rem;
		border-radius: 1rem;

		.image {
			
		}
		.info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			p {
				color: #7d7d7d;
				font-size: 1.2rem;
			}
		}
	}
</style>
