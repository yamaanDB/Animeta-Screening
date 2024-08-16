import React from "react";
import "./index.scss";

const CommonLabelInput = ({
  register = {},
  type = "text",
  name,
  placeholder,
  className = "",
  value,
  onChange,
  suffixText = "",
  prefixText = "",
  maxLength,
  disabled = false,
  width = "100%",
  onKeyDown,
  max,
  styles,
  typeDisabled,
  id = "",
}) => {
  return (
    <div className="d-flex">
      <div className="input-group">
        {prefixText && (
          <span
            className="input-group-text B3-Medium fw-600"
            id={`addon-${name}`}
          >
            {prefixText}
          </span>
        )}
        <input
          type={type}
          id={id}
          style={{ width: `${width}` }}
          className={`${className} prefixInputs ${
            typeDisabled ? "filedDisabled" : ""
          }  ${disabled ? "disabled" : ""}`}
          placeholder={placeholder}
          name={name}
          {...register}
          aria-autocomplete="off"
          onKeyDown={onKeyDown}
          defaultValue={value}
          onWheel={(event) => event.currentTarget.blur()}
          onChange={(e) => {
            const body = {
              target: {
                name: e.target.name,
                value: e.target.value,
              },
            };
            if (onChange) onChange(body);
            register?.onChange?.(body);
          }}
          autoComplete={"off"}
          maxLength={maxLength}
          max={max}
          disabled={disabled}
        />

        {suffixText && (
          <span
            className={`input-group-text B3-Medium fw-bold 
           ${disabled ? "filedDisabled" : ""}`}
            id={`addon-${name}`}
            style={styles}
          >
            {suffixText}
          </span>
        )}
      </div>
    </div>
  );
};

export default CommonLabelInput;
