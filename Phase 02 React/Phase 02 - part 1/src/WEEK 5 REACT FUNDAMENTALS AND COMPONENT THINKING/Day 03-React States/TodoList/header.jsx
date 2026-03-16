export default function Header({view, setView}) {
    return (
        <header className="flex justify-between items-center bg-white shadow-md p-4 relative z-10">
            
            <h1 className="text-xl font-bold text-gray-800">
                ✨ Task Manager
            </h1>

            <button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                onClick={() => setView(prevView => prevView === 'form' ? 'list' : 'form')}
            >
                {view === 'form' ? 'View Tasks' : 'Add Task'}
            </button>
            
        </header>
    )
}