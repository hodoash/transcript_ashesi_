import React from "react";
import logo from "../../ashesi_logo.jpeg";
import TopInfo from "./TopInfo";
import StudentInfo from "./StudentInfo";

export default function TopSection() {
  return (
    <div>
      <div className="App mt-11 grid grid-cols-6 gap-7">
        <div className="w-44 col-span-1">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="col-span-3">
          <TopInfo />
        </div>
        <div className="col-span-2">
          <StudentInfo />
        </div>
      </div>
      <div className="px-8 ">
        <div className="bg-zinc-100 p-1 rounded"></div>
      </div>
    </div>
  );
}
