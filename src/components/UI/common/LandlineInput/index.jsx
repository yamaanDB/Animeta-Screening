import React, { useState, useEffect, memo } from "react";
import { IconButton } from "@mui/material";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchIcon from "assets/icons/search.svg";
import classes from "./landline.module.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { numberInput } from "helpers/validation";
//import LandlineData from "Constants/landline.json"
import LandlineData from "Constants/landline.json";


const LandlineInput = ({
  data = LandlineData,
  name,
  handleSelectCode = () => { },
  selectedCode,
  register = {},
  codeRegister = {},
  onChange,
  value = "",
  ...props
}) => {
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState(data);
  const [selected, setSelected] = useState(null)

  const onToggleHandler = (isOpen, e) => {
    if (e.source === "select" && e.originalEvent.target.id === "search") {
      return null;
    } else {
      setShow(isOpen);
    }
  };

  function capitalizeFLetter(str) {
    const splitString =
      str?.split(" ")
        .map((s) => s[0]?.toUpperCase() + s.slice(1)?.toLowerCase()).join(" ") || "";
    return splitString;
  }

  useEffect(() => {
    if (selectedCode) {
      setSelected(options?.find(o => o?.stdCode === selectedCode) || null)
    }
  }, [selectedCode, options])

  const handleSearch = (e) => {
    const value = e.target.value;
    const filteredData = data?.filter(
      (o) =>
        o.stdCode?.toLowerCase().search(value?.toLowerCase()) !== -1 ||
        o.sdcaName?.toLowerCase().search(value?.toLowerCase()) !== -1
    );
    setOptions(filteredData)
  }

  const handleClick = (item) => {
    setSelected(item)
    handleSelectCode(item);
  }

  const renderInput = () => {
    return (
      <div className="input-group">
        <span className={` ${classes.inputgrouptext}`}>
          <IconButton className={classes.searchbtn}>
            <img src={SearchIcon} alt="search icon" />
          </IconButton>
        </span>
        <input
          type="text"
          placeholder="Select City Code"
          className={`form-control ${classes.searchInput}`}
          aria-label="Text input with checkbox"
          id='search'
          onChange={handleSearch}
        />
      </div>
    );
  }

  const renderTitle = () => {
    return (
      <span className={classes.dropdwnIndicator}>
        {selected?.stdCode || ""}
        <KeyboardArrowDownIcon className={classes.dropdownIcon} />
      </span>
    )
  }
  return (
    <InputGroup className={` ${classes.inputgroup}`}>
      <DropdownButton
        variant="outline-secondary"
        title={renderTitle()}
        id="input-group-city-code"
        onToggle={onToggleHandler}
        show={show}
        bsPrefix={`${classes.dropdownBtn} ${show ? classes.show : ""}`}
      >
        <Dropdown.Item
          className={classes.SearchDropdownItem}
          href="#"
          onClick={(e) => e.preventDefault()}

        >
          {renderInput()}
        </Dropdown.Item>
        {options?.length ? (
          options?.map((item) => (
            <Dropdown.Item
              key={`code_${Math.random()}`}
              className={classes.dropdownItem}
              href="#"
              onClick={() => handleClick(item)}
            >
              {item.stdCode && <span className={classes.countryCode}>{item.stdCode}&nbsp; | </span>}
              &nbsp;&nbsp;&nbsp;
              {capitalizeFLetter(item.sdcaName)}
            </Dropdown.Item>
          ))
        ) : (
          <div className={` text-center mx-auto ${classes.dropdownItem}`}>No Data</div>
        )}
      </DropdownButton>
      <input
        name={name}
        className={`form-control ${classes.dropdownInput}`}
        placeholder="Enter landline"
        type="number"
        onChange={onChange}
        value={value}
        onKeyDown={numberInput}
      />
    </InputGroup>
  );
}

export default memo(LandlineInput);