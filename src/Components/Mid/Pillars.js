import React from "react";
import Grid from "./Grid";
import SchoolIcon from "@material-ui/icons/SchoolTwoTone";
import leadership from "../../leadership.svg";
import citizenship from "../../citizenship.svg";
import scholarship from "../../scholarship.svg";
import { connect } from "react-redux";
// import AccountGroupIcon from "@material-ui/icons/AccountGroup";
// import EarthIcon from "@material-ui/icons/Earth";

const Pillars = (props) => {
  const { experiences } = props.experiences;
  console.log("pillars", experiences);

  const addTotalHours = (cat) => {
    let totalHours = 0;
    experiences.forEach((exp) => {
      if (exp.category === cat) {
        console.log("category is", exp.category);
        totalHours = totalHours + parseInt(exp.hours);
      }
    });
    console.log("total hours for ", cat, "is", totalHours);
    return totalHours;
  };
  let cat1Hours=addTotalHours("cat1");
  let cat2Hours = addTotalHours("cat2");
  let Cat3Hours = addTotalHours("cat3");

  return (
    <div className=" mt-2.5">
      <div className="text-center">
        <h1 className="text-xl">SUMMARY OF ASHESI EXPERIENCES</h1>
      </div>
      <div className="mt-6 grid grid-cols-3 items-center">
        <div className=" m-auto">
          <Grid
            icon={
              <img
                src={scholarship}
                className="mx-auto w-16"
                alt="scholarship icon"
              />
            }
            title="SCHORLASHIP"
            hours={cat1Hours}
          />
        </div>

        <div className="m-auto">
          <Grid
            icon={
              <img
                src={leadership}
                className="mx-auto w-14"
                alt="leadersip icon"
              />
            }
            title="LEADERSHIP"
            hours={cat2Hours}
          />
        </div>

        <div className="m-auto">
          <Grid
            icon={
              <img
                src={citizenship}
                className="mx-auto w-14"
                alt="citizenship icon"
              />
            }
            title="CITIZENSHIP"
            hours={Cat3Hours}
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    // ...state,
    experiences: state.experience,
  };
};
export default connect(mapStateToProps)(Pillars);
