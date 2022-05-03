import React from "react";




export default function Grid(props) {
  const { icon, title, hours } = props;

  return (
    <div className="text-center ">
      <div className="content-center">{icon}</div>
      <a className="text-sm">{title}</a>
      <div className="">
      <div className="px-2 ">
        <div className="bg-red-600 px-1 py-0.5 rounded"></div>
      </div>
      </div>
      <a className="text-lg">{hours}</a>
    </div>
  );
}
