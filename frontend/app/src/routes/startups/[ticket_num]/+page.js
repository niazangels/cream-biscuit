import HuddleStartups from '$lib/_data/huddle_startups'
import HuddleEveryone from '$lib/_data/huddle_everyone'

export async function load({params}) {
	let startup = HuddleStartups.filter((startup) => startup.ticket_num === params.ticket_num)[0];
	let people = HuddleEveryone.filter((person) => person.organization === startup.organization);
	
	// Get all startups except current one
	let remaining_startups = HuddleStartups.filter(s => s.ticket_num !== params.ticket_num);
	
	// Randomly select similar startups
	let similar_startups = remaining_startups.sort(() => Math.random() - 0.5).slice(0, 4);
	
	// Get other startups excluding similar ones
	let other_startups = remaining_startups
		.filter(s => !similar_startups.includes(s))
		.sort(() => Math.random() - 0.5)
		.slice(0, 4);

	console.log("Server side", {startup, people, similar_startups, other_startups});

	return { startup, people, similar_startups, other_startups };
}
