import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import style from "./categories.module.css";
import { categoryAction } from "../../features/index";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedcategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const { filteredProducts, products } = useSelector((store) => store.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const categoryData = filteredProducts.map((product) => product.category);
    setCategories(
      categoryData.filter(
        (categoryName, index) => categoryData.indexOf(categoryName) === index
      )
    );
  }, [products]);

  const categoryChangeHandler = (e) => {
    setSelectedcategories(
      selectedCategories.includes(e.target.value)
        ? selectedCategories.filter((category) => category !== e.target.value)
        : [...selectedCategories, e.target.value]
    );
  };

  useEffect(() => {
    dispatch(categoryAction(selectedCategories));
  }, [selectedCategories]);

  return (
    <div>
      <h4>CATEGORIES</h4>
      {!showAll &&
        categories?.slice(0, 8).map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              id={category}
              value={category}
              onChange={categoryChangeHandler}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      {!showAll && (
        <p onClick={() => setShowAll(true)} className={style.remaining}>
          + {categories?.length - 8} more
        </p>
      )}

      {showAll &&
        categories?.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              id={category}
              value={category}
              onChange={categoryChangeHandler}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
    </div>
  );
};
