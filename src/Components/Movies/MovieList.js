import { fetchMovies } from "../../API/MoviesAPI";
import { IDLE, LOADING } from "../../Store/constants";
import { selectMovies, selectMoviesStatus } from "../../Store/selectors";
import { MoviesLoader } from "../MoviesLoader/MoviesLoader";
import { Movie } from "./Movie";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./MovieList.css";


const MovieList = () => {

  const movies = useSelector(selectMovies);
  const movieStatus = useSelector(selectMoviesStatus);


  const dispatch = useDispatch();
  
  useEffect(() => {
    if (movieStatus !== IDLE) {
      return;
    }

    dispatch(fetchMovies());
  }, [movieStatus, dispatch]);
 
  return (
    <div className="MovieList-Container">
      {movieStatus === LOADING
        ?
        <MoviesLoader />
        :
        movies.map((movie) => {
          return (
            <Movie
              data={movie}
              key={`${movie.id}`}
            />
          );
        })
      }
    </div>
  );

};


export { MovieList };
