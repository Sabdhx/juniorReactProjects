// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import StarRating from './StarRating/StarRating'
import Form from './formInReactjsx/Form'

// import NewFile from './formInReactjsx/newFile'
// import Todolist from './todolist/todolist'
// import UpdatePage from './todolist/updatePage'
// import TodoContext from './todolist/todoContext'
import MoviesApp from './moviesApp/moviesApp'
import Tailwind from './tailwindProject/Tailwind'
// import Tailwind from './tailwindProject/Tailwind'
// import Basic from './basic.jsx/basic'



function App() {


  return (
    <>
      {/* < TodoContext>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Todolist />} />
            <Route path="/update/:id" element={<UpdatePage />} />

          </Routes>
        </BrowserRouter>
      </ TodoContext> */}
 

 
   {/* <MoviesApp/> */}
  


     <Tailwind/>
{/* <Basic /> */}

</>

 
  )
}

export default App