const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load All Event Listeners
function loadEventListener() {

    form.addEventListener('submit', addTask);
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a Task');
    }

    //Add a list element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //  Create link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content';
    // Add icon
    link.innerHTML = '<i class="fas fa-trash"></i>';
    console.log(link);
    // Append link to li
    li.appendChild(link);
    // Add to task List
    console.log(li);
    taskList.appendChild(li);

    taskInput.value = "";
    e.preventDefault();
}

loadEventListener();