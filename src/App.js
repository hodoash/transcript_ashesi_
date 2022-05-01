import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import "./App.css";

import React, { Component, useEffect } from "react";
import { connect } from "react-redux";

import Page1 from "./Components/Pages/Page1";
import Page2 from "./Components/Pages/Page2";
import InputForm from "./Components/SideForm/InputForm";
import TopNavSection from "./Components/TopNav/TopNavSection";
import { fetchExperiences } from "./Redux/actions/experienceActions";


//write code to fetch data from database into json file

const App = (props) => {
  console.log("app level", props.experiences);

  useEffect(() => {
    const fetchExperiences = () => {
      //make async call to db
      console.log("edfghjhgfd");
      //{...experience add the user id and teh rest}
      fetch("http://localhost:8000/experiences/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(experience),
      })
        .then((Response) => {
          console.log("downloaded from server succesfully");

          //what to do next....eg: history.push('/');
        })
        // .then(() => {
        //   // dispatch({ type: "FETCH_EXPERIENCES" });
        // })
        .catch((err) => {});
    };

    fetchExperiences();
  }, []);

  return (
    <div className="">
      <TopNavSection />
      <InputForm er />
      <Page1 />
      <Page2 />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    experiences: state.experiences,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getExperiences: () => dispatch(fetchExperiences()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
