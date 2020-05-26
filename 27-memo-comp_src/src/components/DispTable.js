import React, { Component } from 'react'
import './DispTable.css'

class DispTable extends Component {
    constructor(props) {
      super(props) 
      // since we are extending class Table so we have 
      // to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { id: 1, name: 'Peter', age: 62, email: 'peter.hp.chen@email.com' },
            { id: 2, name: 'Irene', age: 54, email: 'irene_mh_chen@yahoo.com' },
            { id: 3, name: 'Jessica', age: 31, email: 'jessica.js.chen@email.com' },
            { id: 4, name: 'Jason', age: 29, email: 'jason.js.chen@email.com' },
            { id: 5, name: 'Jasmine', age: 26, email: 'jasmine.jm.chen@email.com' },
            { id: 6, name: 'Jonathan', age: 18, email: 'jonathan.jl.chen@email.com' }
         ]
      }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  
     render() {
        return (
           <div>
              <h1 id='title'>React Dynamic Table</h1>
              <table id='students'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
        const { id, name, age, email } = student //destructuring
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{email}</td>
            </tr>
        )
        })
    }

    // render() {
    //     return (
    //     <div>
    //         <h1 id='title'>React Dynamic Table</h1>
    //         <table id='students'>
    //             <tbody>
    //                 {this.renderTableData()}
    //             </tbody>
    //         </table>
    //     </div>
    //     )
    // }
}

export default DispTable 
//exporting a component make it reusable and this is the beauty of react