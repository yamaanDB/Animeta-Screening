import React, { Component, useState } from "react";
import Select, { components } from "react-select";

import AddPropertyModal from "../AddPropertyModal";
// images and svg
import icon from "assets/images/Icon.svg";
import circleAdd from "assets/icons/circleAdd.svg";

import classes from "./Select.module.scss";
import CommonCheckBox from "../CheckBox/CommonCheckBox";
import { IconButton } from "@mui/material";
import SearchIcon from "assets/icons/search.svg";

class NormalMultiSelect extends Component {
  state = {
    showAddPropertyModal: false,
    options: this.props.options,
    menuIsOpen: false,
  };
  //change select

  UNSAFE_componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (
      JSON.stringify(nextProps.options) !== JSON.stringify(this.state.options)
    ) {
      let options = nextProps.options;
      this.setState({ options });
    }
    if (nextProps.updatedValue && nextProps.showCheckbox) {
      const options = nextProps.options.map((o) => {
        const selectedValue = nextProps.updatedValue.some(
          (k) => k.value === o.value
        );
        return {
          ...o,
          isChecked: selectedValue,
        };
      });
      this.setState({ options });
    }
  }

  handleChange = (newValue) => {
    let { isMulti } = this.props;
    if (!!isMulti) {
      let body = {
        target: {
          name: this.props.name,
          value: [],
        },
      };
      if (!!newValue && newValue.length) {
        newValue.forEach((array) => {
          let obj = {
            value: array.value,
            label: array.label,
          };
          body.target.value.push(obj);
        });
      }
      this.props.handleChange(body, newValue?.value);
    } else {
      let body = {
        target: {
          name: this.props.name,
          value: newValue ? newValue.value : "",
          label: newValue ? newValue.label : "",
        },
      };

      this.props.handleChange(body, newValue);
    }
  };

  //handle Input Change
  handleInputChange = (newValue) => {
    let body = {
      target: {
        name: this.props.name,
        value: newValue ? newValue : "",
      },
    };
    this.props.handleinputChange && this.props.handleinputChange(body);
  };

  onSubmit = (newValues) => {
    const values = newValues.fieldArray.map(({ name }) => ({
      value: name,
      label: name,
    }));
    const lastlength = values.length - 1;
    if (values[lastlength].value === "") {
      values.splice(lastlength, 1);
    }
    this.props.handleAdd?.(newValues);
    this.setState({
      options: this.state.options.concat(values),
      showAddPropertyModal: false,
    });
  };

  render() {
    let {
      className = "select-form-control w-100",
      options = [],
      value = "",
      name = "",
      showErrorBorder = false,
      placeholder = "",
      disabled = false,
      isMulti = false,
      isClearable = false,
      isSearchable = false,
      showArrow = true,
      grayed = false,
      borderRadius = false,
      filterOption,
      notification = false,
      addProperty = false,
      addPropertyLabel = "Add new property type",
      inputPlaceholder = "",
      showCheckbox = false,
      customPrefix = "",
      showfooterButton = false,
      closeMenuOnSelect = true,
      menuPosition = "absolute",
      isAnimateArrow = true,
      hideSelectedOptions = false,
      inputType = "text",
      newOptions = [],
      showValue = true
    } = this.props;

    const DropdownIndicator = (props) => {
      return (
        components.DropdownIndicator && (
          <components.DropdownIndicator {...props}>
            {/* <span>{!disabled && <img src={icon} alt="" />}</span> */}
          </components.DropdownIndicator>
        )
      );
    };

    const handleClick = () => {
      this.setState((prev) => ({
        ...prev,
        showAddPropertyModal: !prev.showAddPropertyModal,
      }));
    };

    const Menu = (props) => {
      const valuelength =
        props.selectProps.options.filter((o) => o.isChecked).length > 0;

      const handleApply = () => {
        const selectedValue = props.selectProps.options.filter(
          (o) => o.isChecked
        );
        props.selectProps.onChange(selectedValue);
        this.setState({ menuIsOpen: false });
      };
      return (
        <components.Menu {...props}>
          {props.selectProps.addProperty ? (
            <div className={classes.wrapProperty} onClick={handleClick}>
              <img className={classes.addIcon} src={circleAdd} />
              <div className={classes.text}>{addPropertyLabel}</div>
            </div>
          ) : null}
          <div className={classes.text}>{props.children}</div>
          {props.selectProps.showfooterButton ? (
            <div className={classes.dropdownFooter}>
              <a
                className={`${classes.applybtn} ${valuelength && classes.active
                  }`}
                onClick={handleApply}
              >
                Apply
              </a>
            </div>
          ) : null}
        </components.Menu>
      );
    };

    const Option = ({
      getStyles,
      Icon,
      isDisabled,
      isFocused,
      isSelected,
      children,
      innerProps,
      selectProps,
      ...rest
    }) => {
      const [isActive, setIsActive] = useState(false);
      const onMouseDown = (e) => {
        setIsActive(true);
      };
      const onMouseUp = () => setIsActive(false);
      const onMouseLeave = () => setIsActive(false);

      let bg = "transparent";
      if (isFocused) bg = "#eee";
      if (isActive) bg = "#B2D4FF";
      if (isDisabled) bg = "#d2d1d1";
      const style = {
        alignItems: "center",
        color: "inherit",
        display: "flex",
        backgroundColor: bg,
        cursor: isDisabled ? "not-allowed" : "inherit"
      };

      const onClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const selectedValue = rest.data; // Change this to whatever value you want to set
        const newOptions = this.state.options.map((o) => ({
          ...o,
          isChecked:
            o.value === selectedValue.value
              ? !selectedValue.isChecked
              : o.isChecked,
        }));
        this.setState({ options: newOptions });
      };

      const newProps = {
        ...(selectProps.showCheckbox && selectProps.showfooterButton
          ? { onClick }
          : {}),
      };
      const props = {
        ...innerProps,
        ...newProps,
        onMouseDown,
        onMouseUp,
        onMouseLeave,
        style,
      };
      return (
        <components.Option
          {...rest}
          isDisabled={isDisabled}
          isFocused={isFocused}
          isSelected={isSelected}
          getStyles={getStyles}
          innerProps={props}
        >
          {selectProps.showCheckbox && (
            <CommonCheckBox isDropdown isChecked={rest.data.isChecked} />
          )}
          {children}
        </components.Option>
      );
    };

    const customStyles = {
      control: (base) => ({
        ...base,
        background: grayed ? "#F1F1F1" : "transparent",
      }),
      multiValueRemove: (base) => ({ ...base, display: "none" }),
    };
    const customStylesAnimate = {
      control: (base) => ({
        ...base,
        background: grayed ? "#F1F1F1" : "transparent",
      }),
      multiValueRemove: (base) => ({ ...base, display: "none" }),
      dropdownIndicator: (base, state) => ({
        ...base,
        color: "#1E2528",
        transition: "all .2s ease",
        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
      }),
    };

    const handleMenu = (menuIsOpen) => {
      const { options, updatedValue, name } = this.props;
      let updatedOptions = options, selectedIds = [], updatedState = { menuIsOpen };
      if (updatedValue?.length && updatedOptions?.length && name == "residentType") {
        selectedIds = updatedValue?.map?.(a => a?.value)?.filter?.(Boolean) || [];
        updatedOptions = updatedOptions.map(a => ({ ...a, isChecked: selectedIds?.includes(a?.value) }))
        updatedState.options = updatedOptions
      }
      this.setState(updatedState)
    }

    return (
      <>
        <Select
          onMenuOpen={() => handleMenu(true)}
          onMenuClose={() => handleMenu(false)}
          ref={this.props.selectRef}
          menuPosition={menuPosition}
          className={` ${classes.react_select} ${className}`}
          classNamePrefix={`Select`}
          isDisabled={disabled}
          notification={notification}
          isClearable={isClearable}
          isSearchable={isSearchable}
          name={name}
          options={this.state.options}
          onChange={this.handleChange}
          isMulti={isMulti}
          showArrow={showArrow}
          filterOption={filterOption}
          placeholder={placeholder}
          styles={isAnimateArrow ? customStylesAnimate : customStyles}
          // value={
          //   !!options && options.length > 0
          //     ? options.find((data) => data.value === value)
          //       ? options.find((data) => data.value === value)
          //       : null
          //     : null
          // }
          value={
            showValue ? !notification
              ? Array.isArray(value) && value?.length > 0
                ? isMulti
                  ? value
                  : options?.filter((data) => value?.includes(data?.value))
                : options?.find((data) => data?.value === value)
              : Array.isArray(value) &&
              value?.length > 0 &&
              options?.filter((data) => value?.includes(data?.value)) : value
          }
          components={{ DropdownIndicator, Menu, Option }}
          addProperty={addProperty}
          addPropertyLabel={addPropertyLabel}
          inputPlaceholder={inputPlaceholder}
          showCheckbox={showCheckbox}
          closeMenuOnSelect={closeMenuOnSelect}
          hideSelectedOptions={hideSelectedOptions}
          showfooterButton={showfooterButton}
          menuIsOpen={this.state.menuIsOpen}
        />
        {this.state.showAddPropertyModal && (
          <AddPropertyModal
            handleClose={handleClick}
            onSubmit={this.onSubmit}
            title={addPropertyLabel}
            options={this.state.options}
            inputPlaceholder={inputPlaceholder}
            inputType={inputType}
            newOptions={newOptions}
          />
        )}
      </>
    );
  }
}

export default NormalMultiSelect;
