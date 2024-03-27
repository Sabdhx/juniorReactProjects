import React from 'react'
import { Navigate } from 'react-router-dom'

const Todolist = () => {
  const object =[
    {id:"1" , text:"there is a golden compas"},
    {id:"2" , text:"there is a blue compas"},
    {id:"3" , text:"there is a green compas"}
  ]
  // const navigate = Navigate();
  return (
    <div className=" mx-auto bg-white shadow-md overflow-hidden sm:rounded-lg mt-[100px]">
     
      <div className="p-4 bg-gray-100">
        
        <div className="flex">
          
          <input
            type="text"
            className="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Enter your todo"
          />
          <button
            className="ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Todo
          </button>
        </div>


        {
          object.map((item,index)=>{
           
            return(
              <div className='flex justify-between px-3 my-5'>
              <h1 className='text-2xl font-bold'>{item.text}</h1>
              <div>
              <button 
             
              className='ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>update</button>
              
      
              <button className='ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>remove</button>
              </div>
             </div>
            )
          })
        }
      
      </div>
    </div>
  )
}

export default Todolist