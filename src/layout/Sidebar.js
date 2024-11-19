// src/layout/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Settings, AccountCircle } from '@mui/icons-material';

const Sidebar = ({ open, toggleDrawer }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      onClose={toggleDrawer}
    >
      <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><AccountCircle /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
