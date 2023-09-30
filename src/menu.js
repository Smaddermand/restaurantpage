// src/menu.js

function createMenuPage() {
    const content = document.getElementById('content');

    // Example - You can change as per your content
    const h1 = document.createElement('h1');
    h1.textContent = 'Our Menu';

    const p = document.createElement('p');
    p.textContent = 'Explore our wide range of delicious dishes.';

    content.appendChild(h1);
    content.appendChild(p);
}

export default createMenuPage;