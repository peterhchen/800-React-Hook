import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Peter',
            age: 63,
            skill: 'software developer'
        },
        {
            id: 2,
            name: 'Jason',
            age: 29,
            skill: 'coffee maker'
        },
        {
            id: 3,
            name: 'Jonathan',
            age: 20,
            skill: 'web developer'
        }
    ]

    //const personList = persons.map (person => <Person key="unique" person={person}/>)
    // Typically, person.id is unique
    const personList = persons.map (person => <Person key={person.id} person={person}/>)
    // The key can be anything unique, for example, the name can be also used.
    //const personList = persons.map (person => <Person key={person.name} person={person}/>)
    //personList.forEach (person => console.log ('person: ', person))
    // array-List = <Component passing-properties>
    // personList = <Person person={person} />
    return (<div>{personList}</div>)

    // const personList = persons.map (person => 
    //     <h2>id: { person.id }, name: {person.name }, age: { person.age }, skill: { person.skill };</h2>)
    // return <div>{ personList }</div>

    // const names = ['Peter', 'Jason', 'Jonathan']
    // const nameList = names.map (name => <h2>{ name } </h2>)
    // return <div>{ nameList }</div>
    // // return (
    // //     <div>
    // //         {
    // //             names.map(name => <h2>{ name }</h2>)
    // //         }
    // //         {/* <h2>{names[0]}</h2>
    // //         <h2>{names[1]}</h2>
    // //         <h2>{names[2]}</h2> */}
    // //     </div>
    // // )
}

export default NameList
