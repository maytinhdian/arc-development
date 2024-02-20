import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";


function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMagrin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  logoContainer: {
    padding: 0,
  },
  tabContainer: {
    ...theme.typography.tabContainer,
  },
  tab: {
    fontFamily: "Raleway",
    minWidth: 20,
    marginLeft: "25px",
    fontWeight: 700,
    textTransform: "none",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "25px",
    marginRight: "25px",
    height: "45px",
  },
}));

function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    }
  });
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer}>
              <img
                className={classes.logo}
                src={logo}
                alt="TMT Innovative Logo"
              />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              className={classes.tabContainer}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                className={classes.tab}
                component={Link}
                onMouseOver={(event) => handleClick(event)}
                to="/services"
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The Revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact Us"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                Custom Software Development
              </MenuItem>
              <MenuItem onClick={handleClose}>Mobile App Development</MenuItem>
              <MenuItem onClick={handleClose}>Website Development</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMagrin}></div>
    </>
  );
}

export default Header;
