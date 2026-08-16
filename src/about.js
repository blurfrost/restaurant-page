const content = document.querySelector("#content");

export const updateAbout = () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const home_header = document.createElement("h2");
    home_header.textContent = "About our establishment"
    content.appendChild(home_header);

    const about_desc = document.createElement("p");
    about_desc.textContent = "We only source our food from sustainable sources. We love food! Yum yum om nom nom"
    content.appendChild(about_desc);

    console.log("Loaded about page");
}