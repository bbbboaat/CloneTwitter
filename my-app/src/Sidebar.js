import React from "react";
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ViewListIcon from '@mui/icons-material/ViewList';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon"/>

      <SidebarOption Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MailIcon} text="Messages" />
      <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
      <SidebarOption Icon={ViewListIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <Button variant = "outlined" className = "sidebar__tweet" fullWidth>
    Tweet
</Button>

    </div>
    
  );
}

export default Sidebar;
