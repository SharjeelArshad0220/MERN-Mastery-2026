import { useState } from "react";
export function TodoTracker() {
    const [taskInput,setTaskInput]=useState('')
    const [todos,setTodos]=useState([])
    const handleSubmit = (event) => {
        event.preventDefault(); // Page reload hone se rokega!
        
        // 1. Array mein naya task add karein (Spread operator use karke)
        setTodos(prevTodos => [...prevTodos, taskInput]);
        
        // 2. Input box ko wapas khali kar dein
        setTaskInput('');
    };
    const deleteTask=(index)=>setTodos(prevTodos=>prevTodos.filter((todo,todoIndex)=>todoIndex!==index))
    
    return (
        <>
        <form action="" onSubmit={handleSubmit}>    
        <input 
         className="w-1/2 px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white task"
                
        type="text" 
        name="task" 
        id="task"  
        value={taskInput} 
        onChange={
            (event)=>
            setTaskInput(event.target.value)
            }/>

        <input 
        className="bg-blue-600 hover:bg-blue-700 text-white m-4 font-medium px-4 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="submit" 
        value="Add Task" 
        disabled={!taskInput}
        />
        </form>
        <ul>
            {
                todos.map((todo,index)=>(
                <li 
                className="flex justify-between w-1/2 items-center bg-white dark:bg-gray-700 p-2 mb-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"
                id="TaskList" 
                key={index}>
                    {todo}
                    <button 
                    title="Task Done" 
                    data-id={index}
                    className="text-green-500 hover:text-green-700 bg-gray-500 rounded-md hover:shadow-lg hover:bg-gray-400 font-bold text-xl"
                    onClick={()=>deleteTask(index)}>✔</button>
                </li>))
            }
        </ul>
        </>
    );
}
export default TodoTracker