import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./movieCard";
import Slidebar from "./slidebar";
import {CreateContext} from './ModalContext'

const MoviesApp = () => {
  const [searchMovies, setSearchMovies] = useContext(CreateContext);

  return (
    <div className="">
      <div className="absolute my-[100px] ml-5 ">
        <Slidebar />
      </div>
      <div className="py-[5px] w-screen   ml-[300px]">
        <div className="mx-[35%]">
          <h1 className="text-4xl">not halal movies</h1>
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
    </div>
  );
};

export default MoviesApp;
