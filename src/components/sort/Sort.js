import { priceAction, ratingAction, yearAction } from "../../features/index";
import { useDispatch } from "react-redux";

export const Sort = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <label htmlFor="products">Sort by:</label>
      <select id="products" onChange={(e) => dispatch()}>
        <option value="recommended">Recommended</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="rating">Rating</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
};
