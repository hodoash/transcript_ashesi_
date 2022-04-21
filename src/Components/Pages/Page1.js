import React from "react";
import TopSection from "../Top/TopSection";
import Pillars from "../Mid/Pillars";
import Timeline from "../Mid/Timeline";
import Footer from "../Bottom/Footer";

function Page1() {
  return (
    <div className="">
      <TopSection />
      <Pillars />
      <Timeline year="2017" />
      <Timeline year="2018" />
      <Footer pageNumber="1" />
    </div>
  );
}

export default Page1;
