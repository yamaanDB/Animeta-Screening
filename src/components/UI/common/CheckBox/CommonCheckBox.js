import React from "react";
import styles from "./checkbox.module.scss"

const CommonCheckBox = ({
  isChecked,
  width = "18px",
  height = "18px",
  onChange,
  register = {},
  name,
  customClass = "",
  isDropdown = false,
  id = ""
}) => {
  return (
    <input
      id={id}
      className={`${styles.checkboxInput} ${isDropdown ? styles.dropdownCheckbox : ""} ${customClass}`}
      style={{
        width: width,
        height: height,
      }}
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
      {...register}
      name={name}
    />
  );
};

export default CommonCheckBox;
