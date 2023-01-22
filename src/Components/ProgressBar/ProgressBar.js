import PropTypes from "prop-types";
import React from "react";

import "./ProgressBar.css";


function ProgressBar(props) {

  const {
    ratio
  } = props;
 
  return (
    <div className="Progress-Container" style={ratio === null ? { background: "grey" } : null}>
      <div className="Progress-like" style={{ width: `${ratio * 100}%` }}></div>
    </div >
  );
  
}

ProgressBar.propTypes = {
  ratio: PropTypes.number
};

ProgressBar.defaultProps = {
  applied: false
};


export { ProgressBar };
