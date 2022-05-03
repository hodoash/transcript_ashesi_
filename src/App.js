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
  console.log("app level", props);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch("http://localhost:8000/experiences/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify(experience),
        });

        const data = await res.json();

        // console.log(data);

        props.setExperiences(data);
        //what to do next....eg: history.push('/');
      } catch (error) {
        console.log(error);
      }
      //make async call to db
      // console.log("edfghjhgfd");
      // //{...experience add the user id and teh rest}
      // fetch("http://localhost:8000/experiences/", {
      //   method: "GET",
      //   headers: { "Content-Type": "application/json" },
      //   // body: JSON.stringify(experience),
      // })
      //   .then((Response) => {
      //     console.log("downloaded from server succesfully", Response);
      //     props.setExperiences(Response);
      //     //what to do next....eg: history.push('/');
      //   })
      //   // .then(() => {
      //   //   // dispatch({ type: "FETCH_EXPERIENCES" });
      //   // })
      //   .catch((err) => {});
    };

    fetchExperiences();
  }, []);

  return (
    <div className="bg-zinc-200 p-10">
      <TopNavSection />
 <div className="  grid grid-cols-4 gap-10">
      
      <div className="col-span-3 rounded bg-white">
        
        <Page1 />
        <Page2 />
      </div>

      <div className="col-span-1 rounded bg-white">
        <InputForm er />
      </div>
    </div>
    </div>
   
  );
};

const mapStateToProps = (state) => {
  return {
    experiences: state.experience,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setExperiences: (payload) => dispatch(fetchExperiences(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
