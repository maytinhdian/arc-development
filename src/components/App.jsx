import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Header from "./ui/Header";
import theme from "./ui/theme";
import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {/* <CssBaseline /> */}
          <Header />
          <Switch>
            <Route exact path="/" component={()=>{<div>Home</div>}}/>
            <Route exact path="/services" component={()=>{<div>Services</div>}}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
