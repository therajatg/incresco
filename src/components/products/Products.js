import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../index";
import style from "./products.module.css";

export const Products = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("https://demo7303877.mockable.io/");
      setProductData(response.data.products);
      console.log(response.data.products);
    })();
  }, []);
  return (
    <main className={style.main}>
      {productData?.map((item) => (
        <ProductCard item={item} key={item.productId} />
      ))}
    </main>
  );
};
