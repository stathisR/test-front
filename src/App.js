import React from "react";
import './App.css';
import Ingredients from "./Ingredients";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          These are the ingredients:
        </p>
        <Ingredients user={'stathis'}/>
      </header>
    </div>
  );
}

export default App;
