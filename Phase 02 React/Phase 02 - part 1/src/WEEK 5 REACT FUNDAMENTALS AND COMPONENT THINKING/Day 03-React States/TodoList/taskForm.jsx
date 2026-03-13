import { useState } from "react";

export function TaskForm({ tasks, setTasks }) {
    const today = new Date().toISOString().split('T')[0];
    const initialState = { taskInput: '', priority: 'Medium', date: today, description: '', isCompleted: false };
    const [taskData, setTaskData] = useState(initialState);
    const { taskInput, priority, date, description } = taskData;

    const handleSubmit = (event) => {
        event.preventDefault();
        // Trim here so user can type spaces while typing
        const task = { 
            id: (Date.now() + Math.random()).toFixed(1), 
            ...taskData,
            taskInput: taskData.taskInput.trim() 
        };
        setTasks([...tasks, task]);
        setTaskData(initialState);
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Task</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Task Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Task Name</label>
                    <input 
                        type="text" 
                        required 
                        placeholder="What needs to be done?"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        value={taskInput} 
                        onChange={(e) => setTaskData({...taskData, taskInput: e.target.value})} 
                    />
                </div>

                {/* Priority Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                    <div className="grid grid-cols-3 gap-2">
                        {['High', 'Medium', 'Low'].map((p) => (
                            <button
                                key={p}
                                type="button"
                                onClick={() => setTaskData({...taskData, priority: p})}
                                className={`py-2 px-3 rounded-lg text-sm font-semibold transition ${
                                    priority === p 
                                    ? 'bg-blue-600 text-white shadow-md' 
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Due Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                    <input 
                        type="date" 
                        required 
                        min={today} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                        value={date} 
                        onChange={(e) => setTaskData({...taskData, date: e.target.value})}
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea 
                        placeholder="Add some details..." 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition h-24 resize-none"
                        value={description} 
                        onChange={(e) => setTaskData({...taskData, description: e.target.value})}
                    />
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition transform active:scale-95"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
}
