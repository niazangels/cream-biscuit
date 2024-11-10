import HuddleEveryone from '$lib/_data/huddle_everyone'
import HuddleInvestors from '$lib/_data/huddle_investors';
import HuddleMentors from '$lib/_data/huddle_mentors';


export async function load() {
    return {
        people: HuddleEveryone,
        investors: HuddleInvestors,
        mentors: HuddleMentors 
    }
}
