import React, { useEffect } from "react";
import "./AboutSolution.css";
import { WOW } from "wowjs";
import Splitting from "splitting";

const AboutSolution = ({ aboutSolutionData, hidePurpleBox = false }) => {
  useEffect(() => {
    new WOW().init();
    Splitting();
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const {
    image,
    purpleText,
    heading,
    subHeading,
    problems,
    solutions,
    desc,
    soluDesc,
  } = aboutSolutionData;

  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container bottomContainer">
        <div className="ultimateImg">
          <img className="mainImg" src={image} alt="solution" />
          {!hidePurpleBox && (
            <div className="purpleBox">
              <p className="purpleText wow" data-splitting="">
                {purpleText}
              </p>
              <img
                className="stars"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"
                alt="stars"
              />
            </div>
          )}
        </div>

        <div className="allText bottomText">
          <p className="text-blk headingText">{heading}</p>
          <h3 className="text-blk subHeadingText wow" data-splitting="">
            {subHeading}
          </h3>

          <p className="text-blk description wow" data-splitting="">
            <strong>The Problem :</strong> {desc}
            <br />
            <br />
            {problems.map((point, index) => (
              <span key={index}>
                • {point}
                <br />
              </span>
            ))}
          </p>

          <p className="text-blk description wow" data-splitting="">
            <b>Our Solution :</b> {soluDesc}
            <br />
            <br />
            {solutions.map((point, index) => (
              <span key={index}>
                • {point}
                <br />
              </span>
            ))}
          </p>

          <br />
        </div>
      </div>
    </div>
  );
};

export default AboutSolution;
