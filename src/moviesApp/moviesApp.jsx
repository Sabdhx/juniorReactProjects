import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";

const MoviesApp = () => {
  const namesOfMovies = [
    "ant-man",
    "spider-man",
    "captain-america",
    "demon-slayer",
  ];

  let randomIndex = Math.floor(Math.random() * namesOfMovies.length);
  const randomMovie = namesOfMovies[randomIndex];

  const [input, setInput] = useState(randomMovie);
  const [filterQuery, setFilterQuery] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchingApi = async () => {
      const key = `eca6ca52`;
      const URL = `https://www.omdbapi.com/?s=${input}&apikey=${key}`;
      const response = await fetch(URL);
      const finalData = await response.json();
      console.log(finalData);
      if (finalData.Response === "True") {
        setSearchMovies(finalData.Search);
      }
      setLoading(false);
    };

    fetchingApi();
  }, [input]);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 4000);

      return () => clearTimeout(timer); // Clear the timeout on component unmount
    }
  }, [loading]);

  function handleFilterChange(e) {
    setFilterQuery(e.target.value);
  }

  function handleSearch() {
    setInput(searchTerm);
    setIsOpen(false);
    setLoading(true);
  }

  return (
    <div>
      <div className="py-[5px] w-screen   ">
        <div className="mx-[30%]">
          <h1 className="text-4xl">not halal movies</h1>
          <input
            onChange={handleFilterChange}
            value={filterQuery}
            type="text"
            className="px-[100px] py-4 rounded-lg  my-[3em] bg-gray-400"
          />
          <button
            className="bg-blue-400 px-9 py-2 rounded-lg my-5 mx-[20%] hover:shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            search Movies
          </button>
        </div>
        <div>
          <div className=" flex justify-center "></div>
          <div className="flex grid grid-cols-3 ml-[1rem]">
            {searchMovies
              .filter(movie =>
                movie.Title.toLowerCase().includes(filterQuery.toLowerCase())
              )
              .map((movie, index) => (
                <div className="block my-9" key={index}>
                  <MovieCard
                    key={index}
                    poster={movie.Poster}
                    title={movie.Title}
                    year={movie.Year}
                    imdb={movie.imdbID}
                    type={movie.Type}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
          style={{ zIndex: 10 }}
        >
          <div className="w-[600px] h-[300px] bg-gray-700 rounded-lg mx-[10%] ">
            <div className="w-[600px] h-[300px] bg-gray-700 rounded-lg mx-[10%] ">
              <h1 className="text-center text-2xl pt-5 font-bold">search it</h1>
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                className="px-[100px] py-4 rounded-lg mx-[19%] my-[3em]"
              />
              <div className="my-4">
                <button
                  className="mx-[22%] bg-red-500 text-white px-9 py-2 rounded-lg hover:shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  close
                </button>
                <button
                  className=" bg-blue-600 text-white px-9 py-2 rounded-lg hover:shadow-lg"
                  onClick={handleSearch}
                >
                  search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && <div>loading....</div>}
    </div>
  );
};

export default MoviesApp;
