import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import Logo from "assets/icons/Header/bostonLogo.svg";
import { ReactComponent as QueryIcon } from "assets/icons/Header/query_icon.svg";
import { ReactComponent as NotificationIcon } from "assets/icons/Header/notification_icon.svg";
import user_img_icon from "assets/icons/Header/user_img_icon.png";
import Avatar from "@mui/material/Avatar";
import "./header.scss";
import { ArrowDropDown } from "@mui/icons-material";

const PrimarySearchAppBar = styled("div")(({ theme }) => ({
  flexGrow: 2,
  paddingTop: "1px",
  paddingBottom: "10px",
  marginLeft: "18px !important",
  marginRight: "18px !important",
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up("sm")]: {
    marginLeft: "0px",
    marginRight: "0px"
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  height: "40px",
  backgroundColor: "#F6F6F6",
  "&:hover": {
    backgroundColor: "#F6F6F6",
  },
  marginRight: theme.spacing(2),
  marginLeft: "0px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#1E2528",
}));

const ProfileName = styled("div")(({ theme }) => ({
  fontFamily: "Barlow",
  color: "white",
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
  color: "#A5A8A9",
  textAlign: "left",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#1E2528",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '445px'
    },
  },
}));

const SectionDesktop = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  marginLeft: "80px",
  gap: "15px"
}));

const SectionMobile = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <QueryIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications">
          <Badge badgeContent={2} color="secondary">
            <NotificationIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <Avatar alt="user" src={user_img_icon} width={'100px'} />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <PrimarySearchAppBar>
      <AppBar position="static">
        <Toolbar>
          {/* <img src={Logo} className="m-0 p-0" alt="Logo" /> */}
          <span className={`breadcrumbs`}>
            <strong>Animeta</strong>
          </span>
          <div style={{ display: "flex", flex: 1 }}></div>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              name={"common-search"}
              placeholder="Search for a unit, tenant or staff"
              className="B3-Medium"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}

          <SectionDesktop>
            <IconButton aria-label="show 4 new mails">
              <QueryIcon />
            </IconButton>
            <IconButton aria-label="show 17 new notifications">
              <Badge badgeContent={2} color="secondary">
                <NotificationIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              //onClick={handleProfileMenuOpen}
              onClick={() => {}}
            >
              <Avatar alt="user" src={user_img_icon} className="" />
              <div style={{color:"white !important"}}>
                <ProfileName>User</ProfileName>
                <ProfileInfo>FOE</ProfileInfo>
              </div>
              <ArrowDropDown />
            </IconButton>
          </SectionDesktop>
          <SectionMobile>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </SectionMobile>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </PrimarySearchAppBar>
  );
}
