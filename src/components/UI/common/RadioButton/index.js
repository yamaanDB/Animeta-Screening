import React from "react";

const RadioButton = ({
  label,
  value,
  checkedValue,
  className,
  onRadioChange,
}) => {
  const handleRadioChange = () => {
    onRadioChange(value);
  };

  return (
    <div className="d-flex align-items-center">
      <input
        type="radio"
        value={value}
        checked={value === checkedValue}
        onChange={handleRadioChange}
        style={{
          width: "20px",
          height: "20px",
          accentColor: "#522987",
          cursor: "pointer",
        }}
      />
      <label className={`m-0 px-3 fs-14 ${className}`}> {label}</label>
    </div>
  );
};

export default RadioButton;
