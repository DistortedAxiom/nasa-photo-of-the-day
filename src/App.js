import React from "react";
import "./App.css";
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header>
        <h1>NASA PHOTO OF THE DAY</h1>
      </header>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
