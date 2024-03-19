const container = document.querySelector(".container");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

color2.addEventListener("click", () => {
    container.classList.add("change-color");
});

color1.addEventListener("click", () => {
    container.classList.remove("change-color");
});
