//generates header titles for a 4 column table
export const tableHeaderHtml = (title1, title2, title3, title4) => {
    return `<div class="grid-header grid-4">
                <h3>${title1}</h3>
                <h3 class="align-right">${title2}</h3>
                <h3 class="align-right">${title3}</h3>
                <h3 class="align-right">${title4}</h3>
            </div>`
};