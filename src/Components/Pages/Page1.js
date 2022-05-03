import React,{Component} from "react";
import TopSection from "../Top/TopSection";
import Pillars from "../Mid/Pillars";
// import Timeline from "../Mid/Timeline";
import Footer from "../Bottom/Footer";
import MidSection from "../Mid/MidSection";

import { connect } from "react-redux";
import { render } from "@testing-library/react";

class Page1 extends Component {
  render(){
    // console.log("rggr");
    const {experiences}=this.props;
    console.log(this.props);
    return (
      <div className=" ">
        <TopSection />
        <Pillars />
        <MidSection exp={experiences} />
  
        <Footer pageNumber="1" />
      </div>
    );
  }
  
 
};

const mapStateToProps = (state) => {
  return {
    experiences: state.experience.experiences
  }
};

export default connect(mapStateToProps)(Page1);
