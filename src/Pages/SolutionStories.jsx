import React from "react";
import NavBar from "../components/NavBar";
import video02 from "../assets/videos/video02.mp4";
import solutionImg from "../assets/images/solutionImg.png";
import solutionImg1 from "../assets/images/solutionImg1.png";
import solutionImg2 from "../assets/images/solutionImg2.png";
import AboutSolution from "../components/SolutionStoriesComponents/AboutSolution";
import AboutSolution1 from "../components/SolutionStoriesComponents/AboutSolution1";
import solutionStoriesImg from "../assets/images/solutionStoriesImg.jpg";

const SolutionStories = () => {
  const aboutSolutionData = {
    image: solutionImg1,
    purpleText:
      "GenAssets is an AI-powered platform that transforms public asset management through predictive maintenance, real-time monitoring, and QR-based field verification—built for smarter governance and sustainable infrastructure.",
    heading: "GenAssets –",
    subHeading: "AI-Driven Public Asset Management",
    desc: " Municipal bodies, panchayats, and solar plant operators face.",
    soluDesc: "GenAssets simplifies and future-proofs asset oversight.",
    problems: [
      "Asset overuse or underuse",
      "Manual data entry with no predictive logic",
      "Delays in fault reporting or inspection",
    ],
    solutions: [
      "AI-Powered Optimization Engine – Predicts maintenance & replacement.",
      "Dashboard for Condition-Based Monitoring – Tracks health, usage, value.",
      "QR-Tagged Field Assets – Scan-based verification and audit logs.",
      "Built for Governance & Green Energy – Custom-built modules for solar, water, and civic infrastructure.",
    ],
  };
  const aboutSolution1Data = {
    heading: "Good Crop –",
    subHeading: "Crop Disaster Intelligence & Yield Forecasting",
    problemIntro: "Farmers and policymakers need proactive tools to.",
    problems: [
      "Detect crop stress early (e.g. pest, water, disease)",
      "Assess NDVI deviation patterns for pre-disaster alerts",
      "Predict yield based on live satellite imagery",
    ],
    solutionIntro:
      "GenCrest is a data-driven platform under active R&D, focused on future-ready agricultural intelligence.",
    solutions: [
      "Sentinel-2 Based NDVI Monitoring – Live vegetation index mapping to understand crop behavior over time.",
      "Early Yield Prediction R&D – Collecting NDVI datasets to model sugarcane productivity.",
      "Disaster Signal Exploration – Studying NDVI trends to flag pest stress, drought, and other anomalies.",
      "Integration-ready APIs – For future expansion to crop insurance, alerting systems, and dashboards.",
    ],
    author: {
      name: "Rahul Kumar Yadav",
      role: "Web Developer",
      image: solutionImg2,
    },
  };
  const aboutSolution2Data = {
    image: solutionImg,
    purpleText:
      "GenAssets is an AI-powered platform that transforms public asset management through predictive maintenance, real-time monitoring, and QR-based field verification—built for smarter governance and sustainable infrastructure.",
    heading: "GenGIS –",
    subHeading: "Geo-Intelligence for Field & Asset Tracking",
    desc: "Field employees, agricultural staff, and solar site technicians often lack.",
    soluDesc: "GenGIS empowers teams and administrators with.",
    problems: [
      "Accurate location check-ins",
      "Real-time leave/route visibility",
      "Asset mapping integrated with geolocation",
    ],
    solutions: [
      "Selfie + Geo Attendance – For both office and field staff.",
      "Smart Route Planning – Optimized for solar and civic field operations.",
      "Branch-Level User Management – Centralized admin dashboard.",
    ],
  };

  return (
    <React.Fragment>
      <main>
        <NavBar />
        <header className="page-header">
          <div
            style={{
              backgroundImage: `url(${solutionStoriesImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "scaleX(-1)",
              opacity: 0.4,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          <div className="inner">
            <div className="container">
              <h1>Solution & Stories</h1>
              <p>
                GenStree transforms ordinary streetlights into smart,
                energy-saving solutions — a step toward safer and smarter
                cities.
              </p>
            </div>

            {/* end container */}
          </div>
        </header>
        <div
          className="works"
          style={{
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AboutSolution aboutSolutionData={aboutSolutionData} />
          <AboutSolution1 aboutSolution1Data={aboutSolution1Data} />
          <AboutSolution
            aboutSolutionData={aboutSolution2Data}
            hidePurpleBox={true}
          />
        </div>
      </main>
    </React.Fragment>
  );
};

export default SolutionStories;
