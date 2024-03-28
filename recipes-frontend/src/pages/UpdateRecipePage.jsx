import React from 'react'

import {useState} from 'react'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'

function UpdateRecipePage() {
    
    const [title,setTitle] = useState('')
    const [instructions,setInstructions] = useState('')
    const [duration,setDuration] = useState(0)
    const [level,setLevel] = useState('Easy Peasy')
    const [chef,setChef] = useState('')
    const [error, setError] = useState()
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input minLength={1} required type="text" onChange={(e)=>{setTitle(e.target.value)}} />
            </label>
            <label>
                Chef:
                <input type="text" onChange={(e)=>{setChef(e.target.value)}} />
            </label>
            <label>
                Instructions:
                <input type="text" onChange={(e)=>{setInstructions(e.target.value)}} />
            </label>
            <label>
                Duration:
                <input min={1} type="number" onChange={(e)=>{setDuration(e.target.value)}} />
            </label> 
       

            <select onChange={(e)=>{setLevel(e.target.value)}}>
                <option value="Easy Peasy">Easy Peasy</option>
                <option value="Amateur Chef">Amateur Chef</option>
                <option value="UltraPro Chef">UltraPro Chef</option>
            </select>
            <button>Submit</button>
        </form>

        {error && <h1 style={{backgroundColor:"red"}}>{error}</h1>}

    </div>
  )
}

export default UpdateRecipePage