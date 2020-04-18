import React, {useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState ({firstName: '', lastName: ''})
    return (
        <div>
            <form>
                <label>First Name: </label>
                <input type='text' 
                value = { name.firstName } 
                // onChange = { e => setName ({firstName: e.target.value}) }
                onChange = { e => setName ({ ...name, firstName: e.target.value }) }
                ></input>
                <h2>Your First Name is: { name.firstName } </h2>
                <br></br>
                <label>Last Name: </label>
                <input type ='text'
                value = { name.lastName }
                // onChange = { e => setName ({lastName: e.target.value}) }
                onChange = { e => setName ({...name, lastName: e.target.value}) }
                ></input>
                <h2>Your Last Name is : { name.lastName } </h2>
                <br></br>
                <h2>JSON.stringify(name): {JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree
