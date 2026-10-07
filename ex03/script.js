let count = 0;

const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

function updateCount() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}

function incrementCount() {
    count = count + 1;
    updateCount();
}

function decrementCount() {
    count = count - 1;
    updateCount();
}

function resetCount() {
    count = 0;
    updateCount();
}

incrementButton.addEventListener("click", incrementCount);
decrementButton.addEventListener("click", decrementCount);
resetButton.addEventListener("click", resetCount);