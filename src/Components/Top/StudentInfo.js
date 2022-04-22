import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useFetch from "../useFetch";
import User from "./User";

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

 const StudentInfo=()=> {
  const {error,isPending,data:user}=useFetch("http://localhost:8000/users/"+1)

  const classes = styles();
  return (
    <div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {user && <User user={user}/>}
    </div>
  );
}
export default StudentInfo;
