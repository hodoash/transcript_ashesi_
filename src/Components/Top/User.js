import React from "react";

const User = ({ user }) => {
  return (
    <div>
      {/* {user.map((user) => ( */}
        <div className="text-left">
          <h1 className="text-xl ">STUDENT INFORMATION</h1>
          <div>
            <div className="grid grid-cols-2 gap-1 mt-1.5">
              <h2 className="col-span-1 text-base">NAME</h2>
              <h3 className="col-span-1 text-sm">{user.name}</h3>
            </div>
            <div className="grid grid-cols-2 gap-1 mt-2">
              <h2 className="col-span-1 text-base">DEGREE</h2>
              <h3 className="col-span- text-sm">{user.degree}</h3>
            </div>
            <div className="grid grid-cols-2 gap-1 mt-2">
              <h2 className="col-span-1 text-base">MAJOR</h2>
              <h3 className="col-span-1 text-sm">{user.major}</h3>
            </div>
            <div className="grid grid-cols-2 gap-1 items-end mt-2">
              <h2 className="col-span-1 text-base">
                EXPECTED DATE <span className="block">OF GRAUDATION</span> 
              </h2>
              <h3 className="col-span-1 text-sm">{user.expectedDate}</h3>
            </div>
          </div>
        </div>
        {/* ))}   */}
    </div>
  );
};

export default User;
