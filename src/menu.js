export function renderMenu() {
    //create the new elements and apply classes

    const container = document.getElementById('main-content-container');
    container.innerHTML = ''
    const menuContentContainer = document.createElement("div");
    container.appendChild(menuContentContainer);
    menuContentContainer.classList.add("main-content-container");

    //new menu grid to hold the cards

    const menuGrid = document.createElement("div");
    menuContentContainer.appendChild(menuGrid);
    menuGrid.classList.add("menu-grid");

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

    for (const key in menuItems) {
      const gridCard = document.createElement('div');
      const title = document.createElement('h3');
      const description = document.createElement('p');
      title.innerText = key;
      description.innerText = menuItems[key];
      gridCard.classList.add('grid-card');
      gridCard.appendChild(title);
      gridCard.appendChild(description);
      menuGrid.appendChild(gridCard);
    }
}
