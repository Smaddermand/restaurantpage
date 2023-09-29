// src/home.js

function createHomePage() {
    const content = document.getElementById('content');

    const img = document.createElement('img');
    img.src = 'dist/img/82db1add944baebf83cbf669266ec707.jpeg'; // replace with the actual URL/path of your image
    img.alt = 'Restaurant Image';

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to My Restaurant!';

    const p = document.createElement('p');
    p.textContent = 'My Restaurant is a wonderful place that offers delicious food and comfortable ambiance.';

    content.appendChild(img);
    content.appendChild(h1);
    content.appendChild(p);
}

export default createHomePage;
