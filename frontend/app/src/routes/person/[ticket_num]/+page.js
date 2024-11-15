import HuddleStartups from '$lib/_data/huddle_startups'
import HuddleEveryone from '$lib/_data/huddle_everyone'


export async function load({params}) {
    let person, organization, also_from_organization, similar_people;
    person = HuddleEveryone.filter((person) => person.ticket_num.toString() === params.ticket_num.toString())[0];
    organization = person.organization;
    also_from_organization = HuddleEveryone.filter((person) => person.organization === organization).filter((person) => person.ticket_num !== params.ticket_num);
    similar_people = HuddleEveryone.filter((p) => p.ticket_num !== params.ticket_num)
			.sort(() => Math.random() - 0.5)
			.slice(0, 3);
	return { person, organization, also_from_organization, similar_people };
}
