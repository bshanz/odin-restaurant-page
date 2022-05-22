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
    const menuItems = {
      'Grilled Octopus': 'Freshly caught in the Aegean. Mouth-watering.',
      'Chicken Parmesan': 'Imported from the Italian countryside.',
      'Pork Chops': 'Sevillian cattle, raised ethically.',
      'Shrimp Tempura Roll': 'Made by Master Chef, Jiro Ono.',
      'Lobster Mac & Cheese': 'The world\'s best Maine-caught lobster.',
      'BBQ Baby Back Ribs': 'Smoked by renowned pitmaster, Jess Pryles.',
      'Margherita Pizza': 'Fresh Mozzarella imported from Napoli, Italy.',
      'Jumbo Shrimp Cocktail': 'Served with a side of horseradish-spiked cocktail sauce.',
      'Wagyu Beef Tequila Tacos': 'Combined with the freshness of home-made salsa.',
    };

    for (key in menuItems) {
      const gridCard = document.createElement('div');
      const title = document.createElement('h3');
      const description = document.createElement('p');
      title.innerText = key;
      description.innerText = menuItems[key];
      gridCard.classList.add('grid-card');
      gridCard.appendChild(title);
      menuGrid.appendChild(gridCard);
    }

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
