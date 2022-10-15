import React from "react";
import style from "./productCard.module.css";

export const ProductCard = ({ item }) => {
  const { searchImage, brand, productName, price, mrp, discountDisplayLabel } =
    item;
  return (
    <div className={style.productCard}>
      <div>
        <img className={style.image} src={searchImage} alt="product-image" />
      </div>
      <div className={style.info}>
        <p className={style.brandName}>{brand}</p>
        <p className={style.description}>{productName}</p>
        <p className={style.price}>
          Rs. {price} <span className={style.mrp}>Rs. {mrp}</span>{" "}
          <span className={style.discountPercent}>{discountDisplayLabel}</span>
        </p>
      </div>
    </div>
  );
};
