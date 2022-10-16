import './App.css';
// import Tinder from "./components/tinderActions/Tinder";
import React from ".";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './Main';
import HelloThere from './components/HelloThere';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/event/:id' element={<HelloThere/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
