
import './App.css'
import RecipesPage from './pages/RecipesPage'

import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>

    <Routes>
      <Route path='/' element={<RecipesPage/>}/>
    </Routes>

    </>
  )
}

export default App
