import "./styles.css";
import { updateHome } from "./home";
import { updateMenu } from "./menu";
import { updateAbout } from "./about";

updateHome();

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", updateHome);

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", updateMenu);

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", updateAbout);