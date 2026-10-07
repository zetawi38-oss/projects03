const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

function updateCounter() {
    taskCount.textContent = totalTasks;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    const taskTextElement = document.createElement("span");
    const deleteButton = document.createElement("button");

    taskTextElement.textContent = taskText;
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");

    taskTextElement.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
        totalTasks = totalTasks - 1;
        updateCounter();
    });

    li.appendChild(taskTextElement);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    totalTasks = totalTasks + 1;
    updateCounter();

    taskInput.value = "";
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});