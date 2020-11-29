import { generateTable } from "./generateTable.js";
import { tableHeaderHtml } from "./tableHeader.js";

export async function getData() {
    const currentRecordsDiv = document.querySelector('#current-records');
    const pastRecordsDiv = document.querySelector('#past-records');
    const response = await fetch('archive.json');
    const data = await response.json();

    //sections from the json file to work with
    const currentOwners = data.current.currentOwners;
    const pastOwners = data.past.pastOwners;

    try {

        //sort list of owners by wins        
        currentOwners.sort((a, b) => b.wins - a.wins);
        pastOwners.sort((a, b) => b.wins - a.wins);

        currentRecordsDiv.innerHTML = tableHeaderHtml('Team Name', 'Wins', 'Loses', 'Win %') + generateTable(currentOwners);

        pastRecordsDiv.innerHTML = tableHeaderHtml('Team Name', 'Wins', 'Loses', 'Win %') + generateTable(pastOwners);

    } catch (error) {
        console.log("No Information", error)
    }

}