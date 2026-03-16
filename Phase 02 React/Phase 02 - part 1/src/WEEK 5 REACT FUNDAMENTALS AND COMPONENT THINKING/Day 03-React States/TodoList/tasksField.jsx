// Task component ko import karna mat bhooliyega
import Task from "./task"; 

export default function TasksField({ displayedTasks, handleDelete, handleToggle }) {
    return (
        <div className="flex flex-col gap-4 p-4 mt-4">
            {
                // JSX ke andar curly braces mein direct map chalayen
                displayedTasks.map((task) => (
                    <Task 
                        key={task.id} // Yeh React ke liye lazmi hai!
                        {...task}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))
            }
        </div>
    )
}