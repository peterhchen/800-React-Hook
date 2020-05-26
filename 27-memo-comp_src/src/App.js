import React, { Component } from 'react';
import './App.css';
// import Fragment from './components/Fragment'
//import Table from './components/Table'
//import DispTable from './components/DispTable'
import ParentComp from './components/ParentComp'

class App extends Component {
  render () {
    return (
      <div className="App">
        <ParentComp />
        {/* <DispTable /> */}
        {/* <Fragment /> */}
        {/* <Table /> */}
      </div>
    );
  }
}

export default App;
