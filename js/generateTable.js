export const generateTable = (items) => {
    let currentStandingsHtml = items.map(item => {
        const winPercentage = item.wins / (item.wins + item.loses);
        const finalWinPercentage = isNaN(winPercentage) ? '.000' : winPercentage.toFixed(3).slice(1);

        return `<div class="team-stats-record grid-4">
                    <p>${item.teamName}</p>
                    <p class="align-right">${item.wins}</p>
                    <p class="align-right">${item.loses}</p>
                    <p class="align-right win-percent">${finalWinPercentage}</p>
                </div>`
    }).join('');
    return currentStandingsHtml;
}

export const generatePlayoffTable = (items) => {
    let currentStandingsHtml = items.map(item => {
        const winPercentage = item.playoffWins / (item.playoffWins + item.playoffLoses);
        let finalWinPercentage = isNaN(winPercentage) ? '.000' : winPercentage.toFixed(3).slice(1);

        return `<div class="team-stats-record grid-4">
                    <p>${item.teamName}</p>
                    <p class="align-right">${item.playoffWins}</p>
                    <p class="align-right">${item.playoffLoses}</p>
                    <p class="align-right">${finalWinPercentage}</p>
                </div>`
    }).join('');
    return currentStandingsHtml;
}