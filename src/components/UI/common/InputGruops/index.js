import React, { useState, useEffect } from "react";

import style from "./style.module.scss";

const InputGroup = (props) => {
  const {
    prefixName,
    suffixName,
    prefixValue,
    suffixValue,
    onSetValues,
    options,
    name,
    minlength = 100,
    minValue,
    step,
    type = "text",
    fullWidth,
    placeholder,
    staticPlaceholder,
    width90 = false
  } = props;
  const [suffix, setSuffix] = useState(suffixValue);
  const [value, setValue] = useState(prefixValue);
  useEffect(() => {
    setValue(prefixValue);
    setSuffix(suffixValue);
  }, [prefixValue, suffixValue]);
  const onChangeHandler = (e) => {
    if (e.target.name === prefixName) {
      const value = e.target.value;
      if (value >= 0 && value <= minValue && value?.length <= +minlength) {
        setValue(value);
        onSetValues({
          name: name,
          value: { [prefixName]: value, [suffixName]: suffix },
          parent: props?.parent,
          subparent: props?.subparent,
          isGroup: true,
        });
      }
    } else {
      setSuffix(e.target.value);
      onSetValues({
        name: name,
        value: { [prefixName]: value, [suffixName]: e.target.value },
        parent: props?.parent,
        subparent: props?.subparent,
        isGroup: true,
      });
    }
  };
  return (
    <div className={`${fullWidth ? "" : "width100"} input-group ${width90 ? style["width90"] : ""}`}>
      {staticPlaceholder ? (
        <div style={{ position: "relative" }}>
          <input
            type={type}
            step={step || ""}
            name={prefixName}
            value={value}
            className={`form-control ${style["enlarged-formControl"]}`}
            placeholder={placeholder}
            onChange={onChangeHandler}
          />
          <span className={`${style["static-placeholder"]}`}>
            {staticPlaceholder}
          </span>
        </div>
      ) : (
        <input
          type={type}
          step={step || ""}
          name={prefixName}
          value={value}
          className={`form-control ${style["enlarged-formControl"]}`}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      )}
      <div className={"input-group-append pl-md-0 pl-1"}>
        <select
          name={suffixName}
          className={`${style.inlineSelect} ${style.zIndex10}`}
          onChange={onChangeHandler}
          value={suffix}
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputGroup;
