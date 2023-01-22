import React from "react";
import { DotLoader } from "react-spinners";

import "./MoviesLoader.css";


const MoviesLoader = () => {
 
  return (
    <div className="FilmsLoader-Container">
      <DotLoader
        color={"var(--main-border-color"}
        
      />
    </div>
  );
 
};


export { MoviesLoader };
