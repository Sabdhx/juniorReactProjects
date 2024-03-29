import React from 'react'

const MovieCard = (props) => {
  return (
   <div className='mx-3  w-screen '>
   
   <div className="movie-card block ">
   <img src={props.poster} alt="" className='w-[200px] h-[200px] rounded-lg transform transition-transform hover:scale-110' />

    <div className="movie-info text-gray-500">
    
      <h2>title:{props.title}</h2>
      <p>Year:{props.year}</p>
     
      <p>IMDb ID:{props.imdb}</p>
      <p>Type: {props.type}</p>
      </div>
    </div>
  
   </div>


  ) 
}

export default MovieCard