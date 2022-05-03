import React from "react";

function Footer(props) {
  return (
    <div className="">
      <div className="px-8 ">
        <div className="bg-zinc-100 p-1 rounded"></div>
      </div>
      <div className="flex justify-between px-8 py-3">
      <div className="">
        <p>
          Issue Date: <span>17 / 12 / 2021</span>
        </p>
      </div>
      <div className="">
        <p>1 Unoversity Avenue, Berekkuso E/R, Ghana</p>
      </div>
      <div className="">
        <p>Page {props.pageNumber} of 2</p>
        {/* remember to change the page number to prop and others that are needed */}
      </div>
      </div>
     
    </div>
  );
}

export default Footer;
