import {useState,useEffect} from 'react'

import { useParams } from 'react-router-dom'

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
    
    console.log(recipeId)
  return (
    <div>
        {recipe && (
            <div>
                <h1>{recipe.title}</h1> 
            </div>
        )}
      
    </div>
  )
}

export default RecipeDetails