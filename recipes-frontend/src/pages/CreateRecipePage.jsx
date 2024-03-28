import {useState} from 'react'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'

function CreateRecipePage() {

    const [title,setTitle] = useState('')
    const [instructions,setInstructions] = useState('')
    const [duration,setDuration] = useState(0)
    const [level,setLevel] = useState('Easy Peasy')
    const [chef,setChef] = useState('')
    const [error, setError] = useState()

    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()

        if( title && instructions && duration && level && chef ){
            let newRecipe = {
                title:title,
                instructions:instructions,
                duration:duration,
                level:level,
                chef:chef
            }
    
    
            axios.post(`http://localhost:5005/api/recipes`,newRecipe)
            .then((newRecipe)=>{
                console.log(newRecipe.data)
                navigate('/')
            })
            .catch(err=>{
                console.log(err)
            })
        }
        else{
            setError("Please Fill in all required fields")
        }

      
    }

    

    /* 
    1. create a state for each input

    2. prevent the default behavior of submitting a form

    3.
    */
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

export default CreateRecipePage