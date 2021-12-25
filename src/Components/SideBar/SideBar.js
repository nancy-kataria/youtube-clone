import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import ExploreIcon from "@material-ui/icons/ExploreOutlined";
import SubscriptionIcon from "@material-ui/icons/SubscriptionsOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibraryOutlined";
import HistoryIcon from "@material-ui/icons/HistoryOutlined";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideoOutlined";
import WatchLaterIcon from "@material-ui/icons/WatchLaterOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <Link to='/'>
        <SidebarRow selected Icon={HomeIcon} title="Home" />
      </Link>
      <SidebarRow Icon={ExploreIcon} title="Explore" />
      <SidebarRow Icon={SubscriptionIcon} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltIcon} title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Show More" />
      <hr />
    </div>
  );
}

export default SideBar;
