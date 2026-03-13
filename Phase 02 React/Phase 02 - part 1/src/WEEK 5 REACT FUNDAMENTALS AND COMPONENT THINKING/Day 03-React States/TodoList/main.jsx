import { useState } from "react";
import {TaskForm} from "./taskForm";
// ============================================
// FILE: App.jsx  
// PURPOSE: Parent that uses ProductCard
// ============================================
export function App() {
    const [tasks, setTasks] = useState('');
return (
        <TaskForm tasks={tasks} setTasks={setTasks}/>
);
}
export default App