import HuddleStartups from '$lib/_data/huddle_startups'

export async function load() {
    return {
        startups: HuddleStartups
    }
}
