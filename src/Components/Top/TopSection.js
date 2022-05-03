import React from "react";
import logo from "../../ashesi_logo.png";
import TopInfo from "./TopInfo";
import StudentInfo from "./StudentInfo";

export default function TopSection() {
  return (
    <div>
      <div className="App  grid grid-cols-6 gap-7 pt-10">
        <div className="w-45 pl-5 mt-5 col-span-1">
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
