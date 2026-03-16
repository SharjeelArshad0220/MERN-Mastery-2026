export default function Task({ id, taskInput, priority, date, description, isCompleted, handleDelete, handleToggle }) {
    
    // Priority ke hisaab se badge ka color decide karna
    const priorityColor = 
        priority === 'High' ? 'bg-red-100 text-red-700' : 
        priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
        'bg-green-100 text-green-700';

    return (
        <div className={`p-5 rounded-xl border transition-all duration-300 flex flex-col sm:flex-row justify-between gap-4 ${isCompleted ? 'bg-gray-50 border-gray-200' : 'bg-white shadow-sm border-gray-100 hover:shadow-md'}`}>
            
            <div className="flex-1">
                {/* TITLE TAG - Yahan aapne ternary operator lagana hai! */}
                <h3 className={`text-lg font-bold ${isCompleted?'line-through text-gray-400':'text-gray-800'}`}>
                    {taskInput}
                </h3>
                
                <p className="text-gray-500 text-sm mt-1">{description}</p>
                
                <div className="flex items-center gap-3 mt-3">
                    <span className="text-xs font-semibold text-gray-400 block">Due: {date}</span>
                    <span className={`text-xs px-2 py-1 rounded-full font-bold ${priorityColor}`}>
                        {priority}
                    </span>
                </div>
            </div>
            
            <div className="flex sm:flex-col gap-2 justify-center">
                <button 
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${isCompleted ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`} 
                    onClick={() => handleToggle(id)}
                >
                    {isCompleted ? 'Undo' : 'Done'}
                </button>
                <button 
                    className="px-4 py-2 rounded-lg font-semibold text-sm bg-red-50 text-red-600 hover:bg-red-100 transition" 
                    onClick={() => handleDelete(id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}