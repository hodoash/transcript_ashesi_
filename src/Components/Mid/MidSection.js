import React from "react";
import Timeline from "./Timeline";
// import { useSelector } from "react-redux";

const MidSection = (props) => {
  // const userData=useSelector((state)=>state.user.userInfo)
  // console.log("this is first redux")
  // console.log(userData)

  return (
    <div>
      <div className="mt-7 text-center">
        <h1 className="text-xl">EXPERIENCE TIMELINE</h1>
        <div className="mt-6 mx-10 grid grid-cols-4 gap-5">
          <Timeline year="2018" y="1" />
          <Timeline year="2019" y="2" />
          <Timeline year="2020" y="3" />
          <Timeline year="2021" y="4" />
        </div>
      </div>
    </div>
  );
};

export default MidSection;
