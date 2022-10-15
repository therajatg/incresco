import style from "./gender.module.css";

export const Gender = () => {
  return (
    <div className={style.gender}>
      <input type="radio" id="men" name="gender" />
      <label htmlFor="men">Men</label>

      <input type="radio" id="women" name="gender" />
      <label htmlFor="women" name="gender">
        Women
      </label>

      <input type="radio" id="boys" name="gender" />
      <label htmlFor="boys" name="gender">
        Boys
      </label>

      <input type="radio" id="girls" name="gender" />
      <label htmlFor="girls" name="gender">
        Girls
      </label>
    </div>
  );
};
