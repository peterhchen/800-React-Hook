import React from 'react';
import './App.css';
import ClassMouse from './components/ClassMouse';
import MouseContainer from './components/MouseContainer'

function App() {
  return (
    <div className="App">
      <label>Class Mouse: </label>
      <br></br>
      <ClassMouse />
      <br></br>
      <label>Functional Mouse:</label>
      <br></br>
      <MouseContainer />
    </div>
  );
}

export default App;
