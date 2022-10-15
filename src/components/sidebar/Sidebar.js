import style from "./sidebar.module.css";
import { Categories, Brand, Gender } from "../index";
import { useDispatch } from "react-redux";
import { resetAction } from "../../features";

export const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <aside className={style.sidebar}>
      <Gender />
      <Categories />
      <Brand />
      <button onClick={() => dispatch(resetAction())}>Clear All</button>
    </aside>
  );
};
