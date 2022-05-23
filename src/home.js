export function renderHome() {
  // get container
  const mainContent = document.getElementById("main-content-container");

  //create new main content container
  const homeContentContainer = document.createElement("div");
  //remove current content container
  mainContent.innerHTML = "";
  //append main content container
  mainContent.appendChild(homeContentContainer);

  // creat H2
  const newH2 = document.createElement("h2");
  homeContentContainer.appendChild(newH2);
  newH2.classList.add("h2");
  newH2.innerHTML = `Welcome to the best restaurant in the world.`;
}
