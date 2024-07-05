"use client";

import AboutSection from "./About2";
import AboutHistory from "./About3";
import AboutMission from "./About4";
import AboutApproach from "./About5";
import AboutVision from "./About6";

const sections = [
  {
    id: "about-us",
    component: AboutSection,
  },
  {
    id: "history",
    component: AboutHistory,
  },
  {
    id: "mission",
    component: AboutMission,
  },
  {
    id: "approach",
    component: AboutApproach,
  },
  {
    id: "vision",
    component: AboutVision,
  },
];

export const About = () => {
  return (
    <div className="w-screen text-white">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32">
        {sections.map((section) => (
          <section.component key={section.id} />
        ))}
      </div>
    </div>
  );
};

export default About;
