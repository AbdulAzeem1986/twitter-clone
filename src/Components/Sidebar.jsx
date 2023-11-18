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
import SidebarOption from "./SidebarOption";
import Logo from '../Images/Logo.jpg'
import { useNavigate } from "react-router-dom";

function Sidebar() {

  let Navigate = useNavigate();

  const signout = ()=>{
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("username");

    Navigate("/")
  }

  return (
    <div className="sidebar">
      <img className='flex logo' style={{width:"10%"}} src={Logo} alt='logo' />
      
      <SidebarOption Icon={HomeIcon} text="Home"/>
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      
      <Button  variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>

      <button className="signoutbtn" onClick={signout}><Avatar/></button>

    </div>
  );
}

export default Sidebar;
