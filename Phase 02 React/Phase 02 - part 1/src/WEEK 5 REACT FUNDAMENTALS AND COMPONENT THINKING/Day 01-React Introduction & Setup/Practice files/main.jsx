// import { useState } from 'react'
// Sahi tarika yeh hai:
import Counter from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 01-React Introduction & Setup/Practice files/counter.jsx";
import Toggle from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 01-React Introduction & Setup/Practice files/Toggle.jsx";
import Form from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 01-React Introduction & Setup/Practice files/Form.jsx";
import Todo from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 01-React Introduction & Setup/Practice files/TodoList.jsx";
import ToggleTheme from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 01-React Introduction & Setup/Practice files/ThemeSwitcher.jsx";

function AppComponent() {
  // const [count, setCount] = useState(0)
  return (
    <div id="main" className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-8 transition-colors duration-300">
      <header className="flex justify-between items-center">
        <h1 className="p-4 text-center text-2xl font-bold">
          My React Mini-Projects 🚀
        </h1>
        <ToggleTheme />
      </header>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-ld mb-8 mt-8 transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
        <h2 style={{ textAlign: "start" }} className="mb-4 font-bold text-xl">Counter App</h2>
        <Counter />
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-ld mb-8 mt-8 transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
        <h2 style={{ textAlign: "start" }} className="mb-4 font-bold text-xl">See the secret</h2>
        <Toggle />
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-ld mb-8 mt-8 transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
      <h2 style={{ textAlign: "start" }} className="mb-4 font-bold text-xl">Let us know about you:</h2>
      <Form />
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-ld mb-8 mt-8 transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
      <h2 style={{ textAlign: "start" }} className="mb-4 font-bold text-xl">Write and manage your Tasks</h2>
      <Todo />
    </div>
    </div>
  )
}

export default AppComponent
