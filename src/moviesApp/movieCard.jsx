import React from 'react'


const MovieCard = (props) => {
  return (
  
   
   <div className="movie-card block w-[27vw] h-[55vh] bg-gray-100 rounded-lg hover:shadow-lg">
 
   <img src={props.poster} alt="" className=' w-[27vw] h-[40vh] rounded-lg transform transition-transform hover:scale-110 size-cover object-cover'  />

    <div className="movie-info w-[27vw] text-gray-600 ml-1 ">
    
      <h2 className='text-center'>title:{props.title}</h2>
      <p className='text-center'>Year:{props.year}</p>
     
      <p className='text-center'>IMDb ID:{props.imdb}</p>
      <p className='text-center'>Type: {props.type}</p>
      </div>
      </div>
   
  



  ) 
}

export default MovieCard