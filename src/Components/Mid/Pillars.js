import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "./Grid"
import SchoolIcon from "@material-ui/icons/SchoolTwoTone";
// import AccountGroupIcon from "@material-ui/icons/AccountGroup";
// import EarthIcon from "@material-ui/icons/Earth";





export default function Pillars() {
   
  return (
    <div className=" mt-2.5">
      <div className="text-center">
      <h1 className="text-xl">SUMMARY OF ASHESI EXPERIENCES</h1>
      </div> 
       <div className="grid grid-cols-3 items-center">
       <div className="">
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
    
        <div className="">
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
     
        <div className="">
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
       
      
      
      
        
    </div>
  );
}
