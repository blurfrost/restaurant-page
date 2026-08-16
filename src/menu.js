import pepperBird from "./resources/pepper bird.png";
import pepperPig from "./resources/pepper pig.png";
import pepperSheep from "./resources/pepper sheep.png";

const content = document.querySelector("#content");

export const updateMenu = () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const menu_header = document.createElement("h2");
    menu_header.textContent = "Grand Menu"
    content.appendChild(menu_header);

    const pig_price = document.createElement("p");
    pig_price.textContent = "Pepper Pig: $6.70"
    content.appendChild(pig_price);

    const pig = document.createElement("img");
    pig.src = pepperPig;
    content.appendChild(pig);

    const sheep_price = document.createElement("p");
    sheep_price.textContent = "Pepper Sheep: $6.90"
    content.appendChild(sheep_price);

    const sheep = document.createElement("img");
    sheep.src = pepperSheep;
    content.appendChild(sheep);

    const bird_price = document.createElement("p");
    bird_price.textContent = "Pepper Bird: $7.20"
    content.appendChild(bird_price);

    const bird = document.createElement("img");
    bird.src = pepperBird;
    content.appendChild(bird);

    console.log("Loaded menu page");
}