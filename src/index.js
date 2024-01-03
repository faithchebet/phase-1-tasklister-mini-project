
  // your code here

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('create-task-form');
    const taskInput = document.getElementById('new-task-description');
    const taskList = document.getElementById('tasks');
    const submit =document.getElementById('delete-task')

    form.addEventListener('submit', function (event) {
      event.preventDefault(); 

      
      const taskDescription = taskInput.value;

    
      const newTask = document.createElement('li');
      newTask.textContent = taskDescription;
      taskList.appendChild(newTask);

      const deleteTask = document.createElement('li');
      deleteTask.textContent = taskDeletes;
      taskList.appendChild(deleteTask);

      
      taskInput.value = '';
    });
  })
