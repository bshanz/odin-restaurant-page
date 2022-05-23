export function renderContact() {

    const container = document.getElementById('main-content-container');
    container.innerHTML = ''
    const contactContentContainer = document.createElement("div");
    container.appendChild(contactContentContainer);
    contactContentContainer.classList.add("main-content-container");

    // creat H2

    const newH2 = document.createElement("h2");
    contactContentContainer.appendChild(newH2);
    newH2.classList.add("h2");
    newH2.innerHTML = `Call us: 201-582-7189`;
}
