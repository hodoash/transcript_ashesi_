import React from "react";

const User = ({ user }) => {
  return (
    <div>
      {/* {user.map((user) => ( */}
        <div>
          <h1>STUDENT INFORMATION</h1>
          <div>
            <div>
              <h2>NAME</h2>
              <h3>{user.name}</h3>
            </div>
            <div>
              <h2>DEGREE</h2>
              <h3>{user.degree}</h3>
            </div>
            <div>
              <h2>MAJOR</h2>
              <h3>{user.major}</h3>
            </div>
            <div>
              <h2>
                EXPECTED DATE
                <br />
                OF GRADUATION
              </h2>
              <h3>{user.expectedDate}</h3>
            </div>
          </div>
        </div>
        {/* ))}   */}
    </div>
  );
};

export default User;
