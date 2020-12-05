import { generateTable } from "./generateTable.js";

export async function getRegularStandings() {
    const currentStandingsContainer = document.querySelector('#current-standings-container');
    const pastStandingsContainer = document.querySelector('#past-standings-container');
    const response = await fetch('archive.json');
    const data = await response.json();

    //sections from the json file to work with
    const currentOwners = data.current.currentOwners;
    const pastOwners = data.past.pastOwners;

    //columns to sort by
    const winsColumnCurrent = document.querySelector('#wins-column-current');
    const losesColumnCurrent = document.querySelector('#loses-column-current');
    const percentColumnCurrent = document.querySelector('#percent-column-current');
    const winsColumnPast = document.querySelector('#wins-column-past');
    const losesColumnPast = document.querySelector('#loses-column-past');
    const percentColumnPast = document.querySelector('#percent-column-past');

    try {

        //sort list of owners by wins on page load
        currentOwners.sort((a, b) => b.wins - a.wins);
        pastOwners.sort((a, b) => b.wins - a.wins);
        currentStandingsContainer.innerHTML = generateTable(currentOwners);
        pastStandingsContainer.innerHTML = generateTable(pastOwners);

        //sort by wins if win column is clicked on current teams
        winsColumnCurrent.addEventListener('click', () => {
            currentOwners.sort((a, b) => b.wins - a.wins);
            pastOwners.sort((a, b) => b.wins - a.wins);
            currentStandingsContainer.innerHTML = generateTable(currentOwners);

        });

        //sort by loses if loses column is clicked on current teams
        losesColumnCurrent.addEventListener('click', () => {
            currentOwners.sort((a, b) => b.loses - a.loses);
            pastOwners.sort((a, b) => b.loses - a.loses);
            currentStandingsContainer.innerHTML = generateTable(currentOwners);

        });

        percentColumnCurrent.addEventListener('click', () => {
            const winPercent = document.querySelectorAll('.win-percent');
            for (let i = 0; i < winPercent.length; i++) {

            }
        })

        //sort by wins if win column is clicked on past teams
        winsColumnPast.addEventListener('click', () => {
            currentOwners.sort((a, b) => b.wins - a.wins);
            pastOwners.sort((a, b) => b.wins - a.wins);
            // currentStandingsContainer.innerHTML = generateTable(currentOwners);
            pastStandingsContainer.innerHTML = generateTable(pastOwners);
        });

        //sort by loses if loses column is clicked on past teams
        losesColumnPast.addEventListener('click', () => {
            currentOwners.sort((a, b) => b.loses - a.loses);
            pastOwners.sort((a, b) => b.loses - a.loses);
            // currentStandingsContainer.innerHTML = generateTable(currentOwners);
            pastStandingsContainer.innerHTML = generateTable(pastOwners);
        });

        percentColumnPast.addEventListener('click', () => {
            console.log('past percent column was clicked')
        })

    } catch (error) {
        console.log("No Information", error)
    }

}