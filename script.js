document.addEventListener('DOMContentLoaded', function(){

const addButton = document.getElementById('add-task-btn');
const taskInput =document.getElementById('task-input');
const taskList = document.getElementById('task-list');

    function addTask(){
        let taskText=taskInput.value.trim();
        
        if (taskText===""){
            alert('Enter a Task');
            return;
        }
            let listItem =document.createElement('li');
            listItem.textContent=taskText;


            let Button= document.createElement('button');
            Button.textContent='Remove';
            Button.className('remove-btn');
            Button.onclick= function(){
                taskList.removeChild(listItem);
                
                listItem.appendChild('remove-btn');
                taskList.appendChild('listItem');
                taskInput.value="";
            }
            addButton.addEventListener('click',addTask);
            taskInput.addEventListener('keypress',function(event){
                if(event.key === 'Enter'){
                    addTask()
                }

            } )
        
    }
})