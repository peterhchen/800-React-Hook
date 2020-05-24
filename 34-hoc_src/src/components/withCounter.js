import React from 'react'

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                name: 'Peter',
                count: 0
            }
        }
        
        incrementCount = () => {
            this.setState (prevState => {
                return { count: prevState.count + 1}
            })
        }

        render () {
            return <OriginalComponent 
            name = { this.state.name } 
            count = { this.state.count } 
            incrementCount = { this.incrementCount } />
        }
        // This is the initial implementation for name share 
        // by components of ClickCounter and HoverCounter.
        // render () {
        //      return <OriginalCoponent name = 'Peter' />
        // }
    }
    return NewComponent
}

export default UpdatedComponent