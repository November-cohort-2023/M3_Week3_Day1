import {useState,useEffect} from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

function RecipesPage() {

    const [recipes,setRecipes] = useState([])

    useEffect(() => {
      
        axios.get('http://localhost:5005/api/recipes/')
        .then((allRecipes)=>{
            setRecipes(allRecipes.data)
            console.log(allRecipes.data)
        })
        
    }, [])
    
  return (
    <div>RecipesPage

        {recipes.map((oneRecipe)=>{
            return(
                <div key={oneRecipe._id}>
                    <Link to={`/${oneRecipe._id}`}>
                    <h1>{oneRecipe.title}</h1>
                    <p>{oneRecipe.chef.name}</p>
                   <Link to={`${oneRecipe._id}/edit`}><button>Edit Recipe</button></Link> 
                    </Link>
                </div>
            )
        })}
    </div>
  )
}

export default RecipesPage