import { useEffect } from "react";
import { ProductCard } from "../index";
import style from "./products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductData } from "../../features/index";

export const Products = () => {
  const { filteredProducts } = useSelector((store) => store.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  return (
    <main className={style.main}>
      {filteredProducts.length === 0 ? (
        <h2>Item not found</h2>
      ) : (
        filteredProducts?.map((item) => (
          <ProductCard item={item} key={item.productId} />
        ))
      )}
    </main>
  );
};
