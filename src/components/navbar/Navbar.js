import style from "./navbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>ℳ</div>

      <div className={style.search}>
        <input
          className={style.searchInput}
          type="search"
          placeholder="Search for products, brands and more"
        />
        <AiOutlineSearch className={style.searchIcon} />
      </div>
    </nav>
  );
};
