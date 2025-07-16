import React, { useEffect } from "react";
import { WOW } from "wowjs";
import Splitting from "splitting";
import NavBar from "../components/NavBar";
import Dashboard from "../components/Dashboard";
import IntroAbout from "../components/IntroAbout";
import IntroImage from "../components/IntroImage";
import WorksImages from "../components/WorksImages";
import preloader from "../assets/images/preloader.gif";
import WeAreAbleToDo from "../components/WeAreAbleToDo";
import "animate.css";
import "../styles/slider.css";
import "../styles/navigation.css";

const Home = () => {
  useEffect(() => {
    new WOW().init();
    Splitting();
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <React.Fragment>
      <div className="social-media">
        <div className="layer"> </div>
        {/* end layer */}
        <div className="inner">
          <h5>Social media </h5>
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="all-cases">
        <div className="layer"> </div>
        <div className="inner">
          <ul>
            <li>
              <a href="#">Darkness</a>
            </li>
            <li>
              <a href="#">Goddes</a>
            </li>
            <li>
              <a href="#">Employee</a>
            </li>
            <li>
              <a href="#">Berry</a>
            </li>
            <li>
              <a href="#">Roosters</a>
            </li>
            <li>
              <a href="#">Primero</a>
            </li>
          </ul>
        </div>
      </div>
      <main>
        <NavBar />
        <Dashboard />
        <IntroAbout />
        <IntroImage />
        <WeAreAbleToDo />
        <WorksImages />
      </main>
    </React.Fragment>
  );
};

export default Home;
