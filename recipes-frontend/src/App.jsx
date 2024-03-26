
import './App.css'
import CreateRecipePage from './pages/CreateRecipePage'
import RecipeDetails from './pages/RecipeDetails'
import RecipesPage from './pages/RecipesPage'

import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>

    <Routes>
      <Route path='/' element={<RecipesPage/>}/>
      <Route path='/:recipeId' element={<RecipeDetails/>}/>
      <Route path='/create' element={<CreateRecipePage/>}/>
    </Routes>
    </>
  )
}

export default App
