document.addEventListener('DOMContentLoaded', function () {
    //selecting add button.
    const addBtn = document.querySelector('#add');
    const todo_container = document.querySelector('.todo-container');
    const inputTask = document.querySelector('#task');

    function addTask() {
        const task = inputTask.value.trim();

        // Check for empty values.
        if (task = "") {
            alert(`Please enter a task`);
            return;
        }

        // Creating a new element.
        let taskItem = document.createElement('div');
        taskItem.classList.add('main-align');

        //Creating a container for checkBox.
        let checkboxContainer = document.createElement('div')
        checkboxContainer.classList.add('checkbox-container')

        let checkBox = document.createElement('input')
        checkBox.type = "checkbox";
        checkBox.addEventListener('change', function () {
            let taskSpan = taskItem.querySelector("span");
            if (checkBox.checked) {
                taskSpan.style.color = "gray"
                taskSpan.style.textDecoration = "line-through"
            } else {
                taskSpan.style.color = "#000"
                taskSpan.style.textDecoration = "none"
            }
        })

        checkboxContainer.appendChild(checkBox);

        //Create task text.
        let taskTxtContainer = document.createElement('div')
        taskTxtContainer.classList.add('todo-txt-container')

        let taskSpan = document.createElement('span')
        taskSpan.textContent = task;

        taskTxtContainer.appendChild(taskSpan);

        //remove btn
        let removeBtn = document.createElement('div')
        removeBtn.classList.add('remove-btn')

        let removeImg = document.createElement('img')
        removeImg.src = 'src/img/xmark-solid.svg'
        removeImg.id = 'remove-img'

        removeBtn.appendChild(removeImg);

        removeBtn.addEventListener('click', function () {
            taskItem.remove()
        });

        taskItem.appendChild(taskTxtContainer)
        taskItem.appendChild(checkboxContainer)
        taskItem.appendChild(removeBtn)

        todo_container.appendChild(taskItem)

        task.value = '';
    }

    addBtn.addEventListener('click', addTask)
})