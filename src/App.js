import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './component/Home';
import About from './component/About';
import Display from './component/Display';
import Linker from './component/Linker';

function App() {
  return (
    <div className="App">
      {/* <UseRef />
      <br /><br />
      <HandlingRefs />
      <br /><br />
      <Component1 /> */}
      {/* <HandlingAPI /> */}
      <BrowserRouter>
      <div>
        <Linker />
      
    </div>
     
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/about" element = {<About />} />
        <Route path="/display/:id" element = {<Display />} />
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
