import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useFetch from "../useFetch";
import User from "./User";

//   i need to fix this

 const StudentInfo=()=> {
  const {error,isPending,data:user}=useFetch("http://localhost:8000/users/"+1)

  
  return (
    <div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {user && <User user={user}/>}
    </div>
  );
}
export default StudentInfo;
