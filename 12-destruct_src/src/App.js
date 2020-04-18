import React, { Component } from 'react';
import './App.css';
import Greet  from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
class App extends Component {
  render () {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Peter" heroName="Iron-Man" />
        <Greet name="Jason" heroName="Terminator"/>
        <Greet name="Jonathan" heroName ="Bat-Man"/> */}
        <Welcome name="Irene" heroName="Super-Woman"/>
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
