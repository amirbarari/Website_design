const container = document.querySelector(".container");
const btn = document.querySelector(".toggle-mode");

btn.addEventListener("click", () => {
    container.classList.toggle("dark-mode") ? black() : white();
});
function black() {
    btn.firstElementChild.className = "far fa-moon";
    setTimeout(() => {
        btn.style.backgroundColor = 'white';
        btn.style.color = 'black';
        container.style.backgroundColor = '#262626';
    }, 2000);

}
function white() {
    btn.firstElementChild.className = "far fa-sun";
    btn.style.backgroundColor = 'black';
    btn.style.color = 'white';
    container.style.backgroundColor = 'white';

}