import React, {useState} from "react";


function App() {

  const [count, setCount] = useState(21); 
  
  function inc() {
      setCount(12)
  }
  
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={inc} >+</button>
    </div>
  )
}



export default App;
