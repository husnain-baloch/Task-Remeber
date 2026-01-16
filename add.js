const addTaskBtn=document.getElementById('addTaskBtn');
const taskList =document.getElementById('taskList');
const addInput =document.getElementById('add');

addTaskBtn.addEventListener('click',function(){
    const tasktext=addInput.value.trim();
    if(tasktext !==""){
        const li =document.createElement("li");
        li.textContent=tasktext;
        // for complete button
        const completeBtn=document.createElement('button');
        completeBtn.textContent='complete';
        completeBtn.classList.add('complete-btn');

        // creat delete button
        const deleteBtn=document.createElement('button');
        deleteBtn.textContent='Delete';
        deleteBtn.classList.add('delete-btn');

        // add button
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        // list
        taskList.appendChild(li);

        addInput.value="";

        // complete task when clicking "complete"
        completeBtn.addEventListener('click',function(){
            li.style.textDecoration='line-through';
            li.style.color='gray';
        });
        // delete
        deleteBtn.addEventListener ('click',function(){
            li.remove();
        });
    }else{
        alert("please write a task before adding !");
    }
    
});