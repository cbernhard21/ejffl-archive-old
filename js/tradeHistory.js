export const tradeHistory = async() => {
    const main = document.querySelector('#main');
    const response = await fetch('archive.json');
    const data = await response.json();
    const currentOwners = data.current.currentOwners;
    const pastOwners = data.past.pastOwners;

    const allOwners = currentOwners.concat(pastOwners);
    allOwners.sort((a, b) => b.trades - a.trades);

    const trades = allOwners.map((owner) => {
        return `<li>${owner.teamName} - ${owner.trades}</li>`;
    }).join('');

    const tradeHtml = `<div class="card-bottom-margin trade">
                        <img src="../images/trade-history-2020.jpg" alt="Trade Chart" class="img" />
                        <h2 class="container">All Time Trades</h2>                
                        <ul class="trade-list container">${trades}</ul>
                      </div> `;


    main.innerHTML = tradeHtml;

};