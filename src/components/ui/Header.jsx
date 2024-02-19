import React from "react";
import { AppBar, Tab, Tabs, Toolbar, makeStyles } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

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
    marginBottom: "1em",
  },
  logo: {
    height: "7em",
  },
  tabContainer: {
    ...theme.typography.tabContainer,
  },
  tab: {
    minWidth: 20,
    marginLeft: "25px",
    fontWeight: 100,
  },
  button: {
    borderRadius: "50px",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img height={75} src="" alt="TMT Innovative Logo" />
            <Tabs className={classes.tabContainer}>
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="Contact Us" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
}

export default Header;
