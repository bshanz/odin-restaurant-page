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

  document.getElementById("footer").innerHTML =
      new Date().toLocaleDateString(undefined, {
        month: 'long',
        year: 'numeric',
      });
};
