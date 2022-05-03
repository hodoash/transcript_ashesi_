import React from "react";
import ExperienceCard from "./ExperienceCard";
import SchoolIcon from "@material-ui/icons/SchoolTwoTone";
import useFetch from "../useFetch";
import User from "../Top/User";
import { connect } from "react-redux";

const Timeline = (props) => {
  const { experiences } = props.experiences;
  console.log("timeline", experiences);
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
          // <ExperienceCard
          // experiences={experiences}
          //   icon={
          //     <SchoolIcon
          //       style={{ fill: "#5EA780", height: "125", width: "125" }}
          //     />
          //   }

          // />
        ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    // ...state,
    experiences: state.experience,
  };
};
export default connect(mapStateToProps)(Timeline);
