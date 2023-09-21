import { loadHeaderFooter } from './utils.mjs';
import Portfolio from './Portfolio.js';

loadHeaderFooter();



async function fetchData() {
    let response = await fetch('../json/portfolio.json');
    console.log(response);
    let data = await response.json();
    let portfolio = data.portfolio;

    console.log("portfolio var: " + portfolio);
    console.log(data.portfolio);

    let portfolioCards = new Array();
    let i = 0;
    
    portfolio.forEach(element => {
        portfolioCards[i] = new Portfolio(element.name, element.link, element.github, element.thumbnail);
        i++;
    });

    return portfolio;
}

async function ConsoleLogPortfolio() {
    const items = await fetchData();
    items.forEach(element => {
        console.log(element);
    })
}
ConsoleLogPortfolio();