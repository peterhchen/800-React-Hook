import React from 'react';
import './App.css';
import IntervalClassCounter from './components/IntervalClassCounter'
import IntervalHookCounter from './components/IntervalHookCounter'

function App() {
  return (
    <div className="App">
     <label>Interval Class Counter: </label>
     <IntervalClassCounter />
     <label>Interval Hook Counter: </label>
     <IntervalHookCounter />
    </div>
  );
}

export default App;
