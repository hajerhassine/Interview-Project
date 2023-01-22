import PropTypes from "prop-types";
import React from "react";

import "./NbPerPageSelector.css";
function NbPerPageSelector(props) {
 
  const {onChange,value} = props;

  return (
    <div className="NbPerPageSelector-Container">
      <select
        className="NbPerPageSelector-Selector"
        id="numberByPage"
        name="numberByPage"
        onChange={onChange}
        value={value}>
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={12}>12</option>
      </select>
    </div >
  );

}


NbPerPageSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};


export { NbPerPageSelector };
