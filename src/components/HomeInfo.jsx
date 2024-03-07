import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="right arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Aayush</span>👋
      <br />A Software Engineer from Delhi
    </h1>
  ),
  2: (
    <InfoBox
      text="I am a Full Stacked Web Developer creating websites that are responsive, fast, visually appealing and surrounded by best practices :)"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Been part of multiple projects with over 20+ just in Web Development. Curious about them?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done? A personal portfolio? Website for your Startup? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
