import React from 'react'
import Form from './Form'


const NewFile = ({props}) => {
  return (
   <div>

   <h1>  {props.FormData.username}    </h1> 
   <h1>  {props.FormData.email}       </h1> 
   <h1>  {props.FormData.occupation}  </h1> 
   <h1>  {props.FormData.gender}      </h1> 
   <h1>  {props.FormData.languages}   </h1> 

   </div>
  )
}

export default NewFile