import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState (true)
    const [error, setError] = useState ('')
    const [post, setPost] = useState ({})
    useEffect(() => {
        axios.get ('https://jsonplaceholder.typicode.com/posts/1')
            .then (response => {
                setLoading (false)
                setPost(response.data)
                setError ('')
            })
            .catch (error => {
                setLoading (false)
                setPost ({})
                setError('Something went wrong')
            })
    }, [])
    return (
        <div className = 'TextLeft'>
            { loading ? 'Loading' : 'post.id: ' + post.id }
            <br></br>
            { loading ? 'Loading' : 'post.userId: ' + post.userId }
            <br></br>
            { loading ? 'Loading' : 'post.title: ' + post.title }
            <br></br>
            { loading ? 'Loading' : 'post.body: ' + post.body }
            <br></br>
            { error ? error: null}
            
        </div>
    )
}

export default DataFetchingOne
