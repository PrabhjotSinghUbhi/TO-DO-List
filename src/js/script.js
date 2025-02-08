const addDiv = document.querySelector('.yourTask')
const addBtn = document.getElementById('Add')
const mm = document.getElementById('mm')

const todo1 = document.getElementById('todo1')
const todoLabel = document.getElementById('labelfor')

const task = document.getElementById('task')
const addTask = document.getElementById('addTask')

changeColor = function () {

    addBtn.style.background = 'gray';
    addBtn.style.color = '#fff';

    setTimeout(() => {

        addBtn.style.background = '#000';
        addBtn.style.color = '#fff';

    }, 500);
}
addBtn.addEventListener('click', changeColor);

// To change the strick through line.
const checkBox = () => todo1.checked

todo1.addEventListener('click', () => {
    if (checkBox()) {
        todoLabel.style.textDecoration = 'line-through';
        todoLabel.style.color = 'gray';
    } else {
        todoLabel.style.textDecoration = 'none'
        todoLabel.style.color = '#000'
    }
});

let text = `
<div class="yourTask">
    <div class="tt">
        <div class="check"> <input type="checkbox" name="Task1" id="todo1"></div>
        <div class="label" id="labelfor"> <label for="todo1">Create a javascript project.</label> </div>
    </div>
</div>
`
addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addTask.innerHTML = text
    addTask.append()
})