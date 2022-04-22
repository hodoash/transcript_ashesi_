import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import "./App.css";

import Page1 from "./Components/Pages/Page1";
import Page2 from "./Components/Pages/Page2";
import InputForm from "./Components/SideForm/InputForm";
import TopNavSection from "./Components/TopNav/TopNavSection";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

function App() {
  //write code to fetch data from database into json file

  const classes = styles();
  return (
    <div className="">
      <TopNavSection />
      <InputForm />
      <Page1 />
      <Page2 />
    </div>
  );
}

export default App;
