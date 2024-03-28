import {useState} from 'react'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'


function CreateChef() {
 
    const [name,setName] = useState('')
    const [age,setAge] = useState(1)

    const [error, setError] = useState()

    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()

        if( name && age ){
            let newChef = {
                name,
                age
            }
    
    
            axios.post(`http://localhost:5005/api/chefs`,newChef)
            .then((newChef)=>{
                console.log(newChef.data)
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
                name:
                <input minLength={1} required type="text" onChange={(e)=>{setName(e.target.value)}} />
            </label>
            <label>
                Age:
                <input type="number" onChange={(e)=>{setAge(e.target.value)}} />
            </label>
          
            <button>Submit</button>
        </form>

        {error && <h1 style={{backgroundColor:"red"}}>{error}</h1>}

    </div>
  )
}

export default CreateChef