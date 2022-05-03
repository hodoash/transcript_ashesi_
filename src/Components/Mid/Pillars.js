import React from "react";
import Grid from "./Grid"
import SchoolIcon from "@material-ui/icons/SchoolTwoTone";
import leadership from "../../leadership.svg";
import citizenship from "../../citizenship.svg";
import scholarship from "../../scholarship.svg";
// import AccountGroupIcon from "@material-ui/icons/AccountGroup";
// import EarthIcon from "@material-ui/icons/Earth";





export default function Pillars() {
   
  return (
    <div className=" mt-2.5">
      <div className="text-center">
      <h1 className="text-xl">SUMMARY OF ASHESI EXPERIENCES</h1>
      </div> 
       <div className="mt-6 grid grid-cols-3 items-center">
       <div className=" m-auto">
        <Grid
             icon={
              <img src={scholarship} className="mx-auto w-16" alt="scholarship icon" />
             }
             title="SCHORLASHIP"
             hours="543 HRS"
          />
          
     
        </div>
    
        <div className="m-auto">
        <Grid
             icon={
              <img src={leadership} className="mx-auto w-14" alt="leadersip icon" />
             }
             title="LEADERSHIP"
             hours="543 HRS"
          />
          
  
        </div>
     
        <div className="m-auto">
        <Grid
             icon={
              <img src={citizenship} className="mx-auto w-14" alt="citizenship icon" />
             }
             title="CITIZENSHIP"
             hours="543 HRS"
          />
          
      
        </div>
       </div>
       
      
      
      
        
    </div>
  );
}
