import { sortAction } from "../../features/index";
import { useDispatch } from "react-redux";
import style from "./sort.module.css";

export const Sort = () => {
  const dispatch = useDispatch();
  return (
    <div className={style.sort}>
      <label htmlFor="products">Sort by:</label>
      <select
        id="products"
        onChange={(e) => dispatch(sortAction(e.target.value))}
      >
        <option value="recommended">Recommended</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="rating">Rating</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
};
