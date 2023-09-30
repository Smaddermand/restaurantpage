console.log("This is ruuuun from src/index.js");
import './style.css';

import createHomePage from './home.js';
import createMenuPage from './menu.js';
import createContactPage from './contact.js'; 

//initial load
createHomePage();

document.getElementById("homeTab").addEventListener("click", () => {
    clearContent();
    document.getElementById('homeTab').classList.add('active');
    document.getElementById('contactTab').classList.remove('active');
    document.getElementById('menuTab').classList.remove('active');
    createHomePage();
})

document.getElementById('menuTab').addEventListener('click', () => {
    clearContent();
    document.getElementById('homeTab').classList.remove('active');
    document.getElementById('contactTab').classList.remove('active');
    document.getElementById('menuTab').classList.add('active');
    createMenuPage();
});

document.getElementById('contactTab').addEventListener('click', () => {
    clearContent();
    document.getElementById('homeTab').classList.remove('active');
    document.getElementById('contactTab').classList.add('active');
    document.getElementById('menuTab').classList.remove('active');
    createContactPage();
});

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

