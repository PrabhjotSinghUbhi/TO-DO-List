document.addEventListener('DOMContentLoaded', function () {
    // Selecting elements
    const addBtn = document.querySelector('#Add');
    const todo_container = document.querySelector('.todo-container');
    const inputTask = document.querySelector('#task');
    const temp = document.querySelector('.temp');

    function checkPlaceholder() {
        if (todo_container.children.length > 1) {
            temp.remove();
        } 
    }

    function addTask() {
        const task = inputTask.value.trim();

        if (task === '') {
            alert('Please enter a task');
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

        checkBox.addEventListener('click', function () {
            taskSpan.style.color = checkBox.checked ? "gray" : "#000";
            taskSpan.style.textDecoration = checkBox.checked ? "line-through" : "none";
        });

        checkboxContainer.appendChild(checkBox);

        // Task text container
        let taskTxtContainer = document.createElement('div');
        taskTxtContainer.classList.add('todo-txt-container');

        let taskSpan = document.createElement('span');
        taskSpan.textContent = task;

        taskTxtContainer.appendChild(taskSpan);

        // Remove button
        let removeBtn = document.createElement('div');
        removeBtn.classList.add('remove-btn');

        let removeImg = document.createElement('img');
        removeImg.src = 'src/img/xmark-solid.svg';
        removeImg.id = 'remove-img';

        removeBtn.appendChild(removeImg);

        removeBtn.addEventListener('click', function () {
            taskItem.remove();
            checkPlaceholder();
        });

        taskItem.appendChild(checkboxContainer);
        taskItem.appendChild(taskTxtContainer);
        taskItem.appendChild(removeBtn);

        todo_container.appendChild(taskItem);

        inputTask.value = '';

        // Check for placeholder removal
        checkPlaceholder();
    }

    addBtn.addEventListener('click', addTask);
    inputTask.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
