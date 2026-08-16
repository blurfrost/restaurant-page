import "./styles.css";
import { updateHome } from "./home";
import { updateMenu } from "./menu";

updateHome();

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", updateHome);

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", updateMenu);