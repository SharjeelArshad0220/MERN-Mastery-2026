import { addTask, deleteTask, toggleTask, getTodos } from "./todoManager.js";
// adding tasks
// addTask("Subah 5:30 Uthna");
// addTask("Fajar Namaz");
// addTask("Quran Recitation");
// addTask("Morning Walk");
// addTask("Nashta (Eggs & Bread)");
// addTask("Commute to Office");
// addTask("Check Emails");
// addTask("Daily Standup Meeting");
// addTask("Coding: Bug Fixes");
// addTask("Lunch Break");
// viewing list of tasks added
// console.log("after adding", getTodos());
// // getting a copy of list 
// const currentList = getTodos();
// // retrieving first task of the list 
// const firstTaskId = currentList[0].id;
// // deleting first task 
// deleteTask(firstTaskId);
// // viewing list of tasks after deletion
// console.log("After delete", getTodos());
// // achieved last task's id to toggle its status 
// const lastTaskId = currentList[currentList.length - 1].id;
// // toggle status of completion of last task 
// toggleTask(lastTaskId);
// // viewing list of tasks After toggle
// console.log("after toggleTask", getTodos());



function renderTodos() {
    const list_Box = document.getElementById("todo-list");
    list_Box.innerHTML = "";
    const my_list = getTodos();
    const text_taskList = my_list.map(task => task = `<li style="border-bottom: 1px solid #ccc; padding: 10px;">
            <strong><b>ID: </b>${task.id}</strong><br>
            <strong><b>Task: </b>${task.text}</strong> 
            <span>${task.isCompleted ? "✅" : "❌"}</span>
            </li>`).join('');
        list_Box.innerHTML += text_taskList;
    
}
function TaskAdder(){
    const inputField=document.getElementById("task-input");
    const addBtn=document.getElementById("add-btn");
    addBtn.addEventListener('click',()=>
    {
        const task=inputField.value; 
        if(task !==""){
            addTask(task);
            renderTodos();
            inputField.value="";
        }
        else{
            alert("Plz enter task first.")
        }
    }
    )
}
TaskAdder();