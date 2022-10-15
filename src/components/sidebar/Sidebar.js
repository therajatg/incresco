import style from "./sidebar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Categories, Brand, Gender } from "../index";

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <Gender />
      <Categories />
      <Brand />
      <button>Clear All</button>
    </aside>
  );
};
