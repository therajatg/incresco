import style from "./gender.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { genderAction } from "../../features/index";

export const Gender = () => {
  const [allGenders, setAllGenders] = useState([]);
  const { filteredProducts } = useSelector((store) => store.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const genderData = filteredProducts.map((product) => product.gender);
    setAllGenders(
      genderData.filter(
        (genderName, index) => genderData.indexOf(genderName) === index
      )
    );
  }, [filteredProducts]);

  return (
    <div className={style.gender}>
      {allGenders?.map((gender) => (
        <div key={gender}>
          <input
            type="radio"
            id={gender}
            name="gender"
            value={gender}
            onChange={() => dispatch(genderAction(gender))}
          />
          <label htmlFor={gender}>{gender}</label>
        </div>
      ))}
    </div>
  );
};
