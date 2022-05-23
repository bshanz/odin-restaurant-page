import _ from "lodash";
import "./style.css";

// cache the dom

const mainContent = document.getElementById("main-content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");
const footer = document.getElementById("footer");
const mainContentContainer = document.getElementById("main-content-container");

// initiate new content variables
let menuContentContainer;
let homeContentContainer;
let contactContentContainer;
let newH2;

// let newH2;

// initiate currentView to know what page user is looking at

let currentView = "";

// function to switch to home when clicked

homeButton.addEventListener("click", (e) => {
  if (currentView === "menu" || currentView === "contact") {
    if (currentView === "menu") {
      const target = e.target;

      // remove the existing content
      menuContentContainer.remove();
    } else if (currentView === "contact") {
      // if view is contact
      const target = e.target;

      // remove the existing content
      contactContentContainer.remove();
    }
    //new main content container
    homeContentContainer = document.createElement("div");
    mainContent.appendChild(homeContentContainer);
    homeContentContainer.classList.add("main-content-container");

    // creat H2

    newH2 = document.createElement("h2");
    homeContentContainer.appendChild(newH2);
    newH2.classList.add("h2");
    newH2.innerHTML = `Welcome to the best restaurant in the world.`;

    currentView = "home";
  }
});

// function to switch to menu when clicked

menuButton.addEventListener("click", (e) => {
  if (currentView != "menu") {
    if (currentView === "onload") {
      const target = e.target;
      //remove the existing content
      mainContentContainer.remove();
    } else if (currentView === "home") {
      const target = e.target;
      //remove the existing content
      homeContentContainer.remove();
    } else {
      // if view is contact
      const target = e.target;
      //remove the existing content
      contactContentContainer.remove();
    }
    //create the new elements and apply classes

    //new main content container
    menuContentContainer = document.createElement("div");
    mainContent.appendChild(menuContentContainer);
    menuContentContainer.classList.add("main-content-container");

    //new menu grid to hold the cards

    const menuGrid = document.createElement("div");
    menuContentContainer.appendChild(menuGrid);
    menuGrid.classList.add("menu-grid");

    //new grid card one

    const gridCardOne = document.createElement("div");
    menuGrid.appendChild(gridCardOne);
    gridCardOne.classList.add("grid-card");

    const oneH3 = document.createElement("h3");
    gridCardOne.appendChild(oneH3);
    oneH3.innerText = `Grilled Octopus`;

    const oneP = document.createElement("p");
    gridCardOne.appendChild(oneP);
    oneP.innerText = `Freshly caught in the Aegean. Mouth-watering.`;

    //new grid card two

    const gridCardTwo = document.createElement("div");
    menuGrid.appendChild(gridCardTwo);
    gridCardTwo.classList.add("grid-card");

    const twoH3 = document.createElement("h3");
    gridCardTwo.appendChild(twoH3);
    twoH3.innerText = `Chicken Parmesan`;

    const twoP = document.createElement("p");
    gridCardTwo.appendChild(twoP);
    twoP.innerText = `Imported from the Italian countryside.`;

    //new grid card three

    const gridCardThree = document.createElement("div");
    menuGrid.appendChild(gridCardThree);
    gridCardThree.classList.add("grid-card");

    const threeH3 = document.createElement("h3");
    gridCardThree.appendChild(threeH3);
    threeH3.innerText = `Pork Chops`;

    const threeP = document.createElement("p");
    gridCardThree.appendChild(threeP);
    threeP.innerText = `Sevillian cattle, raised ethically.`;

    //new grid card four

    const gridCardFour = document.createElement("div");
    menuGrid.appendChild(gridCardFour);
    gridCardFour.classList.add("grid-card");

    const fourH3 = document.createElement("h3");
    gridCardFour.appendChild(fourH3);
    fourH3.innerText = `Shrimp Tempura Roll`;

    const fourP = document.createElement("p");
    gridCardFour.appendChild(fourP);
    fourP.innerText = `Made by Master Chef, Jiro Ono.`;

    //new grid card five

    const gridCardFive = document.createElement("div");
    menuGrid.appendChild(gridCardFive);
    gridCardFive.classList.add("grid-card");

    const fiveH3 = document.createElement("h3");
    gridCardFive.appendChild(fiveH3);
    fiveH3.innerText = `Lobster Mac & Cheese`;

    const fiveP = document.createElement("p");
    gridCardFive.appendChild(fiveP);
    fiveP.innerText = `The world's best Maine-caught lobster.`;

    //new grid card six

    const gridCardSix = document.createElement("div");
    menuGrid.appendChild(gridCardSix);
    gridCardSix.classList.add("grid-card");

    const sixH3 = document.createElement("h3");
    gridCardSix.appendChild(sixH3);
    sixH3.innerText = `BBQ Baby Back Ribs`;

    const sixP = document.createElement("p");
    gridCardSix.appendChild(sixP);
    sixP.innerText = `Smoked by renowned pitmaster, Jess Pryles.`;

    //new grid card seven

    const gridCardSeven = document.createElement("div");
    menuGrid.appendChild(gridCardSeven);
    gridCardSeven.classList.add("grid-card");

    const sevenH3 = document.createElement("h3");
    gridCardSeven.appendChild(sevenH3);
    sevenH3.innerText = `Margherita Pizza`;

    const sevenP = document.createElement("p");
    gridCardSeven.appendChild(sevenP);
    sevenP.innerText = `Fresh Mozzarella imported from Napoli, Italy.`;

    //new grid card eight

    const gridCardEight = document.createElement("div");
    menuGrid.appendChild(gridCardEight);
    gridCardEight.classList.add("grid-card");

    const eightH3 = document.createElement("h3");
    gridCardEight.appendChild(eightH3);
    eightH3.innerText = `Jumbo Shrimp Cocktail`;

    const eightP = document.createElement("p");
    gridCardEight.appendChild(eightP);
    eightP.innerText = `Served with a side of horseradish-spiked cocktail sauce.`;

    //new grid card nine

    const gridCardNine = document.createElement("div");
    menuGrid.appendChild(gridCardNine);
    gridCardNine.classList.add("grid-card");

    const nineH3 = document.createElement("h3");
    gridCardNine.appendChild(nineH3);
    nineH3.innerText = `Wagyu Beef Tequila Tacos`;

    const nineP = document.createElement("p");
    gridCardNine.appendChild(nineP);
    nineP.innerText = `Combined with the freshness of home-made salsa.`;

    // set the current view to menu
    currentView = "menu";
  }
});

// function to switch to contact when clicked

contactButton.addEventListener("click", (e) => {
  if (currentView != "contact") {
    if (currentView === "home") {
      const target = e.target;

      //remove the existing content
      homeContentContainer.remove();
    } else if (currentView === "onload") {
      const target = e.target;

      //remove the existing content
      mainContentContainer.remove();
    } else if (currentView === "menu") {
      const target = e.target;

      //remove the existing content
      menuContentContainer.remove();
    }
    //new main content container
    contactContentContainer = document.createElement("div");
    mainContent.appendChild(contactContentContainer);
    contactContentContainer.classList.add("main-content-container");

    // creat H2

    newH2 = document.createElement("h2");
    contactContentContainer.appendChild(newH2);
    newH2.classList.add("h2");
    newH2.innerHTML = `Call us: 201-582-7189`;

    currentView = "contact";
  }
});

// set date in footer

window.onload = function () {
  currentView = "onload";

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date();

  footer.innerHTML = months[date.getMonth()] + " " + date.getFullYear();
};
