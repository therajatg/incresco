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
      <input
        type="radio"
        id="unisex"
        name="gender"
        value="Unisex"
        onChange={() => dispatch(genderAction("Unisex"))}
      />
      <label htmlFor="unisex">Unisex</label>
      <br />
      <input
        type="radio"
        id="men"
        name="gender"
        value="Men"
        onChange={() => dispatch(genderAction("Men"))}
      />
      <label htmlFor="men">Men</label>
      <br />
      <input
        type="radio"
        id="women"
        name="gender"
        value="Women"
        onChange={() => dispatch(genderAction("Women"))}
      />
      <label htmlFor="women">Women</label>
      <br />
      <input
        type="radio"
        id="boys"
        name="gender"
        value="Boys"
        onChange={() => dispatch(genderAction("Boys"))}
      />
      <label htmlFor="boys">Boys</label>
    </div>
  );
};
