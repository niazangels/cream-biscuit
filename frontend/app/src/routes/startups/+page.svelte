<script>
	import SingleRowButton from '$lib/SingleRowButton.svelte';
	import StartupCard from '$lib/StartupCard.svelte';

	const technologies = [
		'All',
		'3D Printing',
		'Aggregator Platform',
		'Artificial Intelligence',
		'Augmented Reality',
		'Big Data',
		'Blockchain',
		'CRM',
		'Chatbots',
		'Consumer Robotics',
		'Data Analytics',
		'Display Technology',
		'Drones',
		'ERP',
		'Enterprise Solutions',
		'Geo Spatial',
		'Green Technology',
		'Industrial Robotics',
		'Internet of Things',
		'Machine Learning & Data Sciences',
		'Mobile Apps',
		'Nanotechnology',
		'Natural User Interface',
		'Other',
		'SaaS',
		'Security & Surveillance Technology',
		'Semiconductors',
		'Sensors',
		'Virtual Reality (VR)',
		'Web technologies'
	];
	const sectors = [
		'All',
		'AR VR (Augmented + Virtual Reality)',
		'AdTech',
		'Advertising',
		'Aeronautics Aerospace & Defence',
		'Aerospace and Defense',
		'Agriculture',
		'Agriculture and Life Sciences',
		'Analytics',
		'Architecture Interior Design',
		'Art & Photography',
		'Artificial Intelligence',
		'Automotive',
		'Banking Financial Services and Insurance',
		'Biotechnology',
		'Chemicals',
		'Climate',
		'Construction',
		'Construction Technology',
		'Consumer',
		'Consumer Goods',
		'Cyber Security',
		'Data as a Service',
		'Defence Equipment',
		'EdTech',
		'Education',
		'Electronics',
		'Electronics and Communication',
		'Energy',
		'Enterprise Applications',
		'Enterprise Infrastructure',
		'FinTech',
		'Food processing',
		'FoodTech',
		'Gaming',
		'HealthTech',
		'Healthcare',
		'IT/ITeS',
		'Internet of Things',
		'Investment Industry',
		'Life Sciences',
		'Logisitics',
		'Manufacture of Machinery and Equipment',
		'Media & Entertainment',
		'Media and Entertainment',
		'Mobile',
		'Mobility',
		'Other',
		'Packaging',
		'Retail',
		'Telecom',
		'Travel & Tourism',
		'Waste Management'
	];

	const { data } = $props();
	const startups = $state(data.startups);
	let by_technology = $state('All');
	let by_sector = $state('All');
	let keyword = $state('');

	function clear_filters() {
		by_technology = 'All';
		by_sector = 'All';
		keyword = '';
	}

	const filtered_startups = $derived.by(() =>
		startups
			.filter((startup) => (by_technology === 'All' ? true : startup.technology === by_technology))
			.filter((startup) => (by_sector === 'All' ? true : startup.sector === by_sector))
	);

	const searched_startups = $derived.by(() =>
		filtered_startups.filter((startup) =>
			startup.organization?.toLowerCase().includes(keyword.toLowerCase())
		)
	);

</script>

<h1>Startups @ Huddle</h1>

<input type="text" placeholder="Search" bind:value={keyword} />

<h2 class="section-header">Technology</h2>

<select name="technology" id="technology" bind:value={by_technology}>
	{#each technologies as tech}
		<option value={tech}>{tech}</option>
	{/each}
</select>

<h2 class="section-header">Domain</h2>

<select name="technology" id="technology" bind:value={by_sector}>
	{#each sectors as sector}
		<option value={sector}>{sector}</option>
	{/each}
</select>

{#if by_sector!='All' || by_technology!='All' || keyword!=''}
    <SingleRowButton text="Clear all filters" href="/startups" kind="secondary" on:click={clear_filters}/>
{/if}

<h2 class="section-header">Showing {filtered_startups.length} startups</h2>

{#each searched_startups as startup}
	<StartupCard
        ticket_num={startup.ticket_num}
		name={startup.organization}
		description={startup.company_description}
		technology={startup.technology}
		domain={startup.sector}
	/>
{/each}

<style lang="scss">
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}
</style>
