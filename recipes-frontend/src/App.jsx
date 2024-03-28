
import './App.css'
import CreateRecipePage from './pages/CreateRecipePage'
import RecipeDetails from './pages/RecipeDetails'
import RecipesPage from './pages/RecipesPage'

import {Routes,Route} from 'react-router-dom'
import UpdateRecipePage from './pages/UpdateRecipePage'
import CreateChef from './pages/chef/CreateChef'

function App() {

  return (
    <>

    <Routes>
      <Route path='/' element={<RecipesPage/>}/>
      <Route path='/:recipeId' element={<RecipeDetails/>}/>
      <Route path='/create' element={<CreateRecipePage/>}/>
      <Route path='/:recipeId/edit' element={<UpdateRecipePage/>}/>
      <Route path='/chef/create' element={<CreateChef/>}/>
    </Routes>
    </>
  )
}

export default App
