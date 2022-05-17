import React from "react";
import ExperienceCard from "./ExperienceCard";
import SchoolIcon from "@material-ui/icons/SchoolTwoTone";
import useFetch from "../useFetch";
import User from "../Top/User";
import { connect,useSelector } from "react-redux";
import TempExpCard from "./TempExpCard";

const Timeline = (props) => {
  const { experiences } = props.experiences;
  // const {tempExp}=props.tempExp;
  const tempExp = useSelector(state=>state.tempExp);
  // console.log("timeline", experiences);
   console.log("temp exp at timeline", tempExp);

  // const {
  //   error,
  //   isPending,
  //   data: experiences,
  // } = useFetch("http://localhost:8000/experiences/");

  return (
    <div>
      <div>
        <h2 className="text-lg mb-2">{props.year}</h2>
        <div className="px-2 mb-5">
          <div className="bg-red-300 p-0.5 rounded"></div>
        </div>
      </div>
      {/* {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>} */}
      {experiences &&
        experiences.map((experience) => (
          <div key={experience.id}>
            <ExperienceCard
              experience={experience}
              year={props.year}
              y={props.y}
            />
          </div>
        ))}

        {tempExp && 
        <div key={tempExp.id}>
          <ExperienceCard
          experience={tempExp}
          year={props.year}
          y={props.y}
          />
        </div>
        }
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    // ...state,
    experiences: state.experience,
    // tempExp: state.tempExp,
  };
};
export default connect(mapStateToProps)(Timeline);
