import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  makeStyles,
} from "@material-ui/core";

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
    </>
  );
}

export default Header;
