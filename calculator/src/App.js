import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GrowthInput from "./components/GrowthInput"
import "./components/styles.scss"

function App() {
  return (
    <div className="App container-fluid">
      <header className="App-header">
        <div className="header">
          <h1>Growth Calculator</h1>
        </div>
      </header>
        <GrowthInput/>
    </div>
  );
}

export default App;
