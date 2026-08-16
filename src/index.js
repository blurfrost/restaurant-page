import "./styles.css";
import { updateHome } from "./home";

updateHome();

const homeButton = document.querySelector("#home");

homeButton.addEventListener("click", updateHome);