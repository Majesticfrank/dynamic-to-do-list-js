document.addEventListener('DOMContentLoaded', function(){

const addButton = document.getElementById('add-task-btn');
const taskInput =document.getElementById('task-input');
const taskList = document.getElementById('task-list');

    function addTask(){
        let taskText=taskInput.value.trim();
        if (taskText===""){
            alert('Enter a Task');
        }else{
            let listItem =document.createElement('li');
            let Button= document.createElement('button');
            Button.innerHTML='Remove';
            Button.classList.add('remove-btn');
            Button.addEventListener('click', function(){
                listItem.remove();
                listItem.appendChild('remove-btn');
                taskList.appendChild('listItem');
                taskInput.value="";
            })
            addButton.addEventListener('click',addTask);
            taskInput.addEventListener('keypress',function(event){
                if(event.key === 'Enter'){
                    addTask()
                }

            } )
        }
    }
})