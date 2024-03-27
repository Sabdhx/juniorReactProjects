// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import StarRating from './StarRating/StarRating'
import Form from './formInReactjsx/Form'
import './formInReactjsx/form.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import NewFile from './formInReactjsx/newFile'
import Todolist from './todolist/todolist'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UpdatePage from './todolist/updatePage'
 

function App() {
 

  return (
    <>
<BrowserRouter>
    <Routes>

 <Route path="/" element={<Todolist/>}/>
 <Route path="/update/:id" element={<UpdatePage/>}/>

    </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
