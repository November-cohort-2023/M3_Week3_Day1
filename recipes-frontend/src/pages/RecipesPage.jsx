import {useState,useEffect} from 'react'

import axios from 'axios'

function RecipesPage() {

    useEffect(() => {
      
        axios.get('http://localhost:5005/api/recipes/')
        .then((allRecipes)=>{
            console.log(allRecipes)
        })
        
    }, [])
    
  return (
    <div>RecipesPage</div>
  )
}

export default RecipesPage