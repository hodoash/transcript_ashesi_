import React from "react";
import ExperienceCard from "./ExperienceCard";
import SchoolIcon from "@material-ui/icons/SchoolTwoTone";

export default function Timeline(props) {
  return (
    <div>
      <h1>EXPERIENCE TIMELINE</h1>
      <div>
        <h2>{props.year}</h2>
        <hr />
      </div>

      <ExperienceCard
        icon={
          <SchoolIcon
            style={{ fill: "#5EA780", height: "125", width: "125" }}
            title="wergh gfd erfg gfds gfre<br/>
                werftg sdf dfg"
          />
        }
      />
      <ExperienceCard
        icon={
          <SchoolIcon
            style={{ fill: "#5EA780", height: "125", width: "125" }}
            title="wergh gfd erfg gfds gfre werftg sdf dfg"
          />
        }
      />
    </div>
  );
}
