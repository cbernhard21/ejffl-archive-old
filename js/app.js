import { getRegularStandings } from "./getRegularStandings.js"
import { getPlayoffStandings } from "./getPlayoffStandings.js"
import { displayMainSummary } from "./displayMainSummary.js"



const home = document.querySelector('#home');
const allTimeRegularStandings = document.querySelector('#all-time-standings')
const playoffStandings = document.querySelector('#playoff-standings')

displayMainSummary();

home.addEventListener('click', () => {
    main.innerHTML = '';
    displayMainSummary();
});

allTimeRegularStandings.addEventListener('click', () => {
    main.innerHTML = '';
    getRegularStandings();
});


playoffStandings.addEventListener('click', () => {
    main.innerHTML = '';
    getPlayoffStandings();
});