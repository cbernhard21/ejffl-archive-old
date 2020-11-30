export async function displayMainSummary() {
    const main = document.querySelector('#main');
    const response = await fetch('archive.json');
    const data = await response.json();
    const summary = data.summary;
    main.innerHTML = `<article class="card container card-bottom-margin" id="league-summary">
                        <h2 class="subtitle card-padding">League Overview</h2>
                        <p class="card-text card-padding">${data.summary.mainSummary1}</p>
                        <p class="card-text card-padding">${data.summary.mainSummary2}</p>
                      </article>
                      `
}