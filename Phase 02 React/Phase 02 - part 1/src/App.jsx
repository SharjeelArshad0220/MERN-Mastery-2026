// import { useState } from 'react'
import FirstComponent,{ProductCard,Counter} from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 01-React Introduction & Setup/Practice files/Practice.jsx";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    /*<>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My first react app noor btao kesi ha ?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    */<>
    {/* <ProductCard/> */}
    <Counter/></>
  )
}

export default App
