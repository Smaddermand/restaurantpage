

function createMenuPage(){
    const content = document.getElementById('content');

    const h1 = document.createElement("h1");
    h1.textContent = "Menu";

    const p = document.createElement("p");
    p.textContent = "Here is our menu!";

    content.appendChild(h1);
    content.appendChild(p);

}

export default createMenuPage;