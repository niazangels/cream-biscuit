import HuddleStartups from '$lib/_data/huddle_startups'
import HuddleEveryone from '$lib/_data/huddle_everyone'

export async function load({fetch, params}) {
    let person, organization, people, similar_people;
    person = HuddleEveryone.filter((person) => person.ticket_num === params.ticket_num)[0];
	organization = HuddleStartups.filter((startup) => startup.organization === person.organization)[0];
	if (organization.length > 0) {
		organization = organization[0];
        people = HuddleEveryone.filter((person) => person.organization === organization.organization).filter((person) => person.ticket_num !== params.ticket_num);
        similar_people = HuddleEveryone.filter((p) => p.ticket_num !== params.ticket_num)
			.sort(() => Math.random() - 0.5)
			.slice(0, 3);
	return { person, organization, people, similar_people };

	} else {
		organization = null;
		people = [];
		similar_people = [];
		return { person, organization, people, similar_people };
	}
}
