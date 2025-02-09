const input_task = document.getElementById('task');

// Function to create the crossed-out effect on tasks.
const check_checkBox = (checkbox, todo) => {
    if (checkbox.checked) {
        todo.style.color = "gray";
        todo.style.textDecoration = "line-through";
    } else {
        todo.style.color = '#000';
        todo.style.textDecoration = "none";
    }
}

// Add tasks to the list.
const divToAdd = document.querySelector('.yourTask');

const addTasks = () => {
    if (input_task.value !== '') {
        let textToAdd = `
            <div class="tt">
                <div class="check">
                    <input type="checkbox" name="Task1" class="todo1">
                </div>
                <div class="label" id="labelfor">
                    <label for="todo1"><span class="todos">${input_task.value}</span></label>
                </div>
                <div class="remove-btn">
                    <img src="src/img/xmark-solid.svg" alt="jf" width="16px" height="16px">
                </div>
            </div>
        `;
        divToAdd.innerHTML += textToAdd;
        input_task.value = ''; // Clear the input field after adding the task
    }
};

// Event delegation for handling task removal and checkbox change
divToAdd.addEventListener('click', (event) => {
    // Handle checkbox click for toggling the strike-through effect
    if (event.target && event.target.classList.contains('todo1')) {
        const checkbox = event.target;
        const todo = checkbox.closest('.tt').querySelector('.todos');
        check_checkBox(checkbox, todo);
    }

    // Handle remove button click for removing the task
    if (event.target && event.target.closest('.remove-btn')) {
        const taskItem = event.target.closest('.tt');
        taskItem.remove(); // Remove the task item from the list
    }
});

// Handle adding the task when clicking the 'Add' button
const addBTn = document.getElementById('Add');

addBTn.addEventListener('click', addTasks);

// Save data to localStorage.
localStorage.setItem('content', 'This is my saved content');