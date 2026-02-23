import { useState } from "react";
export function Toggle() {
    const [isVisible,setIsVisible]=useState(false);
    return (
        <>
        <button 
        className="bg-blue-600 hover:bg-blue-700 text-white m-4 font-medium px-4 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={()=>setIsVisible(prev=>!prev)}>{isVisible?'Hide Details':'Show Details'}</button>
        {isVisible && <p className="mt-2 p-3 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-lg italic border-l-4 border-yellow-500">"Tada! You found the secret message!"</p>}
        </>
    );
}
export default Toggle