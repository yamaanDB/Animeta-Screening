import React, { useState, useRef, useEffect } from 'react';
import styles from "./style.module.scss"; // Import the SCSS file
// import { ReactComponent as BottomDrop} from '../../../assets/icons/bottowDrop.svg';

const MultiSelectDropdown = ({ options, selectedOptions, setSelectedOptions, label, className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleCheckboxChange = (option) => {
    const updatedOptions = selectedOptions?.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    setSelectedOptions(updatedOptions);
  };

  const handleSelectAll = () => {
    setSelectedOptions(isAllSelected() ? [] : options);
  };

  const isAllSelected = () => selectedOptions?.length === options?.length;

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles["multi-select-dropdown"]} ${isDropdownOpen ? styles['open'] : ''}`} ref={dropdownRef}>
      <button className={styles[className]} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {label} 
        {/* <BottomDrop/> */}
      </button>
      {isDropdownOpen && (
        <div className={styles["dropdown-list"]}>
          <label className={styles["checkbox-label"]}>
            <input
              type="checkbox"
              checked={isAllSelected()}
              onChange={handleSelectAll}
            />
            Select All
          </label>
          {options?.map((option) => (
            <label key={option} className={styles["checkbox-label"]}>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions?.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
