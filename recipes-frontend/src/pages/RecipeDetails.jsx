import {useState,useEffect} from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import axios from 'axios'

function RecipeDetails() {

    const [recipe,setRecipe] = useState(null)

    const {recipeId} = useParams()

    useEffect(() => {
      
        axios.get(`http://localhost:5005/api/recipes/${recipeId}`)
        .then((oneRecipe)=>{
            console.log(oneRecipe.data)
            setRecipe(oneRecipe.data)
        })

    }, [])

    const navigate = useNavigate()
    
    function deleteRecipe(id){

        axios.delete(`http://localhost:5005/api/recipes/${id}`)
        .then((response)=>{
            console.log(response)
            navigate('/')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    console.log(recipeId)

  return (
    <div>
        {}
        {recipe && (
            <div>
                <h1>{recipe.title}</h1> 
                <p>{recipe.chef}</p>
                <button onClick={()=>{deleteRecipe(recipe._id)}} >Delete Recipe</button>
            </div>
        )}
      
    </div>
  )
}

export default RecipeDetails