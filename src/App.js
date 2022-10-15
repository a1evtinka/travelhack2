import './App.css';
// import Tinder from "./components/tinderActions/Tinder";
import React from ".";
import NavBar from "./components/NavBar/NavBar";
import Poput from "./components/Poput/Poput";

function App() {
  return (
    <div className="layout" style={{backgroundColor: 'rgba(30, 14, 0, 0.36)'}}>
        <Poput />
        <div className='footer'>
        <NavBar />
        </div>
    </div>
  );
}

export default App;
