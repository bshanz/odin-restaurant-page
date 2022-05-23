export function renderContact() {
  // get container
  const mainContent = document.getElementById("main-content-container");

  //new main content container
  const contactContentContainer = document.createElement("div");
  // clear existing main content
  mainContent.innerHTML = "";
  //append main content child
  mainContent.appendChild(contactContentContainer);

  // creat H2

  const newH2 = document.createElement("h2");
  contactContentContainer.appendChild(newH2);
  newH2.classList.add("h2");
  newH2.innerHTML = `Call us: 201-582-7189`;
}
