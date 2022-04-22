import React from "react";
import TopSection from "../Top/TopSection";
import Pillars from "../Mid/Pillars";
import Timeline from "../Mid/Timeline";
import Footer from "../Bottom/Footer";
import MidSection from "../Mid/MidSection";

function Page1() {
  return (
    <div className="">
      <TopSection />
      <Pillars />
      <MidSection/>

      <Footer pageNumber="1" />
    </div>
  );
}

export default Page1;
