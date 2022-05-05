/*
import { useState } from 'react'

export const PostList = () => {
    const [posts, setPosts] = useState([])  
}
*/

/*
import { useState, useEffect } from 'react'

export const PostList = () => {
    const [posts, setPosts] = useState([])
    
    // to make the GET Request 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => {
                console.log(err)
            })
    })
}
*/

/*
import { useState, useEffect } from 'react'

export const PostList = () => {
    const [posts, setPosts] = useState([])
    
    // to make the GET Request 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => {
                console.log(err)
            })
    }, [])
}
*/

import { useState, useEffect } from 'react'

export const PostList = () => {
    const [posts, setPosts] = useState([])
    
    // to make the GET Request 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map((post) => {
                        return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul>
        </div>
    )
}
