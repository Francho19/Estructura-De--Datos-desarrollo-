
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const taskCounter = document.getElementById('task-counter');

let tasks = []; 


function updateCounter() {
    taskCounter.textContent = `Tareas pendientes: ${tasks.length}`;
}

function deleteTask(index) {
    tasks.splice(index, 1); 
    renderTasks();          
}

function renderTasks() {
    taskList.innerHTML = ''; 

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

       
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', () => deleteTask(index));

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    updateCounter(); 
}


taskForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push(taskText); // Agregar al array
        renderTasks();        // Mostrar tareas
        taskInput.value = ''; // Limpiar input
        taskInput.focus();    // Mantener el foco en el input
    }
});