/*
export const Form = () => {
    return (
        <form>
            <div>
                <label>Username</label>
                <input type='text' /> 
            </div>
        </form>
    )    
}
*/

/*
import { useState } from 'react'

export const Form = () => {
    const [username, setUsername] = useState('')
    return (
        <form>
            <div>
                <label>Username</label>
                <input type='text' /> 
            </div>
        </form>
    )
}
*/

/*
import { useState } from 'react';

export const Form = () => {
  const [username, setUsername] = useState('')
  return (
    <form>
      <div>
        <label>Username</label>
        <input
          type='text'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
    </form>
  )
}
*/

/*
import { useState } from 'react';

export const Form = () => {
    const [username, setUsername] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form data is: ${username}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input
                type='text'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}
*/


import { useState } from 'react';

export const Form = () => {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (event) => {
        event.preventDefault();         // to prevent the page refreshes
      
        alert(`Form data is: 
            username= ${username}
            description= ${description}
            country = ${country}`)
      
        console.log('Button clicked', event)    // for testing
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input
                    type='text'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                
                <label>Description</label>
                <textarea
                    value={description}
                    placeholder="please type here"
                    cols='40'
                    rows='5'
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }}
                />
                
                <label>Country</label>
                <select
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                >
                    <option value=''>--Please choose an option--</option>
                    <option value='India'>India</option>
                    <option value='Australia'>Australia</option>
                    <option value='Canada'>Canada</option>
                </select>
            </div>

            <button type='submit'>Submit</button>
        </form>
    )
}