// Selecting elements
const addBtn = document.querySelector('#Add');
const todo_container = document.querySelector('.todo-container');
const inputTask = document.querySelector('#task');
const temp = document.querySelector('.temp');

// Check placeholder visibility
function checkPlaceholder() {
    temp.style.display = todo_container.children.length > 1 ? "none" : "block";
}

// Load tasks from localStorage on page load
function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        addTask(task.text, task.completed);
    });
}
window.onload = loadTasks;

// Save tasks to localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('.todo-txt-container span').forEach(task => {
        const taskItem = task.parentElement.parentElement;
        tasks.push({ text: task.textContent, completed: taskItem.querySelector('.checkboxes').checked });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a task
function addTask(taskText = inputTask.value.trim(), isCompleted = false) {
    if (inputTask.value === '') {
        alert('Please enter a task');
        return;
    }

    // Prevent duplicate tasks
    if ([...document.querySelectorAll('.todo-txt-container span')].some(t => t.textContent === taskText)) {
        alert('Task already exists!');
        return;
    }

    // Creating a new task item
    let taskItem = document.createElement('div');
    taskItem.classList.add('main-align');

    // Checkbox container
    let checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('checkbox-container');

    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.classList.add('checkboxes');
    checkBox.checked = isCompleted;

    // Task text container
    let taskTxtContainer = document.createElement('div');
    taskTxtContainer.classList.add('todo-txt-container');

    let taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.style.color = isCompleted ? "gray" : "#000";
    taskSpan.style.textDecoration = isCompleted ? "line-through" : "none";

    checkBox.addEventListener('click', function () {
        taskSpan.style.color = checkBox.checked ? "gray" : "#000";
        taskSpan.style.textDecoration = checkBox.checked ? "line-through" : "none";
        saveTasks();
    });

    checkboxContainer.appendChild(checkBox);
    taskTxtContainer.appendChild(taskSpan);

    // Remove button
    let removeBtn = document.createElement('div');
    removeBtn.classList.add('remove-btn');

    let removeImg = document.createElement('img');
    removeImg.src = './src/img/xmark-solid.svg'; // Ensure correct path
    removeImg.id = 'remove-img';

    removeBtn.appendChild(removeImg);

    removeBtn.addEventListener('click', function () {
        taskItem.style.opacity = 0;
        setTimeout(() => {
            taskItem.remove();
            checkPlaceholder();
            saveTasks();
        }, 300);
    });

    taskItem.appendChild(checkboxContainer);
    taskItem.appendChild(taskTxtContainer);
    taskItem.appendChild(removeBtn);

    todo_container.appendChild(taskItem);

    inputTask.value = '';
    checkPlaceholder();
    saveTasks();
}

// Event listeners
addBtn.addEventListener('click', addTask);

inputTask.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
