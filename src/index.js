import _ from "lodash";
import "./style.css";
import "./home.js";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact.js";

// cache the dom

const mainContent = document.getElementById("main-content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");
const footer = document.getElementById("footer");
const mainContentContainer = document.getElementById("main-content-container");

// initiate currentView to know what page user is looking at

let currentView = "";

// function to switch to home when clicked

homeButton.addEventListener("click", (e) => {
  renderHome();
});

// function to switch to menu when clicked

menuButton.addEventListener("click", (e) => {
  renderMenu();
});

// function to switch to contact when clicked

contactButton.addEventListener("click", (e) => {
  renderContact();
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
