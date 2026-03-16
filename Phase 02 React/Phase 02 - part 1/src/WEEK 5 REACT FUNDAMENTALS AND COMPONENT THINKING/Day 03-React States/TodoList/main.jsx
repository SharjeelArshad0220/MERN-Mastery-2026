import { useState } from "react";
import TaskForm from "./taskForm";
import Header from "./header.jsx";
import FilterOptions from "./filterOption.jsx";
import SortOptions from "./sortOptions.jsx";
import TasksField from './tasksField.jsx';
import { onDelete, toggleStatus, sortByDate, sortByPriority } from "./utility.js";
// ============================================
// FILE: App.jsx  
// PURPOSE: Parent that uses ProductCard
// ============================================
export function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');
    const [sort, setSort] = useState('Date');
    const [view, setView] = useState('form');
    const handleDelete = (id) => setTasks((prevState) => onDelete(id, prevState))
    const handleToggle = (id) => setTasks((prevState) => toggleStatus(id, prevState))
    let displayedTasks = [...tasks]
    if (filter === 'Completed') {
        displayedTasks = displayedTasks.filter(task => task.isCompleted)
    }
    else if (filter === 'Remaining') {
        displayedTasks = displayedTasks.filter(task => !task.isCompleted)
    }
    if (sort === 'Date') {
        displayedTasks = sortByDate(displayedTasks)
    }
    else if (sort === 'Priority') {
        displayedTasks = sortByPriority(displayedTasks)
    }
    return (
        <div className="App-container">
            <Header view={view} setView={setView} />

            {/* Outer Window */}
            <div className="w-full overflow-hidden">

                {/* Inner Train (200% width) */}
                <div className={`flex w-[200%] transition-transform duration-500 ease-in-out ${view === 'list' ? '-translate-x-1/2' : 'translate-x-0'}`}>

                    {/* Dabba 1: Form (Iska size 1/2 yaani 50% hoga) */}
                    <div className="w-1/2">
                        <TaskForm tasks={tasks} setTasks={setTasks}/>
                    </div>

                    {/* Dabba 2: Tasks List (Iska size bhi 1/2 hoga) */}
                    <div className="w-1/2 p-6">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Tasks</h2>
                            {/* Filter aur Sort ko ek line mein laane ke liye container */}
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6 mr-4">
                                <FilterOptions filter={filter} setFilter={setFilter} />
                                <SortOptions sort={sort} setSort={setSort} />
                            </div>

                            {/* Aapka TasksField yahan render hoga */}
                            <TasksField displayedTasks={displayedTasks} handleDelete={handleDelete} handleToggle={handleToggle} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
export default App