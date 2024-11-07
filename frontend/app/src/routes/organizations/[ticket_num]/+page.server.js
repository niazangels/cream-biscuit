// async function fetchSimilarOrgs(ticket_num) {
//     const similarOrgs = await fetch(
//         `http://localhost:42000/organizations/${ticket_num}/similar`
//     ).then((res) => res.json());
//     return similarOrgs;
// }

// async function fetchOrgDetails(ticket_num) {
//     const orgDetails = await fetch(
//         `http://localhost:42000/organizations/${ticket_num}`
//     ).then((res) => res.json());
//     return orgDetails;
// }

export async function load({ fetch, params }) {
    const orgDetails = await fetch(
        `http://api/organizations/${params.ticket_num}`
    ).then((res) => res.json());
    
    const similarOrgs = await fetch(
        `http://api/organizations/${params.ticket_num}/similar`
    ).then((res) => res.json());

    return {
        orgDetails,
        similarOrgs
    };
}
