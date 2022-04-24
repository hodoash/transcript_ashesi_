import React from "react";
import SchoolIcon from "@material-ui/icons/SchoolTwoTone";

const ExperienceCard = ({ experiences, year, y }) => {
  // icon1={
  //          <SchoolIcon
  //            style={{ fill: "#5EA780", height: "125", width: "125" }}
  //          />
  //        }
  //write code to show icon based on data

//   console.log("hi, this is data");
//   console.log(experiences);

  return (
    <div>
      {/* <h1>this is {props.year}</h1> */}
      {/* {experiences.map(experience=>(
                <div className='' key={experience.id}>
                    <div className=''>icon</div>
                    <p className=''>{experience.discription}</p>
                </div>
            ))}
             */}
      {experiences
        .filter((experience) => {
          return experience.year == y;
        })
        .map((experience) => (
          <div className="" key={experience.id}>
            <div className="">icon</div>
            <p className="">{experience.discription}</p>
          </div>
        ))}
    </div>
  );
};

export default ExperienceCard;
