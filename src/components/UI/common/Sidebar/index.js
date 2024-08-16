/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
// styles
import "./style.scss";
// internal components
import { navLinks } from "helpers/Constants";
import { Link, useLocation } from "react-router-dom";

// helpers
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";

function SidebarMenu({ privilegesData }) {
  const theme = "";
  const [collapsed, setCollapsed] = useState(true);
  const [toggled, setToggled] = useState(true);
  const [broken, setBroken] = useState(false);
  const [rtl, setRtl] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  //const [theme, setTheme] = useState("dark");

  const location = useLocation();
  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setTimeout(
      setCollapsed(false), 500);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setTimeout(
      setCollapsed(true), 500);
  };
  return (
    <div
      className="main-sidebar cursor-pointer"
    >
      <div className="arrow-div">
        {collapsed ? (
          <div className="wrap">
            <ChevronRightOutlined
              onClick={() => handleMouseEnter()}
              className="collapse-icon cursor-pointer"
            />
          </div>
        ) : (
          <div className="wrap-active">
            <ChevronLeftOutlined
              onClick={() => handleMouseLeave()}
              className="expand-icon"
            />
          </div>
        )}
      </div>
      <Sidebar
        collapsed={collapsed}
        toggled={false}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        rtl={rtl}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            minHeight: "60vh",
            paddingTop: "50px"
          }}
        >
          <div className="">
            <Menu style={{ textDecoration: "none" }}>
              {React.Children.toArray(
                navLinks.map(
                  (
                    {
                      to,
                      label,
                      iconName,
                      inactiveIcon,
                      subNav,
                      privilegesName,
                    },
                    index
                  ) => {
                    const privilege = privilegesData?.[privilegesName];
                    if (privilege && privilege?.view && subNav?.length > 0) {
                      return (
                        <SubMenu
                          icon={
                            location.pathname.startsWith(to) ? (
                              <img src={iconName} alt={label} width={100} />
                            ) : (
                              <img src={inactiveIcon} alt={label} width={100} />
                            )
                          }
                          label={label}
                          key={index}
                          style={{ textDecoration: "none" }}
                        >
                          {React.Children.toArray(
                            subNav?.map(
                              (
                                {
                                  to,
                                  iconName,
                                  inactiveIcon,
                                  label,
                                  privilegesName,
                                  multiLevelNav,
                                },
                                index
                              ) => {
                                return (
                                  <MenuItem
                                    icon={
                                      location.pathname.startsWith(to) ? (
                                        <img
                                          src={iconName}
                                          alt={label}
                                          width={"36px"}
                                          height={"36px"}
                                        />
                                      ) : (
                                        <img
                                          src={inactiveIcon}
                                          alt={label}
                                          width={"40px"}
                                          height={"40px"}
                                        />
                                      )
                                    }
                                    key={index}
                                    className="inactive-icon"
                                    component={
                                      <Link to={to ? to : location.pathname} />
                                    }
                                  >
                                    {label}
                                  </MenuItem>
                                );
                              }
                            )
                          )}
                        </SubMenu>
                      );
                    } else {
                      return (
                        <MenuItem
                          icon={
                            location.pathname.startsWith(to) ? (
                              <img src={iconName} />
                            ) : (
                              <img src={inactiveIcon} />
                            )
                          }
                          key={index}
                          component={<Link to={to ? to : location.pathname} />}
                          active={location.pathname.startsWith(to)}
                        >
                          {label}
                        </MenuItem>
                      );
                    }
                  }
                )
              )}
            </Menu>
          </div>
        </div>
      </Sidebar>

    </div>
  );
}

export default SidebarMenu;
