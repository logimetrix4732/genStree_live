import React, { useEffect } from "react";
import "./AboutSolution1.css";
import WOW from "wowjs";
import Splitting from "splitting";
import solutionImg from "../../../assets/images/solutionImg1.png";

const AboutSolution1 = () => {
  useEffect(() => {
    new WOW.WOW().init();
    Splitting();
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
                <p className="text-blk headingText">GenGIS</p>
                <h2 className="text-blk subHeadingText wow" data-splitting="">
                  Geo-Intelligence for Field & Asset Tracking
                </h2>
              </div>
              <div className="text-blk description wow" data-splitting="">
                <strong>The Problem :</strong> Field employees, agricultural
                staff, and solar site technicians often lack.
              </div>
              <p className="text-blk description wow" data-splitting="">
                • Accurate location check-ins
                <br />
                • Real-time leave/route visibility
                <br />
                • Asset mapping integrated with geolocation
                <br />
              </p>
              <div className="text-blk description wow" data-splitting="">
                <strong> Our Solution : </strong>
                GenGIS empowers teams and administrators with:
              </div>
              <p className="text-blk description wow" data-splitting="">
                • Selfie + Geo Attendance – For both office and field staff
                <br />
                • Smart Route Planning – Optimized for solar and civic field
                operations
                <br />
                • Branch-Level User Management – Centralized admin dashboard
                <br />
              </p>
            </div>
          </div>
          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              <div className="author-desc">
                <h2>Rahul Kumar Yadav</h2>
                <span>Web Developer</span>
              </div>
              <figure className="image-1">
                <a href="#" className="lightbox-image" data-fancybox="images">
                  <img
                    title="Rahul Kumar Yadav"
                    src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
                    alt=""
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
