import React from "react";
import Timeline from "./Timeline";
// import { useSelector } from "react-redux";

const MidSection = () => {

    // const userData=useSelector((state)=>state.user.userInfo)
    // console.log("this is first redux")
    // console.log(userData)

  return (
    <div>
      <h1>EXPERIENCE TIMELINE</h1>
      <Timeline year="2017" y="1" />
      <Timeline year="2018" y="2" />
      <Timeline year="2019" y="3" />
      <Timeline year="2020" y="4" />
    </div>
  );
};

export default MidSection;
