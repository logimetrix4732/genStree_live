import React, { useEffect, useState } from "react";
import logoWeb from "../../assets/images/logoWeb1.png";
const NavBar = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isEqualizerPaused, setIsEqualizerPaused] = useState(false);
  const [isSocialMediaOpen, setIsSocialMediaOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
    document.body.classList.toggle("no-scroll");
  };

  const toggleEqualizer = () => {
    setIsEqualizerPaused(!isEqualizerPaused);
  };

  const toggleSocialMedia = () => {
    setIsSocialMediaOpen(!isSocialMediaOpen);
    document.body.classList.toggle("no-scroll");
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  useEffect(() => {
    if (isNavigationOpen || isSocialMediaOpen) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll
      document.body.style.overflow = "auto";
    }

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavigationOpen, isSocialMediaOpen]);
  return (
    <React.Fragment>
      <div className={`social-media ${isSocialMediaOpen ? "active" : ""}`}>
        <div className="layer"> </div>
        {/* end layer */}
        <div className="inner">
          <h5>Social Share </h5>
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
              <a
                href="https://www.linkedin.com/in/genstree-ai-llp-724b98360/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
      <nav className={`site-navigation ${isNavigationOpen ? "active" : ""}`}>
        <div className="layer" />
        {/* end layer */}
        <div className="inner">
          <ul data-splitting="">
            <li>
              <a href="/aboutUs">Who we are</a>
              <small>About Us</small>
            </li>
            <li>
              <a href="/solution">Explore our expertise</a>
              <small>Solutions & Stories</small>
            </li>
            <li>
              <a href="/AIbulletin">Genstree AI bulletin</a>
              <small>News letter</small>
            </li>
            <li>
              <a href="/contactUs">Get in touch with us</a>
              <small>Contact US</small>
            </li>
          </ul>
        </div>

        {/* end inner */}
      </nav>
      <aside className="left-side">
        <div className="logo">
          <a href="/">
            <img
              src={logoWeb}
              alt="Image"
              style={{
                maxHeight: "100px",
                maxWidth: "100%",
                height: "auto",
                width: "auto",
                borderRadius: "50%",
              }}
            />
          </a>
        </div>
        {/* end logo */}
        <div
          className={`hamburger ${isNavigationOpen ? "active" : ""}`}
          onClick={toggleNavigation}
        >
          <div className="hamburger__line hamburger__line--01">
            <div className="hamburger__line-in hamburger__line-in--01" />
          </div>
          <div className="hamburger__line hamburger__line--02">
            <div className="hamburger__line-in hamburger__line-in--02" />
          </div>
          <div className="hamburger__line hamburger__line--03">
            <div className="hamburger__line-in hamburger__line-in--03" />
          </div>
          <div className="hamburger__line hamburger__line--cross01">
            <div className="hamburger__line-in hamburger__line-in--cross01" />
          </div>
          <div className="hamburger__line hamburger__line--cross02">
            <div className="hamburger__line-in hamburger__line-in--cross02" />
          </div>
        </div>
        {/* end hamburger */}
        <div className="follow-us" onClick={toggleSocialMedia}>
          {" "}
          FOLLOW US{" "}
        </div>
        {/* end follow-us */}
        <div
          className={`equalizer ${isEqualizerPaused ? "paused" : ""}`}
          onClick={toggleEqualizer}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* end equalizer */}
      </aside>
    </React.Fragment>
  );
};

export default NavBar;
