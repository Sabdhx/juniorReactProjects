import React from 'react'
import { useNavigate } from 'react-router-dom'


function Card({title,year,category}) {

  const navigate = useNavigate()
  return (

    <div className='bg-gray-400 m-2 p-3 rounded-lg pointer-cursor'>
      <h1>{title}</h1>
      <h1>{year}</h1>
      <h1>{category}</h1>
      <button 
      // onClick={()=>{navigate(`movie/:${key}`)}}
      className='bg-blue-400 rounded-lg p-2'>read more</button>
    </div>
  
  )
}

export default Card