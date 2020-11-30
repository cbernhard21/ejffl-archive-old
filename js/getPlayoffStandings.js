import { generatePlayoffTable } from "./generateTable.js";
import { tableHeaderHtml } from "./tableHeader.js";

export async function getPlayoffStandings() {
    const main = document.querySelector('#main');
    const response = await fetch('archive.json');
    const data = await response.json();

    //sections from the json file to work with
    const currentOwners = data.current.currentOwners;
    const pastOwners = data.past.pastOwners;

    try {

        //sort list of owners by wins        
        currentOwners.sort((a, b) => b.playoffWins - a.playoffWins);
        pastOwners.sort((a, b) => b.playoffWins - a.playoffWins);

        main.innerHTML = `<article class="card container card-bottom-margin">
                            <h2 class="subtitle card-padding">Current Team's All-Time Playoff Record</h2>
                            <div class="grid-standings card-padding" id="current-records">
                            ${tableHeaderHtml('Team Name', 'Wins', 'Loses', 'Win %') + generatePlayoffTable(currentOwners)}
                            </div>
                            <p class="time-stamp container card-bottom-margin">Updated - 11/30/2020</p>
                         </article>
                         <article class="card container card-bottom-margin">
                            <h2 class="subtitle card-padding">Past Team's All-Time Playoff Record</h2>
                            <div class="grid-standings card-padding" id="current-records">
                            ${tableHeaderHtml('Team Name', 'Wins', 'Loses', 'Win %') + generatePlayoffTable(pastOwners)}
                            </div>
                      </article>`


    } catch (error) {
        console.log("No Information", error)
    }

}