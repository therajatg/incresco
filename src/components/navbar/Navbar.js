import style from "./navbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { searchAction } from "../../features/index";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector((store) => store.filter);
  // console.log(filteredProducts);
  return (
    <nav className={style.nav}>
      <div className={style.logo}>ℳ</div>

      <div className={style.search}>
        <input
          className={style.searchInput}
          type="search"
          placeholder="Search for products, brands and more"
          onChange={(e) => dispatch(searchAction(e.target.value))}
        />
        <AiOutlineSearch className={style.searchIcon} />
      </div>
    </nav>
  );
};
