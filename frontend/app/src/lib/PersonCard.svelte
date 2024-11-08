<script>
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
			<img
				src={`https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=/${person.name}&scale=70&backgroundColor=F8D25C,FB6376,4ECDC4,9085D5&mouth=concerned,default,disbelief,eating,grimace,serious,smile,tongue,twinkle`}
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
			img {
				border-radius: 50%;
			}
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
