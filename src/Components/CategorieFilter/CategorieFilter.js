import { moviesFiltered } from "../../Store/actions";
import { selectCategories, selectCategory } from "../../Store/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./CategorieFIlter.css";


const CategorieFilter = () => {

  const options = useSelector(selectCategories);
  const category = useSelector(selectCategory);


  const dispatch = useDispatch();

  const handleChange = (e) => {
    let value = e.target.value;

    dispatch(moviesFiltered(value));
  };
  
  return (
    <div>
      <select
        className="CategorieFilter-select"
        id="categorieFilter"
        name="categories"
        onChange={handleChange}
        value={category}
      >
        <option value="">Catégorie</option>
        {options.map((categorie, index) => {
          return (
            <option
              key={`${index}`}
              value={categorie}
            >
              {categorie}
            </option>
          );
        })}
      </select>
    </div>
  );

};

export { CategorieFilter };
