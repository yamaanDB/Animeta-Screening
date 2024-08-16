import React, { useState, useEffect, useRef } from "react";
import classes from "./ReactSearchDropdown.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "assets/icons/search.svg";
import IconButton from "@mui/material/IconButton";
import Select, { components } from "react-select";
import { ExpandLess } from "@mui/icons-material";

const ReactSearchSelect = ({
  placeholder = "Search role",
  options = [],
  value,
  name,
  notification = false,
  ...props
}) => {
  const wrapperRef = useRef(null);

  const [state, setState] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        //setState((open) => false);
        setState((open) => false);
      }
    };

    window.addEventListener("click", handleClickOutside, true);
    return () => {
      // eslint-disable-next-line no-restricted-globals
      window.removeEventListener("click", removeEventListener, true);
    };
  }, []);

  const toggleOpen = async () => {
    setState((open) => !open);
  };

  const handleChange = (newValue) => {
    let { isMulti } = props;
    if (!!isMulti) {
      let body = {
        target: {
          name,
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
      props.handleChange(body, newValue?.value);
    } else {
      let body = {
        target: {
          name: props.name,
          value: newValue ? newValue.value : "",
          label: newValue ? newValue.label : "",
        },
      };
      props.handleChange(body, newValue);
    }
    toggleOpen();
  };

  const renderDisplay = () => {
    const newValue = value ? options.find((o) => o.value.includes(value)) : "";
    return (
      <button
        className={`${classes.input} ${newValue ? classes.selected : ""}`}
        onClick={toggleOpen}
        style={{ position: "relative" }}
      // style={{
      //   color: "#1E2528"
      // }}
      >
        {newValue.label || placeholder}
        {/* <IconButton className={classes.expandIcon}> */}
        {state ? <ExpandLess /> : <ExpandMoreIcon />}
        {/* </IconButton> */}
      </button>
    );
  };

  return (
    <div ref={wrapperRef}>
      <Dropdown
        className="search-dropdown"
        isOpen={state}
        target={renderDisplay()}
      >
        <div>
          <IconButton className={classes.iconbtn}>
            <img
              className={classes.expandmoreIcon}
              src={SearchIcon}
              alt="search icon"
            />
          </IconButton>
          <Select
            name={name}
            className={classes.search_select_wrap}
            classNamePrefix="search_select"
            // autoFocus
            backspaceRemovesValue={false}
            controlShouldRenderValue={false}
            hideSelectedOptions={false}
            isClearable={false}
            menuIsOpen
            onChange={handleChange}
            options={options}
            placeholder={placeholder}
            tabSelectsValue={false}
            components={{ IndicatorSeparator: null, DropdownIndicator: null }}
            menuPosition="relative"
          />
        </div>
      </Dropdown>
    </div>
  );
};

const Dropdown = ({ children, isOpen, target, onClose }) => (
  <div className="position-relative">
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
  </div>
);

const Menu = (props) => <div className={classes.menu} {...props} />;

export default ReactSearchSelect;
