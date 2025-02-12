// Ensuring that all dom element are loaded before the script runs.
document.addEventListener('DOMContentLoaded', function () {
    // We need to make sure that we are selecting every checkbox in the dom.
    document.querySelectorAll('.checkbox-container input').forEach((checkbox) => {
        //Listen for a "change" event → Detects when the user checks/unchecks the box.
        checkbox.addEventListener('change', function () {
            // Find the corresponding task text (#todos) inside the .main-align div
            let taskTest = this.closest(".main-align").querySelector("#todos");

            // closest function finds the closed  path to parent main-align and then querySelector("#todos") selects the span with id=todo.

            // this refers to the checkbox that was clicked.
            if (this.checked) {
                taskTest.style.textDecoration = "line-through";
                taskTest.style.color = "#D8BFD8";
            } else {
                taskTest.style.textDecoration = "none";
                taskTest.style.color = "#000";
            }
        });
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("Add"); // Add button
    const taskInput = document.getElementById("task"); // Input field
    const todoContainer = document.querySelector(".todo-container"); // Task list container

    // Function to add a task
    function addTask() {
        let taskText = taskInput.value.trim(); // Get input value and remove extra spaces

        if (taskText === "") {
            alert("Please enter a task!"); // Prevent empty tasks
            return;
        }

        // Create a new task element
        let taskItem = document.createElement("div");
        taskItem.classList.add("main-align");

        // Create checkbox
        let checkboxContainer = document.createElement("div");
        checkboxContainer.classList.add("checkbox-container");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            let taskSpan = taskItem.querySelector("span");
            if (this.checked) {
                taskSpan.style.textDecoration = "line-through";
                taskSpan.style.color = "gray";
            } else {
                taskSpan.style.textDecoration = "none";
                taskSpan.style.color = "black";
            }
        });

        checkboxContainer.appendChild(checkbox);

        // Create task text
        let todoTxtContainer = document.createElement("div");
        todoTxtContainer.classList.add("todo-txt-container");

        let taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        todoTxtContainer.appendChild(taskSpan);

        // Create remove button
        let removeBtn = document.createElement("div");
        removeBtn.classList.add("remove-btn");

        let removeImg = document.createElement("img");
        removeImg.src = "https://prabhjotsinghubhi.github.io/TO-DO-List/src/img/xmark-solid.svg";
        removeImg.id = "remove-img";

        removeBtn.appendChild(removeImg);

        // Remove task on clicking the cross button
        removeBtn.addEventListener("click", function () {
            taskItem.remove();
        });

        // Append elements to the task item
        taskItem.appendChild(checkboxContainer);
        taskItem.appendChild(todoTxtContainer);
        taskItem.appendChild(removeBtn);

        // Add task to the container
        todoContainer.appendChild(taskItem);

        // Clear input field
        taskInput.value = "";
    }

    // Listen for the "Add" button click
    addButton.addEventListener("click", addTask);

    // Allow adding task by pressing "Enter"
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
