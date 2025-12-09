import React from "react";

import HeroSection from "../Element/HeroSection";
import LatestTution from "../Element/LatestTution";
import LatestTutiors from "../Element/LatestTutiors";
import PlatFormWork from "../Element/PlatFormWork";
import WhyChooseUs from "../Element/WhyChooseUs";

const Home = () => {
  return (
    <div>
      {/* ---------------------------------------------------
                     HERO SECTION
      ---------------------------------------------------- */}
      <HeroSection></HeroSection>
      {/* ---------------------------------------------------
                   LATEST TUITION POSTS
      ---------------------------------------------------- */}
      <LatestTution></LatestTution>

      {/* ---------------------------------------------------
                        LATEST TUTORS
      ---------------------------------------------------- */}
      <LatestTutiors></LatestTutiors>
      {/* ---------------------------------------------------
                  HOW THE PLATFORM WORKS (3 STEPS)
      ---------------------------------------------------- */}
      <PlatFormWork></PlatFormWork>
      {/* ---------------------------------------------------
                    WHY CHOOSE US (FEATURES)
      ---------------------------------------------------- */}
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
