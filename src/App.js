import React from 'react';
import './App.css';
import UseRef from './component/UseRef';
import HandlingRefs from './component/HandlingRefs';
import Component1 from './component/Component1';

function App() {
  return (
    <div className="App">
      <UseRef />
      <br /><br />
      <HandlingRefs />
      <br /><br />
      <Component1 />
    </div>
  );
}

export default App;
