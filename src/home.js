// src/home.js

import './style.css';
import Eggrestaurant from './img/Eggrestaurant.jpeg';


function createHomePage() {
    const content = document.getElementById('content');

    const img = document.createElement('img');
    img.src = Eggrestaurant;
    img.alt = 'Restaurant Image';

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to My Restaurant!';
    h1.classList.add('hello');

    const p = document.createElement('p');
    p.textContent = 'My Restaurant is a wonderful place that offers delicious food and comfortable ambiance.';

    content.appendChild(img);
    content.appendChild(h1);
    content.appendChild(p);
}

export default createHomePage;
