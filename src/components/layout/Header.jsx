import React, { Suspense } from "react";
import {
  AppBar,
  Box,
  Icon,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "../constants/Colors";
import {
  Add,
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const IconBtn = ({ icon, onClick, title }) => {
  return (
    <Tooltip title={title} arrow>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

const SearchDialog = React.lazy(() => import("../specific/Search"));
const NotificationDialog = React.lazy(() => import("../specific/Notification"));
const NewGroupDialog = React.lazy(() => import("../Dialogs/NewGroup"));

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = React.useState(false);
  const [isSearch, setisSearch] = React.useState(false);
  const [isNewGroup, setIsNewGroup] = React.useState(false);
  const [isNotification, setIsNotification] = React.useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const openSearchDialogue = () => {
    setisSearch((prev) => !prev);
    console.log("Search clicked");
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };
  const navigateToGroup = () => {
    navigate("/group");
    console.log("Navigating to group");
  };
  const logoutHandler = () => {
    console.log("Logout clicked");
  };
  const openNotifications = () => {
    setIsNotification(!isNotification);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ backgroundColor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chat-Us
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" size="large" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                icon={<SearchIcon />}
                onClick={openSearchDialogue}
                title="Search"
              />
              <IconBtn
                icon={<AddIcon />}
                onClick={openNewGroup}
                title="New Group"
              />
              <IconBtn
                icon={<GroupIcon />}
                onClick={navigateToGroup}
                title="Manage Group"
              />
              <IconBtn
                icon={<NotificationsIcon />}
                onClick={openNotifications}
                title="Notifications"
              />
              <IconBtn
                icon={<LogoutIcon />}
                onClick={logoutHandler}
                title="Logout"
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<div>Loading...</div>}>
          <SearchDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<div>Loading...</div>}>
          <NewGroupDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<div>Loading...</div>}>
          <NotificationDialog />
        </Suspense>
      )}
    </>
  );
};

export default Header;
