import React from "react";
import leadership from "../../leadership.svg";
import citizenship from "../../citizenship.svg";
import scholarship from "../../scholarship.svg";

const ExperienceCard = ({ experience, year, y }) => {
  // console.log("card level", experience);
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

      {experience.year === y && (
        <div className="flex text-left items-start mb-3">
          <div className="mt-2">
            {experience.category==="cat1" &&(<img src={scholarship} className="mx-auto w-6" alt="scholarship icon" />)}
            {experience.category==="cat2" &&(<img src={leadership} className="mx-auto w-5" alt="leadership icon" />)}
            {experience.category==="cat3" &&(<img src={citizenship} className="mx-auto w-6" alt="citizenship icon" />)}
          
            </div>
          
          <p className="text-base ml-2">{experience.discription}</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
