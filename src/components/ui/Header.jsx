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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/custom-app" },
    { name: "Mobile App Development", link: "/mobile-app" },
    { name: "Website Development", link: "/web-app" },
  ];

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/custom-app":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobile-app":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/web-app":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(4);
        }
        break;
      case "/about":
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(5);
        }
        break;
      case "/contact":
        if (value !== 4) {
          setValue(4);
          setSelectedIndex(6);
        }
        break;
      default:
        break;
    }
  }, [value]);
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              className={classes.logoContainer}
            >
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
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={(event) => {
                    handleMenuItemClick(event, i);
                    setValue(1);
                    handleClose();
                  }}
                  selected={i === selectedIndex && value === 1}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMagrin}></div>
    </>
  );
}

export default Header;
