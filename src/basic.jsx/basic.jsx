import React, { useEffect, useState } from 'react'

const Basic = () => {
  const [count,setcount]=useState(0)

  useEffect(()=>{
    function counting(){
      setcount(prev =>prev+1)
      if(count%2==0){
        document.body.style.backgroundColor="black"
      }
        else{
          document.body.style.backgroundColor="white"
        }
      
    }
  },[count])
  
  return (
  
    <div>
      <button onClick={setcount(count++)}>click</button>
      {count}
    </div>
  )
}

export default Basic