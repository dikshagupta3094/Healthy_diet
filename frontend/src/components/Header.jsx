import { useState } from "react";
import {AppBar , Box, Divider, Drawer, IconButton, Typography, Toolbar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import '../styles/Header.css'
import  Diet from "../assets/Diet.png";



const Header = () => {

    const [mobileOpen, setMobileOpen] = useState(false);
    // hndle menu click
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    //menu drawer
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography
          color={"#65B741"}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, my: 2, fontWeight:500 }}
        >
          <img src={Diet} alt="Diet" height={"70"} width="200" />
          &nbsp; Diet Dynamo
        </Typography>
        <Divider />
        <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About Us</NavLink>
        </li>
        <li>
          <NavLink to={"/prices"}>Prices</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>);

  return (
    <>
    <Box>
    <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { lg: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon color="black"/>
            </IconButton>
            <Typography
              color={"#65B741"}
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, fontWeight:600, fontFamily:"serif", marginLeft:{sm:"30px", xs:"5px"} }}
            >
              <img src={Diet} alt="Diet" height={"70"} width="250" />
              &nbsp; Diet Dynamo
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }, marginRight:"40px" }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About Us</NavLink>
                </li>
                <li>
                  <NavLink to={"/prices"}>Prices</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  )
};

export default Header;



