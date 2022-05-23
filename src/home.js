export function renderHome() {

    const container = document.getElementById('main-content-container');
    container.innerHTML = ''
    const homeContentContainer = document.createElement("div");
    container.appendChild(homeContentContainer);
    homeContentContainer.classList.add("main-content-container");

    // creat H2

    const newH2 = document.createElement("h2");
    homeContentContainer.appendChild(newH2);
    newH2.classList.add("h2");
    newH2.innerHTML = `Welcome to the best restaurant in the world.`;

}
