import React from 'react'; 
import Login from './Login'

let isLoggedIn = false; 

function renderConditionally() {
  if(isLoggedIn === true) {
    return <h1>Hello</h1>
  } else {
    return (
      
    )
  }
}

function App() {
  return (
    <div className="container">
      {renderConditionally()}
    </div>
  );
}

export default App 