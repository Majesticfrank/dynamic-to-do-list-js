document.addEventListener('DOMContentLoaded', function() {
   const addButton = document.getElementById('add-task-btn');
   const taskInput = document.getElementById('task-input');
   const taskList = document.getElementById('task-list');

   function addTask() {
       let taskText = taskInput.value.trim();
       if (taskText === "") {
           alert('Enter a Task');
       } else {
           let listItem = document.createElement('li');
           listItem.textContent = taskText;

           let button = document.createElement('button');
           button.innerHTML = 'Remove';
           button.classList.add('remove-btn');

           button.addEventListener('click', function() {
               listItem.remove(); 
           });

           listItem.appendChild(button); 
           taskList.appendChild(listItem);

           taskInput.value = ""; 
       }
   }

   
   addButton.addEventListener('click', addTask);
   taskInput.addEventListener('keypress', function(event) {
       if (event.key === 'Enter') {
           addTask();
       }
   });
});
