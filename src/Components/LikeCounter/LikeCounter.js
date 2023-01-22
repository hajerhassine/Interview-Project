import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

import "./LikeCounter.css";


const LikeCounter = (props) => {
 
  const {
    applied,
    icon,
    numberOf,
    onClick
  } = props;

  return (
    <div
      className="LikeCounter-Container"
      onClick={onClick}
    >
      <FontAwesomeIcon
        className={applied ? "LikeCounter-Icon LikeCounter-IconColor" : "LikeCounter-Icon"}
        icon={icon}
        size="1x"
      />
      <div className="LikeCounter-TextContainer">
        <p className="LikeCounter-Text">{numberOf}</p>
      </div>
    </div>
  );
};
LikeCounter.propTypes = {
  applied: PropTypes.bool,
  icon: PropTypes.object.isRequired,
  numberOf: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

LikeCounter.defaultProps = {
  applied: false
};


export { LikeCounter };
