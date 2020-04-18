import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingID() {
    const [post, setPost] = useState ({})
    const [id, setId] = useState (1)
    const [idFromButtonClick, setIdFromButtonClick] = useState (1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect (() => {
        axios.get (`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then (res => {
                console.log (res.data)
                setPost(res.data)
            })
            .catch (err => {
                console.log (err)
            })
        }, [idFromButtonClick] 
        // axios.get (`https://jsonplaceholder.typicode.com/posts/${id}`)
        //     .then (res => {
        //         console.log (res.data)
        //         setPost(res.data)
        //     })
        //     .catch (err => {
        //         console.log (err)
        //     })
        // }, [id] 
    )

    return (
        <div>
            <label>ID: </label>
            <input type="text" value={id} onChange= { e => setId (e.target.value )} />
            <button type="button" onClick={ handleClick } > Fetch Post Data</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetchingID
