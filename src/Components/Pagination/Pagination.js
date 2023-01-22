import { numberByPageModifed, pageSelected } from "../../Store/actions";
import { LOADING } from "../../Store/constants";
import {selectCurrentPage,selectMoviesStatus,selectNumberByPage,selectPageCount} from "../../Store/selectors";
import { NbPerPageSelector } from "./NbPerPageSelector";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

import "./Pagination.css";

const Pagination = () => {

  const page = useSelector(selectCurrentPage);
  const numberOfPage = useSelector(selectPageCount);
  const numberByPage = useSelector(selectNumberByPage);
  const status = useSelector(selectMoviesStatus);


  const dispatch = useDispatch();


  const handleChangeNumberByPage = (e) => {
    let value = e.target.value;
    if (value === numberByPage) {
      return;
    }

  
    dispatch(numberByPageModifed(e.target.value));
  };


  const handleClick = (number) => {
    if (number === page) {
      return;
    }

   
    dispatch(pageSelected(number));
  };


  const handleClickLeft = () => {
    if (page === 1) {
      return;
    }

    handleClick(page - 1);
  };

  const handleClickRight = () => {
    if (page === numberOfPage) {
      return;
    }

    handleClick(page + 1);
  };
 
  const renderPages = () => {
    let pages = [];

    for (let i = 1; i <= numberOfPage; i++) {
      pages.push({ number: i });
    }

    return pages;
  };


  return (
    <div className="Pagination-MainContainer">
      <div className="Pagination-Container">
        {/* left button */}
        <button
          className="Pagination-Button"
          onClick={handleClickLeft}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {/* pages */}
        <div className="Pagination-PagesContainer">
          {status === LOADING
            ?
            <ClipLoader
              color={"var(--main-border-color)"}
              loading={true}
              size={40}
            />
            :
            renderPages().map((pageOf, index) => {
              return (
                <div
                  className={page === pageOf.number ? "Pagination-Page Pagination-Page-Selected" : "Pagination-Page"}
                  key={`${index}`}
                  onClick={() => { handleClick(pageOf.number); }}
                >
                  {pageOf.number}
                </div>
              );
            })
          }
        </div>
        {/* right button */}
        <button
          className="Pagination-Button"
          onClick={handleClickRight}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <NbPerPageSelector
        onChange={handleChangeNumberByPage}
        value={numberByPage}
      />
    </div>
  );
};


export { Pagination };
