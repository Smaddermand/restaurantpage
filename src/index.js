console.log("This is ruuuun from src/index.js");

import createHomePage from './home.js';
import createMenuPage from './menu.js';
import createContactPage from './contact.js'; 

//initial load
createHomePage();

document.getElementById("homeTab").addEventListener("click", () => {
    clearContent();
    createHomePage();
})

document.getElementById('menuTab').addEventListener('click', () => {
    clearContent();
    createMenuPage();
});

document.getElementById('contactTab').addEventListener('click', () => {
    clearContent();
    createContactPage();
});

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}