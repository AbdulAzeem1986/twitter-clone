import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar, Button } from "@material-ui/core";
import Logo from '../Images/Logo.jpg'
import { useNavigate } from "react-router-dom";
import SidebarItems from "./SidebarItems";

function Sidebar() {

  let Navigate = useNavigate();

  const signout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("name");

    Navigate("/")
  }

  return (
    <div className="sidebar">

      <img className='flex logo' style={{ width: "10%" }} src={Logo} alt='logo' />

      <SidebarItems Icon={HomeIcon} text="Home" />
      <SidebarItems Icon={SearchIcon} text="Explore" />
      <SidebarItems Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarItems Icon={MailOutlineIcon} text="Messages" />
      <SidebarItems Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarItems Icon={ListAltIcon} text="Lists" />
      <SidebarItems Icon={PermIdentityIcon} text="Profile" />
      <SidebarItems Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="sidebar-tweet" fullWidth>
        Tweet
      </Button>

      <button className="signoutbtn" onClick={signout}><Avatar /> Logout @{sessionStorage.getItem("username")}</button>

    </div>
  );
}

export default Sidebar;
