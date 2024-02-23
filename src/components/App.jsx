import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Router from "../router";
import theme from "./ui/theme";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
