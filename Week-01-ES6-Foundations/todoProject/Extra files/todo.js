let todos=[];
const addTask=(taskName)=> {todos.push({id:Date.now(),text:taskName,isCompleted:false});
console.log(`Task added ${taskName}`);};
addTask("Integrity Session");

addTask("Learn Modules");

addTask("Sleep at 10 PM");

const deleteTask=(id)=>{
    const update=todos.filter(task=> task.id !==id)//it says task add krna ha but woh jismy task ki id given id k equal nhi matlab jo id match kr gayi ussy chor do.
    todos=update;
}
const idtoDelete=todos[0].id;
deleteTask(idtoDelete);
console.log(todos);

const toggleTask=(id)=>{
    const newlist=todos.map(task=> task.id===id?{...task,isCompleted:!task.isCompleted}:task);
    todos=newlist;
}
const idToUpdate=todos[0].id;
toggleTask(idToUpdate);
console.log(todos);