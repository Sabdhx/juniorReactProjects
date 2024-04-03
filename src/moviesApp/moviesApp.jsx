import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";



const MoviesApp = () => {
  const namesOfMovies = ["ant-man", "spider-man", "captain-america", "demon-slayer", ];

  let randomIndex = Math.floor(Math.random() * namesOfMovies.length);
  const randomMovie = namesOfMovies[randomIndex];
  
  const [input, setinput] = useState(randomMovie);


  const [searchMovies, setSearchMovies] = useState([]);
  const [isopen, setisopen] = useState(false);
  const [searchTerm, setsearchTerm] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const fetchingApi = async () => {
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
    };

    fetchingApi();
  }, [input]);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setloading(false);
      }, 4000);

      return () => clearTimeout(timer); // Clear the timeout on component unmount
    }
  }, [loading]);

  function searchTerming() {
    setinput(searchTerm);
    setisopen(false);
    setloading(true);
  }

  return (
    <div>
      <div className="py-[5px] w-screen   ">
        <div className="mx-[30%]">
          <h1 className="text-4xl">not halal movies</h1>
          <input
            type="text"
            className="px-[100px] py-4 rounded-lg  my-[3em] bg-gray-400"
          />
          <button
            className="bg-blue-400 px-9 py-2 rounded-lg my-5 mx-[20%] hover:shadow-lg"
            onClick={() => setisopen(true)}
          >
            search Movies
          </button>
        </div>
        <div>
          <div className=" flex justify-center "></div>
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
      {isopen === true && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
          style={{ zIndex: 10 }}
        >
          <div className="w-[600px] h-[300px] bg-gray-700 rounded-lg mx-[10%] ">
            <div className="w-[600px] h-[300px] bg-gray-700 rounded-lg mx-[10%] ">
              <h1 className="text-center text-2xl pt-5 font-bold">search it</h1>
              <input
                onChange={(e) => setsearchTerm(e.target.value)}
                type="text"
                className="px-[100px] py-4 rounded-lg mx-[19%] my-[3em]"
              />
              <div className="my-4">
                <button
                  className="mx-[22%] bg-red-500 text-white px-9 py-2 rounded-lg hover:shadow-lg"
                 onClick={()=>{setisopen(false)}}
                >
                  close
                </button>
                <button
                  className=" bg-blue-600 text-white px-9 py-2 rounded-lg hover:shadow-lg"
                  onClick={() => {
                    setinput(searchTerm);
                    setisopen(false)
                    setloading(true)
                   
                  }}
                >
                  search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading === true && <div>loading....</div>}
    </div>
  );
};

export default MoviesApp;
