import {
    AccountBox,
    BookmarkBorderOutlined,
    Home,
    RocketOutlined
  } from "@mui/icons-material";
 
  import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  import React from "react";
  
  const Sidebar = () => {
    return (
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block", } }}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <RocketOutlined/>
                </ListItemIcon>
                <ListItemText primary="Explore" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <BookmarkBorderOutlined/>
                </ListItemIcon>
                <ListItemText primary="Bookmarks" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  };
  
  export default Sidebar;