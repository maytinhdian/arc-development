import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Header from "./ui/Header";
import theme from "./ui/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        Welcome
      </ThemeProvider>
    </>
  );
}

export default App;
