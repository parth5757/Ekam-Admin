// src/layout/MainLayout.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const MainLayout = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Ekam Admin</Typography>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      {/* Add content here */}
    </div>
  );
};

export default MainLayout;
