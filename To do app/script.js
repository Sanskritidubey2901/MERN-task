let tasks = [];

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <input type="checkbox" data-index="${index}" ${task.done ? 'checked' : ''}>
            <span class="${task.done ? 'done' : ''}">${task.text}</span>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        taskList.appendChild(taskDiv);
    });
}

// Function to add task
function addTask(task) {
    tasks.push(task);
    displayTasks();
}

// Function to delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Function to toggle task done status
function toggleTaskDone(index) {
    tasks[index].done = !tasks[index].done;
    displayTasks();
}

// Event listener for add task button click
document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask({ text: taskText, done: false });
        taskInput.value = '';
    }
});

// Event listener for delete button click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        deleteTask(index);
    }
});

// Event listener for checkbox change
document.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        const index = e.target.dataset.index;
        toggleTaskDone(index);
    }
});

displayTasks();