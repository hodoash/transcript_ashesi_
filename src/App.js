import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import "./App.css";
import TopSection from "./Components/Top/TopSection";
import Pillars from "./Components/Mid/Pillars";
import Timeline from "./Components/Mid/Timeline";

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
  const classes = styles();
  return (
    <div>
      <TopSection />
      <Pillars />
      <Timeline year="2017" />
    </div>
  );
}

export default App;
