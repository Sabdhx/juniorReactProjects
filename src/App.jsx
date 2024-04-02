// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import StarRating from './StarRating/StarRating'
import Form from './formInReactjsx/Form'
import './formInReactjsx/form.css'
// import NewFile from './formInReactjsx/newFile'
// import Todolist from './todolist/todolist'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import UpdatePage from './todolist/updatePage'
// import TodoContext from './todolist/todoContext'
import MoviesApp from './moviesApp/moviesApp'
import ModalContext from './moviesApp/ModalContext'

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
      
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<MoviesApp/>}/>
      <Route path='/ModalContext' element={<ModalContext/>}/>
     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App