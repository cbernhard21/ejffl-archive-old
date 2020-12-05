import { getRegularStandings } from "./getRegularStandings.js"
import { getPlayoffStandings } from "./getPlayoffStandings.js"
import { displayMainSummary } from "./displayMainSummary.js"
import { tradeHistory } from "./tradeHistory.js"

const currentPage = window.location.pathname;

if (currentPage === '/index.html') {
    displayMainSummary();
} else if (currentPage === '/current-standings.html') {
    getRegularStandings();
} else if (currentPage === '/playoff-standings.html') {
    getPlayoffStandings();
} else if (currentPage === '/trades.html') {
    tradeHistory();
}