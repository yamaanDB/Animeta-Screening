// CustomMultiSelect.js
import React from 'react';
import Select, { useCreatable } from 'react-select/creatable';
import "./style.scss";
import icon from "assets/images/Icon.svg";

const CreateSelect = ({ options, value, onChange, placeholder, disabled = false }) => {

  const customComponents = {
    DropdownIndicator: (props) => {
      return (
        <div
          {...props.innerProps}
          style={{
            ...props.innerProps.style,
            // Add your custom styles for the dropdown indicator here
          }}
        >
          {/* Replace this with your custom dropdown icon */}
          <span>{!disabled && <img src={icon} alt="" />}</span>
        </div>
      );
    },
    Option: (innerProps, label) => {
      return (
        <div {...innerProps} className="custom-option">
          <input type="checkbox" className="custom-option-checkbox" />
          {label}
        </div>
      );
    },
    MultiValue: (data) => {
      return (
        <div className="custom-multi-value">
          <span className="custom-multi-value-label">{data.label}</span>
          <span className="custom-multi-value-checkbox">&#10003;</span>
        </div>
      );
    },

  };

  return (
    <Select
      isMulti
      isDisabled={disabled}
      options={options}
      value={
        Array.isArray(value) && value?.length > 0
          ? options?.filter((data) => value?.includes(data?.value))
          : options?.find((data) => data?.value === value)
      }
      onChange={onChange}
      className="custom-select"
      classNamePrefix="custom-select"
      placeholder={placeholder}
      // components={{
      //   // MultiValue: CustomMultiValue, // Custom component for selected values
      //   // Option: CustomOption, // Custom component for options
      //   // DropdownIndicator: DropdownIndicator
      // }}
      components={customComponents}
    />
  );
};

export default CreateSelect;
