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

// Select the node that will be observed for mutations
const targetNode = document.querySelector("nav");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.");
      darkMode();
      observer.disconnect();
    } else if (mutation.type === "attributes") {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

if (window.localStorage.getItem('darkmode') == 'TRUE') {
    let element = document.querySelector("body");

    element.classList.remove('light');
    element.classList.remove('dark');
    element.classList.add('dark');
    document.getElementById('theme-btn').innerHTML = 'dark_mode';
}

async function darkMode() {
    let element = document.querySelector("body");

    const themeBtn = document.getElementById("theme-btn");
    if (window.localStorage.getItem('darkmode') == 'TRUE') {
        element.classList.remove('light');
        element.classList.add('dark');
        themeBtn.innerHTML = 'light_mode';
    }
    themeBtn.onclick = () => {
        if (themeBtn.innerHTML === 'dark_mode') {
            element.classList.remove('light');
            element.classList.add("dark");
            themeBtn.innerHTML = 'light_mode';
            window.localStorage.setItem('darkmode', 'TRUE');
        } else {
            element.classList.remove('dark');
            element.classList.add("light");
            themeBtn.innerHTML = 'dark_mode';
            window.localStorage.setItem('darkmode', 'FALSE');
        }
    }
}



const parallax = document.querySelector('main');

window.addEventListener("scroll", function () {
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset * .8 + "px";
});