export const tradeHistory = async() => {
    const main = document.querySelector('#main');
    const response = await fetch('archive.json');
    const data = await response.json();
    const currentOwners = data.current.currentOwners;
    const pastOwners = data.past.pastOwners;

    const allOwners = currentOwners.concat(pastOwners);
    allOwners.sort((a, b) => b.trades - a.trades);

    const trades = allOwners.map((owner) => {
        return `<li>${owner.teamName} - <strong>${owner.trades}</strong></li>`;
    }).join('');

    const tradeHtml = `<div class="card-bottom-margin trade">
                        <figure class="card-bottom-margin">
                            <img src="../images/trade-history-2020.jpg" alt="Trade Chart" class="img" />
                            <figcaption class="time-stamp">Updated 12/1/20</figcaption>
                        </figure>
                        <article class="card container">
                            <h2 class="subtitle card-padding">All Time Trades</h2>                
                            <ul class="trade-list card-padding">${trades}</ul>
                        </article>
                      </div> `;


    main.innerHTML = tradeHtml;

};