import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import style from "./brand.module.css";
import { brandAction } from "../../features/index";

export const Brand = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const { filteredProducts, products } = useSelector((store) => store.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const brandsData = filteredProducts.map((product) => product.brand);
    setBrands(
      brandsData.filter(
        (brandName, index) => brandsData.indexOf(brandName) === index
      )
    );
  }, [products]);

  const brandChangeHandler = (e) => {
    setSelectedBrands(
      selectedBrands.includes(e.target.value)
        ? selectedBrands.filter((brand) => brand !== e.target.value)
        : [...selectedBrands, e.target.value]
    );
  };

  useEffect(() => {
    dispatch(brandAction(selectedBrands));
  }, [selectedBrands]);

  return (
    <div>
      <h4>BRAND</h4>
      {!showAll &&
        brands?.slice(0, 8).map((brand) => (
          <div key={brand}>
            <input
              type="checkbox"
              id={brand}
              value={brand}
              onChange={brandChangeHandler}
            />
            <label htmlFor={brand}>{brand}</label>
          </div>
        ))}
      {!showAll && (
        <p onClick={() => setShowAll(true)} className={style.remaining}>
          + {brands?.length - 8} more
        </p>
      )}

      {showAll &&
        brands?.map((brand) => (
          <div key={brand}>
            <input
              type="checkbox"
              id={brand}
              value={brand}
              onChange={brandChangeHandler}
            />
            <label htmlFor={brand}>{brand}</label>
          </div>
        ))}
    </div>
  );
};
