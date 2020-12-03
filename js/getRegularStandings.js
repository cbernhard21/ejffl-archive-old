import { generateTable } from "./generateTable.js";
import { tableHeaderHtml } from "./tableHeader.js";

export async function getRegularStandings() {
    const main = document.querySelector('#main');
    const response = await fetch('archive.json');
    const data = await response.json();

    //sections from the json file to work with
    const currentOwners = data.current.currentOwners;
    const pastOwners = data.past.pastOwners;

    try {

        const headerData = tableHeaderHtml('Team Name', 'Wins', 'Loses', 'Win %');

        function sortDataHtml(current, past) {

            const tableDataCurrent = generateTable(current);
            const tableDataPast = generateTable(past);

            return `<article class="card container card-bottom-margin">
                                <h2 class="subtitle card-padding">Current Team's All-Time Regular Season Record</h2>
                                <div class="grid-standings card-padding" id="current-records">
                                ${headerData + tableDataCurrent}
                                </div>
                                <p class="time-stamp container card-bottom-margin">Updated - 12/2/2020</p>
                             </article>
                             <article class="card container card-bottom-margin">
                                <h2 class="subtitle card-padding">Past Team's All-Time Regular Season Record</h2>
                                <div class="grid-standings card-padding" id="current-records">
                                ${headerData + tableDataPast}
                                </div>
                            </article>`
        }

        //sort list of owners by wins on page load
        currentOwners.sort((a, b) => b.wins - a.wins);
        pastOwners.sort((a, b) => b.wins - a.wins);
        main.innerHTML = sortDataHtml(currentOwners, pastOwners);

        //sort by wins with click
        const winsColumn = document.querySelector('#wins-column');
        winsColumn.addEventListener('click', () => {
            console.log('test wins')
            currentOwners.sort((a, b) => b.wins - a.wins);
            pastOwners.sort((a, b) => b.wins - a.wins);
            // main.innerHTML = sortDataHtml(currentOwners, pastOwners);
        })



        //sort by loses with click
        const losesColumn = document.querySelector('#loses-column');
        losesColumn.addEventListener('click', () => {
            console.log('test loses')
            currentOwners.sort((a, b) => b.loses - a.loses);
            pastOwners.sort((a, b) => b.loses - a.loses);
            // main.innerHTML = sortDataHtml(currentOwners, pastOwners);
        })


        //sort by win percentage
        const percentColumn = document.querySelector('#percent-column');
        percentColumn.addEventListener('click', () => {
            console.log('test win percentage')

        })


    } catch (error) {
        console.log("No Information", error)
    }

}