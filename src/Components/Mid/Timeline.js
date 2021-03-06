import React from "react";
import ExperienceCard from "./ExperienceCard";
import SchoolIcon from "@material-ui/icons/SchoolTwoTone";
import useFetch from "../useFetch";
import User from "../Top/User";
// import { connect  } from "react-redux";

const Timeline = (props) => {
  const {
    error,
    isPending,
    data: experiences,
  } = useFetch("http://localhost:8000/experiences/");

  return (
    <div>
      <div>
        <h2>{props.year}</h2>
        <hr />
      </div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {experiences && (
        <ExperienceCard
          experiences={experiences}
          year={props.year}
          y={props.y}
        />
        // <ExperienceCard
        // experiences={experiences}
        //   icon={
        //     <SchoolIcon
        //       style={{ fill: "#5EA780", height: "125", width: "125" }}
        //     />
        //   }

        // />
      )}
    </div>
  );
};
export default Timeline;
