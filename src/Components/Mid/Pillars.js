import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "./Grid"
import SchoolIcon from "@material-ui/icons/SchoolTwoTone";
// import AccountGroupIcon from "@material-ui/icons/AccountGroup";
// import EarthIcon from "@material-ui/icons/Earth";

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


export default function Pillars() {
    const classes = styles();
  return (
    <div>
      <h1>SUMMARY OF ASHESI EXPERIENCES</h1>
       
        <div className={`${classes.grid} ${classes.bigSpace}`}>
        <Grid
             icon={
               <SchoolIcon
                 style={{ fill: "#4360A6", height: "125", width: "125" }}
               />
             }
             title="SCHORLASHIP"
             hours="543 HRS"
          />
          
     
        </div>
    
        <div className={`${classes.grid} ${classes.bigSpace}`}>
        <Grid
             icon={
               <SchoolIcon
                 style={{ fill: "#4360A6", height: "125", width: "125" }}
               />
             }
             title="LEADERSHIP"
             hours="543 HRS"
          />
          
  
        </div>
     
        <div className={`${classes.grid} ${classes.bigSpace}`}>
        <Grid
             icon={
               <SchoolIcon
                 style={{ fill: "#4360A6", height: "125", width: "125" }}
               />
             }
             title="CITIZENSHIP"
             hours="543 HRS"
          />
          
      
        </div>
      
      
      
        
    </div>
  );
}
