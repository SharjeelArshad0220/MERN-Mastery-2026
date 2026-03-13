import { useState } from "react";

export function NameInput() {
    const [nameInput, setNameInput] = useState('');

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700 mb-2"
            >
                Enter Name:
            </label>
            
            <div className="relative flex items-center mb-4">
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={nameInput} 
                    onChange={(e) => setNameInput(e.target.value)} 
                    placeholder="Type something..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
                <span className="absolute right-3 text-xs font-mono text-gray-400 bg-white px-1">
                    {nameInput.length}
                </span>
            </div>

            <p className="text-lg text-gray-800 mb-6">
                Hello, <span className="font-bold text-blue-600">{nameInput || "Guest"}</span>!
            </p>

            <button 
                type="button" 
                onClick={() => setNameInput('')} 
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 active:scale-95"
            >
                Reset Field
            </button>
        </div>
    );
}

export default NameInput;
