let rulesContainer = document.getElementById("rulesContainer");

let openRules = () => {
    rulesContainer.classList.remove("hide");
} 
let closeRules = () => {
    rulesContainer.classList.add("hide");
}
let goToHomePage = () => {
    window.location.href = "./index.html";
}