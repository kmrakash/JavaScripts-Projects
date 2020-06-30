const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// function call to load all event Listener
loadEventListener();

//Load All Event Listeners
function loadEventListener() {
    //DOM load Event
    document.addEventListener('DOMContentLoaded', getTasks);

    // eventListener to Submit button
    form.addEventListener('submit', addTask);

    // EventListener to Remove Tasks
    taskList.addEventListener('click', removeTask);

    // Clear task event
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);

}

// Add Task Function
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a Task');
    }

    // Create and Add to Task List
    createTask(taskInput.value);

    // Add in localStorage
    storeTaskInLocalStorage(taskInput.value);

    // clear Input Field
    taskInput.value = "";
    e.preventDefault();
}

// Remove Task Function
function removeTask(e) {
    // grab the task item
    let task = e.target.parentElement
    // grab the mouseEvent on Delete Icon
    if (task.classList.contains('delete-item')) {
        // Alert a confirmation message
        if (confirm("Are You Sure")) {
            // remove the li element
            task.parentElement.remove();

            // remove from local storage
            removeTaskFromLocalStorage(task.parentElement);
        }

    }
}

// Clear All Tasks
function clearTasks() {

    // taskList.innerHTML = "";

    // Fast and better way
    if (confirm("Are you sure to delete all task")) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }

    // Clear From Local Storage
    clearTasksFromLocalStorage();

}

function clearTasksFromLocalStorage() {
    localStorage.clear();
}


// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    // querySelector return node list
    document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const item = task.firstChild.textContent;
            if (item.toLocaleLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    )
}

// Store Task
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get Tasks from Local Storage
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task) {
        createTask(task);
    })
}

// create a Task element 
function createTask(inputValue) {
    //Add a list element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(inputValue));
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

    taskList.appendChild(li);
}

// Remove From Local Storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}