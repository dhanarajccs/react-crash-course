/*
export const Message = () => {
    return <h1>Welcome to India</h1>
}
*/


/*
import { useState } from 'react';

export const Message = () => {
    const [message, setMessage] = useState("Welcome to India");
    
    const messageChange = () => {
       setMessage("Welcome to Australia")
    }

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={messageChange}>Subscribe</button>
        </div>
    )
};
*/


import { useState } from 'react'

export const Message = () => {
    const [message, setMessage] = useState("Welcome to India");

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage("Welcome to Australia")}>Subscribe</button>
        </div>
    )
}