import React from 'react'
const heading = {
    fontSize: '72px',
    color: 'blue'
}
function Inline() {
    return (
        <div>
        
            <h2 className = 'error'>Error</h2>
            <h2 style = {heading}>Inline</h2>
        </div>
    )
}

export default Inline