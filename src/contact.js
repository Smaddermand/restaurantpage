// src/contact.js

function createContactPage(){

    const content = document.getElementById('content');

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';

    const p = document.createElement('p');
    p.textContent = 'Reach out to us at +1-234-567-8901'; 

    content.appendChild(h1);
    content.appendChild(p);
}

export default createContactPage;