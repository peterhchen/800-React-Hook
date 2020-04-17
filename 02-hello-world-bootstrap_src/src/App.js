import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render () {
      return (
        <div>
          <div class="jumbotron text-center">
            <h1>My First Bootstrap Page</h1>
            <p>Resize this responsive page to see the effect!</p> 
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <h3>Column 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
              </div>
              <div class="col-sm-4">
                <h3>Column 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
              </div>
              <div class="col-sm-4">
                <h3>Column 3</h3>        
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
              </div>
            </div>
          </div>
        </div>       
      );
    }
  }

// class App extends Component {
//   render () {
//     return (
//       <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <p>
//            Hello World!
//          </p>
//          <a
//            className="App-link"
//            href="https://reactjs.org"
//                       target="_blank"
//            rel="noopener noreferrer"
//          >
//           Learn React
//          </a>
//        </header>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
