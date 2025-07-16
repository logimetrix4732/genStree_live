import React from "react";
import NavBar from "../components/NavBar";
import video02 from "../assets/videos/video02.mp4";
import AboutSolution from "../components/SolutionStoriesComponents/AboutSolution";
const ShowCase = () => {
  return (
    <>
      <div className="preloader">
        <div className="layer" />
        {/* end layer */}
        <div className="inner">
          <figure>
            {" "}
            <img src="images/preloader.gif" alt="Image" />{" "}
          </figure>
          <span>Site Loading</span>{" "}
        </div>
        {/* end inner */}
      </div>
      {/* end preloader */}
      <div className="page-transition">
        <div className="layer" />
        {/* end layer */}
      </div>
      {/* end page-transition */}
      <nav className="site-navigation">
        <div className="layer" />
        {/* end layer */}
        <div className="inner">
          <ul data-splitting="">
            <li>
              <a href="index.html">HOME</a>
              <i className="fas fa-caret-down" /> <small>First page</small>
              <ul>
                <li>
                  <a href="index.html">HOME SLIDER</a>
                </li>
                <li>
                  <a href="index-video.html">HOME VIDEO</a>
                </li>
                <li>
                  <a href="index-carousel.html">HOME CAROUSEL</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="studio.html">STUDIO</a> <small>All About Us</small>{" "}
            </li>
            <li>
              <a href="showcases.html">SHOWCASES</a>{" "}
              <small>Our all projects</small>{" "}
            </li>
            <li>
              <a href="blog.html">BLOG</a> <small>Recent posts</small>{" "}
            </li>
            <li>
              <a href="contact.html">CONTACT</a> <small>Say hello</small>{" "}
            </li>
          </ul>
        </div>
        {/* end inner */}
      </nav>
      {/* end site-navigation */}
      <div className="social-media">
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
      {/* end social-media */}
      <div className="all-cases">
        <div className="layer"> </div>
        {/* end layer */}
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
        {/* end inner */}
      </div>
      {/* end all-cases */}
      <main>
        <NavBar />

        {/* end left-side */}
        <div className="all-cases-link">
          {" "}
          <span>ALL CASES</span> <b>+</b>{" "}
        </div>
        {/* end all-cases-link */}
        <header className="page-header">
          <div className="video-bg">
            <video src={video02} loop autoPlay playsInline />
          </div>
          {/* end video-bg */}
          <div className="inner">
            <div className="container">
              <h1>SHOWCASE</h1>
              <p>
                We provide a free day to experience our benefits of digital
                world
              </p>
            </div>
            {/* end container */}
          </div>
          {/* end inner */}
        </header>
        {/* end page-header */}
        <section
          className="works"
          style={{ border: "1px solid red", background: "white" }}
        >
          <AboutSolution />

          <ul>
            <li>
              <figure className="reveal-effect masker wow">
                {" "}
                <a href="case-single.html">
                  <img src="images/works01.jpg" alt="Image" />
                </a>{" "}
              </figure>
              <div className="caption wow" data-splitting="">
                <h3>Darkness Vehicle</h3>
                <small>DIGITAL, PRINT, DEVELOPMENT</small>{" "}
              </div>
              {/* end caption */}
            </li>
            <li>
              <figure className="reveal-effect masker wow">
                {" "}
                <a href="case-single.html">
                  <img src="images/works02.jpg" alt="Image" />
                </a>{" "}
              </figure>
              <div className="caption wow" data-splitting="">
                <h3>Goddes Cover Art</h3>
                <small>PRINT, DIGITAL, DEVELOPMENT</small>
              </div>
              {/* end caption */}
            </li>
            <li>
              <figure className="reveal-effect masker wow">
                {" "}
                <a href="case-single.html">
                  <img src="images/works03.jpg" alt="Image" />
                </a>{" "}
              </figure>
              <div className="caption wow" data-splitting="">
                <h3>Hard Employee</h3>
                <small>WEB, DIGITAL, DEVELOPMENT</small>{" "}
              </div>
              {/* end caption */}
            </li>
            <li>
              <figure className="reveal-effect masker wow">
                {" "}
                <a href="case-single.html">
                  <img src="images/works04.jpg" alt="Image" />
                </a>{" "}
              </figure>
              <div className="caption wow" data-splitting="">
                <h3>Construction Man</h3>
                <small>DIGITAL, PRINT, DEVELOPMENT</small>{" "}
              </div>
              {/* end caption */}
            </li>
            <li>
              <figure className="reveal-effect masker wow">
                {" "}
                <a href="case-single.html">
                  <img src="images/works05.jpg" alt="Image" />
                </a>{" "}
              </figure>
              <div className="caption wow" data-splitting="">
                <h3>King of Roosters</h3>
                <small>PRINT, DIGITAL, DEVELOPMENT</small>{" "}
              </div>
              {/* end caption */}
            </li>
            <li>
              <figure className="reveal-effect masker wow">
                {" "}
                <a href="case-single.html">
                  <img src="images/works06.jpg" alt="Image" />{" "}
                </a>
              </figure>
              <div className="caption wow" data-splitting="">
                <h3>Primero Car</h3>
                <small>WEB, DIGITAL, DEVELOPMENT</small>{" "}
              </div>
              {/* end caption */}
            </li>
            <li>
              <figure className="reveal-effect masker wow">
                {" "}
                <a href="case-single.html">
                  <img src="images/works07.jpg" alt="Image" />
                </a>{" "}
              </figure>
              <div className="caption wow" data-splitting="">
                <h3>Sweet Berry Pie</h3>
                <small>DIGITAL, PRINT, DEVELOPMENT</small>{" "}
              </div>
              {/* end caption */}
            </li>
            <li>
              <figure className="reveal-effect masker wow">
                {" "}
                <a href="case-single.html">
                  <img src="images/works08.jpg" alt="Image" />
                </a>{" "}
              </figure>
              <div className="caption wow" data-splitting="">
                <h3>Iron Swimmer</h3>
                <small>PRINT, DIGITAL, DEVELOPMENT</small>{" "}
              </div>
              {/* end caption */}
            </li>
            <li>
              <figure className="reveal-effect masker wow">
                {" "}
                <a href="case-single.html">
                  <img src="images/works09.jpg" alt="Image" />{" "}
                </a>
              </figure>
              <div className="caption wow" data-splitting="">
                <h3>Plants Women</h3>
                <small>WEB, DIGITAL, DEVELOPMENT</small>{" "}
              </div>
              {/* end caption */}
            </li>
          </ul>
        </section>
        {/* end works */}
        <section className="clients">
          <div className="container">
            <div className="row">
              {" "}
              <div className="col-lg-5 wow" data-splitting="">
                <h3 className="section-title">
                  AGENSY PROUD
                  <br />
                  IS QUALITY OF
                  <br />
                  PARTNERS
                </h3>
              </div>
              {/* end col-5 */}
              <div className="col-lg-7">
                <ul>
                  <li className="reveal-effect masker wow">
                    {" "}
                    <img src="images/logo01.png" alt="Image" />{" "}
                  </li>
                  <li className="reveal-effect masker wow">
                    {" "}
                    <img src="images/logo02.png" alt="Image" />{" "}
                  </li>
                  <li className="reveal-effect masker wow">
                    {" "}
                    <img src="images/logo03.png" alt="Image" />{" "}
                  </li>
                  <li className="reveal-effect masker wow">
                    {" "}
                    <img src="images/logo04.png" alt="Image" />{" "}
                  </li>
                  <li className="reveal-effect masker wow">
                    {" "}
                    <img src="images/logo05.png" alt="Image" />{" "}
                  </li>
                  <li className="reveal-effect masker wow">
                    {" "}
                    <img src="images/logo06.png" alt="Image" />{" "}
                  </li>
                  <li className="reveal-effect masker wow">
                    {" "}
                    <img src="images/logo07.png" alt="Image" />{" "}
                  </li>
                  <li className="reveal-effect masker wow">
                    {" "}
                    <img src="images/logo08.png" alt="Image" />{" "}
                  </li>
                  <li className="reveal-effect masker wow">
                    {" "}
                    <img src="images/logo09.png" alt="Image" />{" "}
                  </li>
                </ul>
              </div>
              {/* end col-7 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end clients */}
      </main>
      {/* end main */}
      {/* end footer */}
      {/* JS FILES */}
    </>
  );
};

export default ShowCase;
