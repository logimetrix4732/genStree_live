import React, { useEffect } from "react";
import "./AboutSolution1.css";
import { WOW } from "wowjs";
import Splitting from "splitting";

const AboutSolution1 = ({ aboutSolution1Data, hideAuthor = false }) => {
  useEffect(() => {
    new WOW().init();
    Splitting();
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const {
    heading,
    subHeading,
    problemIntro,
    problems,
    solutionIntro,
    solutions,
    author,
  } = aboutSolution1Data;

  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 mt-responsive-custom">
            <div className="inner-column">
              <div className="sec-title">
                <p className="text-blk headingText">{heading}</p>
                <h2 className="text-blk subHeadingText wow" data-splitting="">
                  {subHeading}
                </h2>
              </div>

              <div className="text-blk description wow" data-splitting="">
                <strong>The Problem :</strong> {problemIntro}
              </div>

              <p className="text-blk description wow" data-splitting="">
                {problems.map((point, index) => (
                  <span key={index}>
                    • {point} <br />
                  </span>
                ))}
              </p>

              <div className="text-blk description wow" data-splitting="">
                <strong>Our Solution :</strong> {solutionIntro}
              </div>

              <p className="text-blk description wow" data-splitting="">
                {solutions.map((point, index) => (
                  <span key={index}>
                    • {point} <br />
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              <figure className="image-1">
                <a href="#" className="lightbox-image" data-fancybox="images">
                  <img
                    title={author.name}
                    src={author.image}
                    alt={author.name}
                    style={{ width: "510px", height: "410px" }}
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSolution1;
