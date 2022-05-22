import _ from "lodash";
import "./style.css";

import { renderHome } from './home.js';
import { renderMenu } from './menu.js';
import { renderContact } from './contact.js';

// initiate currentView to know what page user is looking at

let currentView = "";

// function to switch to home when clicked

document.getElementById("home").addEventListener("click", (e) => {
    renderHome();
    currentView = "home";
});

// function to switch to menu when clicked

document.getElementById("menu").addEventListener("click", (e) => {
    renderMenu();
    currentView = "menu";
});

// function to switch to contact when clicked

document.getElementById("contact").addEventListener("click", (e) => {
    renderContact();
    currentView = "contact";
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

  document.getElementById("footer").innerHTML =
      months[date.getMonth()] + " " + date.getFullYear();
};
