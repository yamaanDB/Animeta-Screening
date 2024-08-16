import React, { useEffect } from "react";
import SidebarMenu from "components/UI/common/Sidebar";
import { ThemeProvider } from "@mui/material";
import Header from "components/UI/common/Header";
import { userData } from "helpers/RoleAccessData";
import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "redux/slice/homeSlice";
import classes from "./classes.module.scss"

export function MainLayout(props) {
  const theme = useSelector((state) => state?.theme);
  const state = useSelector((state) => state?.home?.privileges);

  const dispatch = useDispatch();

  const getPrivileges = () => {
    // get role access api call here...

    // save the data to redux
    dispatch(homeActions.updatePrevilegesState(userData));
  };

  useEffect(() => {
    getPrivileges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${theme} mainLayout`}>
      <div style={{ zIndex: "1", position: "sticky", top: 1, height: "60px" }}>
        <Header />
      </div>
      <div className={classes.root + ""} style={{top: "10px"}}>
        <SidebarMenu
          className={classes.sidebar}
          privilegesData={state}
        />
        
        <main
          className={classes.content}
        >
          {props.children}
        </main>
        
      </div>
    </div>
  );
}
