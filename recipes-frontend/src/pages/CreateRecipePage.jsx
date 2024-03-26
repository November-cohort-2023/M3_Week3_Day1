import {useState} from 'react'

import axios from 'axios'

function CreateRecipePage() {

    const [title,setTitle] = useState('')
    const [instructions,setInstructions] = useState('')
    const [duration,setDuration] = useState(0)
    const [level,setLevel] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        let newRecipe = {
            title:title,
            instructions:instructions,
            duration:duration,
            level:"UltraPro Chef"
        }

        axios.post(`http://localhost:5005/api/recipes`,newRecipe)
        .then((newRecipe)=>{
            console.log(newRecipe.data)
        })
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
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}} />
            </label>
            <label>
                Instructions:
                <input type="text" onChange={(e)=>{setInstructions(e.target.value)}} />
            </label>
            <label>
                Duration:
                <input type="number" onChange={(e)=>{setDuration(e.target.value)}} />
            </label>

            <button>Submit</button>
        </form>


    </div>
  )
}

export default CreateRecipePage