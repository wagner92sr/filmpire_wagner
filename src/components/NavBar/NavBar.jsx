import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ClassNames } from '@emotion/react';

function NavBar() {
  console.log('NavBar');

  return (
    <>
        <AppBar position="fixed">
            <Toolbar className={ClassNames.toolbar}>

            </Toolbar>
        <AppBar/>
    </>
  );
}

export default NavBar;
