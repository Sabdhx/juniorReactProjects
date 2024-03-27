// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import StarRating from './StarRating/StarRating'
import Form from './formInReactjsx/Form'
import './formInReactjsx/form.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import NewFile from './formInReactjsx/newFile'


function App() {
  const browserRouter = createBrowserRouter([
       {path: "/",
        element:<Form/>
       },
       {
        path:"./submit",
        element:<NewFile/>
       }
  ]);
  

  return (
    <>
    
    <Form/>
    </>
  )
}

export default App
