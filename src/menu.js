export function renderMenu() {
  // get container
  const mainContent = document.getElementById("main-content-container");

  //new main content container
  const menuContentContainer = document.createElement("div");
  mainContent.innerHTML = "";
  mainContent.appendChild(menuContentContainer);
  //menuContentContainer.classList.add("main-content-container");

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
}
