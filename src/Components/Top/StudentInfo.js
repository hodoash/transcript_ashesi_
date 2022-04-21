import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  bar: {
    paddingTop: "1.15rem",
    backgroundColor: "#fff",
    ["@media (max-width: 780px)"]: {
      flexDirection: "Column",
    },
  },
  menuItem: {
    cursor: "pointer",
    flexGrow: 1,
    "&:hover": {
      color: "#4f25c8",
    },
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
    },
  },
});
//   i need to fix this

export default function StudentInfo() {
  const classes = styles();
  return (
    <div>
      <h1>STUDENT INFORMATION</h1>
      <div>
        <div>
          <h2>NAME</h2>
          <h3>No Name</h3>
        </div>
        <div>
          <h2>DEGREE</h2>
          <h3>B.Sc</h3>
        </div>
        <div>
          <h2>MAJOR</h2>
          <h3>Business Administration</h3>
        </div>
        <div>
          <h2>EXPECTED DATE<br/>OF GRADUATION</h2>
          <h3>2020</h3>
        </div>
      </div>
    </div>
  );
}
