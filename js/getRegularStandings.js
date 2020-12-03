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

        //sort list of owners by wins        
        currentOwners.sort((a, b) => b.wins - a.wins);
        pastOwners.sort((a, b) => b.wins - a.wins);

        main.innerHTML = `<article class="card container card-bottom-margin">
                            <h2 class="subtitle card-padding">Current Team's All-Time Regular Season Record</h2>
                            <div class="grid-standings card-padding" id="current-records">
                            ${tableHeaderHtml('Team Name', 'Wins', 'Loses', 'Win %') + generateTable(currentOwners)}
                            </div>
                            <p class="time-stamp container card-bottom-margin">Updated - 12/2/2020</p>
                         </article>
                         <article class="card container card-bottom-margin">
                            <h2 class="subtitle card-padding">Past Team's All-Time Regular Season Record</h2>
                            <div class="grid-standings card-padding" id="current-records">
                            ${tableHeaderHtml('Team Name', 'Wins', 'Loses', 'Win %') + generateTable(pastOwners)}
                            </div>
                        </article>
                        
                        `


    } catch (error) {
        console.log("No Information", error)
    }

}