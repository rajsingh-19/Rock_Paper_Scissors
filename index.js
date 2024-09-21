let rulesContainer = document.getElementById("rulesContainer");

let rulesToggling = () => {
    rulesContainer.classList.toggle("hide");
} 
let closeRules = () => {
    rulesContainer.classList.add("hide");
}
let goToHomePage = () => {
    window.location.href = "./index.html";
}