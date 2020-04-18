import React,{ useContext } from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
    const user = useContext (UserContext)
    const channel = useContext (ChannelContext)
    return (
        <div>
            User Context Value: {user}
            <br></br>
            Channel Context Value: { channel}
            {/* <UserContext.Consumer>
            {
                user =>{
                    return (
                        <ChannelContext.Consumer>
                        {
                            channel => {
                                return <div>User Context Value { user }, 
                                <br></br>
                                Channel Context Value: { channel }</div>
                            }
                        }
                        </ChannelContext.Consumer>
                    )                      
                }
            }
            </UserContext.Consumer> */}
        </div>
    )
}

export default ComponentF
