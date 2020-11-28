async function getData() {
    const response = await fetch('archive.json');
    const data = await response.json();
    const currentOwners = data.current.owners;
    const pastOwners = data.past.owners;

    currentOwners.forEach(owner => {
        console.log(`Team Name: ${owner.teamName}`);
        console.log(`Team Owner: ${owner.firstName}`);
        console.log(`Wins: ${owner.wins}`);
        console.log(`Loses: ${owner.loses}`);
    })

    pastOwners.forEach(owner => {
        console.log(`Team Name: ${owner.teamName}`);
        console.log(`Team Owner: ${owner.firstName}`);
        console.log(`Wins: ${owner.wins}`);
        console.log(`Loses: ${owner.loses}`);
    })


}

getData();