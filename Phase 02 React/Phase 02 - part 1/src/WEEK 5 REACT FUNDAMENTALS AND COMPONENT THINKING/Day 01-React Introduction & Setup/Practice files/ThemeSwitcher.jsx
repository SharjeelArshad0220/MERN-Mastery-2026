import { useState,useEffect} from "react";
export function ToggleTheme() {
    const [isDarkTheme,setDarkTheme]=useState(false);
    const toggleDark=()=>{
        const htmlElement=document.querySelector("#main");
        if (htmlElement) {
        htmlElement.classList.toggle('dark', isDarkTheme);
    }
}
    useEffect(toggleDark,[isDarkTheme]);
    return (
<>
<button 
type="button"  
className="px-4 py-2 rounded-lg font-semibold bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors" 
onClick={()=>setDarkTheme(!isDarkTheme)}>
    {isDarkTheme?'Light Theme':'Dark Theme'}
    </button>
</>
    );
}
export default ToggleTheme