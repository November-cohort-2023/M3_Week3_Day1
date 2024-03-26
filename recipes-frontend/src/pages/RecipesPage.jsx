import {useState,useEffect} from 'react'

import axios from 'axios'

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
                <div>
                    <h1>{oneRecipe.title}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default RecipesPage