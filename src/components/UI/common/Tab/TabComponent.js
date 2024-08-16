import React, { useEffect } from "react";
// styles
import "./style.scss";

const TabComponent = ({
  activeTab,
  setActiveTab,
  tabs,
  setActiveTabName = () => {},
  activeTabName = "",
  isRoomPackage = false
}) => {
  const handleTab = (tab, name) => {
    setActiveTab(tab);
    if (name) {
      setActiveTabName(name);
      localStorage.setItem("activeTab", tab);
      localStorage.setItem("activeTabName", name);
    } else {
      localStorage.setItem("activeTab", tab);
    }
  };

  useEffect(() => {
    if (activeTabName) {
      handleTab(activeTab, activeTabName);
    } else {
      handleTab(activeTab);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={isRoomPackage ? "room_package_tab" : "tab_design"}>
      {tabs.length > 0 &&
        tabs.map((tab, i) => (
          <div
            key={i}
            className={
              activeTab === i
                ? "tab_design_active"
                : "tab_design_inActive"
            }
            onClick={() => {
              handleTab(i, tab.title);
            }}
          >
            {tab.title}
          </div>
        ))}
    </div>
  );
};

export default TabComponent;
