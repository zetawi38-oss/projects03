const title = document.getElementById("title");
const description = document.querySelector(".description");
const box = document.getElementById("box");
const button = document.getElementById("changeButton");

button.addEventListener("click", function () {
    title.textContent = "JavaScript Changed This Title";
    description.textContent = "The text has been changed!";
    box.style.color = "blue";
    box.classList.add("active");
});