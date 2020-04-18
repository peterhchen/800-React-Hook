import React from 'react';

const Hello = () => {
    // return (
    //     <div className = 'dumyClass'>
    //          <p>Hello, I am Peter</p>
    //     </div>       
    // );
    return React.createElement (
        'div', 
        //null, 
        {id: 'hello', className: "dummyClass"},
        React.createElement ('h1', null, 'Hello, I am Peter')
    )
}

export default Hello;