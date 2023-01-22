import { movieDeleted, movieDisliked, movieLiked } from "../../Store/actions";
import { LikeCounter } from "../LikeCounter/LikeCounter";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import "./Movie.css";


const Movie = (props) => {
 
  const {
    data
  } = props;

  const dispatch = useDispatch();
  
  const getRatio = useCallback(() => {
    let total = data.likes + data.dislikes;

    if (!total) {
      return null;
    }

    total = data.likes / (data.likes + data.dislikes);
    return total;
  }, [data]);

  const handleClickdisLike = () => {
    dispatch(movieDisliked(data));
  };

  const handleClickLike = () => {
    dispatch(movieLiked(data));
  };

  const handleClickTrash = () => {
    dispatch(movieDeleted(data));
  };

  return (
    <div
      className="Movie-Container"
      key={`${data.id}`}
    >
    
      <div className="Movie-ContentContainer">
        <p className="Movie-Title">{data.title}</p>
        <div className="Movie-CategorieContainer">
         
          <p className="Movie-CategoryText">{data.category}</p>
        </div>
        <div className="Movie-BottomContainer">
          <ProgressBar ratio={getRatio()} />
          <div className="Movie-CountersContainer">
            <LikeCounter
              applied={data.liked}
              icon={faThumbsUp}
              numberOf={data.likes}
              onClick={handleClickLike}
            />
            <LikeCounter
              applied={data.disliked}
              icon={faThumbsDown}
              numberOf={data.dislikes}
              onClick={handleClickdisLike}
            />
            <div className="Movie-TrashContainer">
              <FontAwesomeIcon
                color="black"
                icon={faTrashAlt}
                onClick={handleClickTrash}
                size="2x"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  data: PropTypes.object.isRequired
};


export { Movie };
