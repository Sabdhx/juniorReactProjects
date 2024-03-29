import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";

const MoviesApp = () => {
  const [input, setinput] = useState("superman");
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, 2000);
  }, [loading]);

  useEffect(() => {
    const fetchingApi = async () => {
      setloading(true)
      if (input === "") {
        setinput("");
      } else {
        const key = `eca6ca52`;
        const URL = `https://www.omdbapi.com/?s=${input}&apikey=${key}`;
        {
          
          const response = await fetch(URL);
          const finalData = await response.json();
          console.log(finalData);
          if (finalData.Response === "True") {
            setSearchMovies(finalData.Search);
          }
          setloading(false);
        }
      }
    };
    fetchingApi();
  }, [input]);

  function handleClick() {
    setinput("");
  }

  return (
    
    <div className="py-[5px] w-screen  bg-gray-800">

      <div>
        <div className=" flex justify-center ">
          <input
            type="text"
            className="bg-gray-300 px-9 py-3 rounded-lg"
            value={input}
            onChange={(e) => {
              setinput(e.target.value);
              console.log(input);
            }}
          />
          <button
            className="bg-blue-400 px-6 text-white rounded-lg mx-3 bg-black hover:bg-gray-700 transition-colors duration-500"
            onClick={handleClick}
          >
        
            search
          </button>
          
        </div>
        <div className="flex grid grid-cols-3 ml-[1rem]">
          {searchMovies.map((item, index) => {
            return (
              <div className="block my-9" key={index}>
                <MovieCard
                  key={index}
                  poster={item.Poster}
                  title={item.Title}
                  year={item.Year}
                  imdb={item.imdbID}
                  type={item.Type}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoviesApp;
