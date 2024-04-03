import React from 'react'
import Navbar from './Navbar'
import AfterNavbar from './afterNavbar'
import AfterMiddleProject from './afterMiddleProject'
import CardsOfPrice from './CardsOfPrice'
import Form from './Form'

const Tailwind = () => {
  return (
    <div>
      <div className='block'>
        <Navbar/>
        </div>
        <AfterNavbar/>
        <AfterMiddleProject/>
        <div className="flex">
        <CardsOfPrice/>
        <CardsOfPrice/>
        <CardsOfPrice/>
        </div>
        <Form/>
    </div>
  )
}

export default Tailwind