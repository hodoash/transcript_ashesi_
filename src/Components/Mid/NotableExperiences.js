import React, {useState} from "react";
import ExperienceImageCard from "./ExperienceImageCard";

function NotableExperiences(props) {
  const[line,setLine]=useState(true);

  // setLine(props.line);

  return (
    <div>
      <h3>{props.header}</h3>
      <ExperienceImageCard />
      {/* fetch a list of correct experineces */}

      <hr />
      {/* add a boolean to determine if the line should show or not */}
    </div>
  );
}

export default NotableExperiences;
