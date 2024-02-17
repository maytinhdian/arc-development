import { createTheme } from "@material-ui/core";

const arcBlue = "#97605e";
const arcOrange = "#FFBA60";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: `${arcBlue}`,
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: `${arcOrange}`,
      // light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      // contrastText: "#47008F",
    },
  },
  typography: {

      tabContainer: {
        marginLeft: "auto",
      },
      tab: {
        fontFamily: "Raleway",
      },
  },
});

export default theme;
