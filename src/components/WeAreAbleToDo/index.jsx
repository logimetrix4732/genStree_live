import React, { useEffect, useState } from "react";
import icon01 from "../../assets/images/icon01.png";
import icon02 from "../../assets/images/icon02.png";
import icon03 from "../../assets/images/icon03.png";

const WeAreAbleToDo = () => {
  const [activeCard, setActiveCard] = useState(1);
  return (
    <section className="icon-content-block">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 wow" data-splitting="">
            <h3 className="section-title">
              WHAT WE DO TO
              <br />
              EMPOWER FUTURES
            </h3>
          </div>
          {[icon01, icon02, icon03].map((icon, idx) => (
            <div className="col-lg-3 col-md-4 wow" data-splitting="" key={idx}>
              <div
                className={`content-block${
                  activeCard === idx ? " selected" : ""
                }`}
                onMouseEnter={() => setActiveCard(idx)}
              >
                <figure>
                  <img src={icon} alt="Empowerment Icon" />
                </figure>
                <h6>
                  {idx === 0
                    ? "WOMEN IN TECH"
                    : idx === 1
                    ? "SKILL DEVELOPMENT"
                    : "MENTORSHIP & GROWTH"}
                </h6>
                <ul>
                  {idx === 0 && (
                    <>
                      <li>STEM Opportunities</li>
                      <li>AI & Coding Workshops</li>
                      <li>Tech Inclusion Programs</li>
                      <li>Leadership in Tech</li>
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      <li>UI/UX & Web Design</li>
                      <li>Career Building Sessions</li>
                      <li>Hands-on Projects</li>
                      <li>Soft Skills Development</li>
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      <li>1:1 Mentorship</li>
                      <li>Community Support</li>
                      <li>Leadership Circles</li>
                      <li>Role Model Talks</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeAreAbleToDo;
