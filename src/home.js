import pepperRestaurant from "./resources/pepper restaurant.png";

const content = document.querySelector("#content");

export const updateHome = () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    const image = document.createElement("img");
    image.src = pepperRestaurant;
    content.appendChild(image);

    const first_para = document.createElement("p");
    first_para.textContent = "Hey broskis! My restaurant serves the finest dishes!"
    content.appendChild(first_para);

    const second_para = document.createElement("p");
    second_para.textContent = "Beautiful pizzas.";
    content.appendChild(second_para);

    const third_para = document.createElement("p");
    third_para.textContent = "Amazing wine.";
    content.appendChild(third_para);

    const fourth_para = document.createElement("p");
    fourth_para.textContent = "Fantastic ambience.";
    content.appendChild(fourth_para);

    console.log("Loaded home page");
}



