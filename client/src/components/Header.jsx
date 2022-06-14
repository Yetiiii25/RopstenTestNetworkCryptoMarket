import {
  AppBar, Menu,
  Container,
  MenuItem,
  Select,
  Toolbar, Tooltip,
  Typography,
  Box, Button, IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react'
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
// import { useHistory } from "react-router-dom";
import { CryptoState } from "../context/CryptoContext";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";
import DiamondIcon from '@mui/icons-material/Diamond';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {

    flex: 1,
    color: "gold",

    cursor: "pointer",
  },
  input: {
    background: "#988585",

  }
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#2b2b2b",
    },
    type: "dark",
  },
});



function Header() {
  const classes = useStyles();
  const { currency, setCurrency, user } = CryptoState();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Link to='/' >
              <DiamondIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" }
                }}
              >
                <MenuItem>
                  <Link to='/coins' >
                    <Typography
                      textAlign="center"
                      sx={{
                        mr: 2,
                        display: { xs: "flex", md: "none" },
                        flexGrow: 1,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "#988585",
                        textDecoration: "none",    
             
                      }} >MARKET</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Link to='/' >
              <DiamondIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            </Link>
            {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            LOGO
          </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>



            </Box>
            <Link to='/coins' >
              <Button
                variant="contained"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2, display: {
                    xs: "none", md: "flex",
                    flexGrow: 1,
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    background: "#988585",
                    width: 106, height: 35,
                  }
                }}
              >
                MARKET
              </Button>
            </Link>
            <Box sx={{ flexGrow: 0 }}>


                <Select
                  className="py-0"
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currency}
                  style={{  width: 106, height: 35, marginLeft: 15,background: "#988585",color:"white",
                  fontWeight: 700,
                  letterSpacing: ".3rem", }}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <MenuItem value={"USD"} style={{fontFamily: "monospace", color: "#988585",
                        fontWeight: 700,
                        letterSpacing: ".3rem" }}>USD</MenuItem>
                  <MenuItem value={"PHP"} style={{fontFamily: "monospace",color: "#988585",
                        fontWeight: 700,
                        letterSpacing: ".3rem" }}>PHP</MenuItem>
                </Select>

            </Box>
            {user ? <UserSidebar /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>



    </ThemeProvider>
  );
}

export default Header;