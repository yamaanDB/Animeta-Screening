import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import { useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

import styles from "./index.module.scss";
import DeliverablesTable from "./DeliverablesTable";

import { styled } from "@mui/material/styles";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

import user_img_icon from "assets/icons/Header/user_img_icon.png";

const InventoryComp = () => {
  const location = useLocation();
  const dispatch = useDispatch();
const [activeTab, setActiveTab] = useState("Management");
const [isTableVisible, setIsTableVisible] = useState(false);
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [deliverables, setDeliverables] = useState([]);
    const [visibleCardId, setVisibleCardId] = useState(null);
   const [cards, setCards] = useState([{ id: 1 }]); 
  const menuId = "primary-search-account-menu";

  const ProfileName = styled("div")(({ theme }) => ({
    fontFamily: "Barlow",
    color: "#1E2528",
    display: "flex",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: 600,
    textAlign: "left",
  }));
  const ProfileInfo = styled("div")(({ theme }) => ({
    fontFamily: "Barlow",
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    color: "red",
    textAlign: "left",
  }));
const customStyles = {
  menu: (provided) => ({
    ...provided,
    zIndex: 9999, // Adjust zIndex to ensure it appears above other elements
  }),
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 9999, // Adjust zIndex to ensure it appears above other elements
  }),
  // You can also customize other parts of the Select component if needed
  singleValue: (provided) => ({
    ...provided,
    zIndex: 9999, // Optional, if you need to adjust single value zIndex
  }),
  control: (provided) => ({
    ...provided,
    zIndex: 9999, // Optional, if you need to adjust control zIndex
  }),
};

  const statusDropdownData = [
    { label: "Confirmed", value: "CONFIRMED" },
    { label: "Rejected", value: "REJECTED" },
  ];

   const handleTabChange = (tab) => {
     setActiveTab(tab);
   };

  //  const handleArrowClick = () => {
  //    setIsTableVisible(!isTableVisible);
  //    setIsDropdownOpen(!isDropdownOpen);

  //  };

    const handleArrowClick = (id) => {
      setVisibleCardId((prevId) => (prevId === id ? null : id)); 
       setIsDropdownOpen(!isDropdownOpen);
    };


    const handleAddMoreCreators = () => {

      setCards((prevCards) => [...prevCards, { id: prevCards.length + 1 }]);
    };

  return (
    <div style={{ overflow: "auto" }}>
      <span className={`${styles.breadcrumbs}`}>
        Campaigns / <strong>Biotique Cucumber Toner</strong>
      </span>

      <div className={styles.tabs}>
        <div>
          <button
            className={`${styles.tab} ${
              activeTab === "Campaign Details" ? styles.active : ""
            }`}
            onClick={() => handleTabChange("Campaign Details")}
          >
            Campaign Details
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "Creator Mix" ? styles.active : ""
            }`}
            onClick={() => handleTabChange("Creator Mix")}
          >
            Creator Mix
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "Shortlisted Creator List" ? styles.active : ""
            }`}
            onClick={() => handleTabChange("Shortlisted Creator List")}
          >
            Shortlisted Creator List
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "Management" ? styles.active : ""
            }`}
            onClick={() => handleTabChange("Management")}
          >
            Management
          </button>
        </div>
        <div className="">
          <button
            className={`${styles.tab2} ${
              activeTab === "Management" ? styles.active : ""
            } mx-3`}
            onClick={handleAddMoreCreators}
          >
            Add More Creators
          </button>
          <button
            className={`${styles.tab2} ${
              activeTab === "Management" ? styles.active : ""
            }`}
            onClick={() => handleTabChange("Management")}
          >
            Download as Excel
          </button>
        </div>
      </div>

      {/* <DeliverablesTable /> */}

      <div className={styles.tabContent}>
        {activeTab === "Management" ? (
          <>
            {cards.map((card) => (
              <>
                <div className={styles.card}>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    //onClick={handleProfileMenuOpen}
                    // onClick={handleArrowClick}
                    onClick={() => handleArrowClick(card.id)}
                  >
                    <Avatar alt="user" src={user_img_icon} className="" />
                    <div>
                      <ProfileName>Soham Sinha</ProfileName>
                      <ProfileInfo>Add Delivarable</ProfileInfo>
                    </div>
                    {/* <ArrowDropDown /> */}
                    {/* {isDropdownOpen ? <ArrowDropUp /> : <ArrowDropDown />} */}
                    {visibleCardId === card.id ? (
                      <ArrowDropUp />
                    ) : (
                      <ArrowDropDown />
                    )}
                  </IconButton>
                  <div className="col-2">
                    <Select
                      name="status"
                      isSearchable={false}
                      options={statusDropdownData}
                      placeholder={"Status: Confirmed"}
                      styles={customStyles}
                      // handleChange={(e) => {
                      //   setCurrentPage(1);
                      //   setStatus(e.target.value);
                      // }}
                      // value={statusValue == "" ? statusValue : null}
                    />
                  </div>
                </div>
                {/* <DeliverablesTable />  */}
                {/* {isTableVisible && <DeliverablesTable />} */}
                {visibleCardId === card.id && <DeliverablesTable />}
              </>
            ))}
          </>
        ) : (
          <p>No Data Found</p>
        )}
      </div>
    </div>
  );
};

export default InventoryComp;
