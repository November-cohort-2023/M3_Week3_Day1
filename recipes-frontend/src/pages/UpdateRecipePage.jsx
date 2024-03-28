import React from 'react'

import {useState, useEffect} from 'react'

import axios from 'axios'

import { useNavigate, useParams } from 'react-router-dom'

function UpdateRecipePage() {
    
    const [title,setTitle] = useState('')
    const [instructions,setInstructions] = useState('')
    const [duration,setDuration] = useState(0)
    const [level,setLevel] = useState('Easy Peasy')
    const [chef,setChef] = useState('')
    const [error, setError] = useState()

    const {recipeId} = useParams()

    function handleSubmit(e){
        e.preventDefault()

        if( title && instructions && duration && level && chef ){
        let editedRecipe = {

            title,
            instructions,
            duration,
            level,
            chef
        }

        axios.put(`http://localhost:5005/api/recipes/${recipeId}`,editedRecipe)
        .then((updatedRecipe)=>{
            console.log(updatedRecipe.data)
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }
    else{
        setError("Please Fill in all required fields")
    }
}

    useEffect(() => {
        axios.get(`http://localhost:5005/api/recipes/${recipeId}`)
        .then((oneRecipe)=>{
            console.log(oneRecipe.data)
            setTitle(oneRecipe.data.title)
            setChef(oneRecipe.data.chef)
            setDuration(oneRecipe.data.duration)
            setInstructions(oneRecipe.data.instructions)
            setLevel(oneRecipe.data.level)

        })  
    }, [])
    

  return (
    <div>
         <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input value={title} minLength={1} required type="text" onChange={(e)=>{setTitle(e.target.value)}} />
            </label>
            <label>
                Chef:
                <input value={chef} type="text" onChange={(e)=>{setChef(e.target.value)}} />
            </label>
            <label>
                Instructions:
                <input value={instructions} type="text" onChange={(e)=>{setInstructions(e.target.value)}} />
            </label>
            <label>
                Duration:
                <input value={duration} min={1} type="number" onChange={(e)=>{setDuration(e.target.value)}} />
            </label> 
       

            <select value={level} onChange={(e)=>{setLevel(e.target.value)}}>
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