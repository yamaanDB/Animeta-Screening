import active_menu from "assets/icons/Menu/active_menu.svg";
import inactive_menu from "assets/icons/Menu/inactive_menu.svg";
import CampaignIcon from "assets/icons/Menu/campaign-svgrepo-com.svg";


export const navLinks = [
  {
    to: "/",
    label: "Campaign",
    iconName: CampaignIcon,
    inactiveIcon: inactive_menu,
    privilegesName: "dashboard",
  },
  {
    to: "/",
    label: "Creators",
    iconName: active_menu,
    inactiveIcon: inactive_menu,
    privilegesName: "listProperty",
  },
 
];
