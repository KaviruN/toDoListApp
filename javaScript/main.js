document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = taskInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = '';
}
