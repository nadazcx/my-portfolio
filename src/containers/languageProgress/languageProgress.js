import React from "react";
import "./Progress.scss";
import {illustration, languages} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function LanguageProgress() {
  if (languages.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
<div className="skills-bar">
  <h1 className="skills-heading">Languages</h1>
  <ul>
    {languages.experience.map((exp, i) => (
      <li key={i} className="skill">
        <span className="skill-title">{exp.Stack}</span>
        <div className="skill-level">
          <li>{exp.level}</li></div>
      </li>
    ))}
  </ul>
</div>




          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}