import React from "react";
import NavBar from "../NavBar";

const SingleShowCase = () => {
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
            <video src="videos/video02.mp4" muted="" loop="" autoPlay="" />
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
        <section className="case-study">
          <div className="container">
            <div className="row">
              <div className="col-12 wow" data-splitting="">
                <h3 className="section-title">
                  DIGITAL WEB PRODUCTS <br />
                  FOR AMAZING CLIENTS
                </h3>
              </div>
              {/* end col-12 */}
              <div className="col-lg-8 col-md-10 wow" data-splitting="">
                <h6>DESCRIPTION</h6>
                <p>
                  We work closely with your development team. markettting
                  profissionals and stakeholder to design and develop UX and UI
                  that make your website. application or software a joy to use,
                </p>
              </div>
              {/* end col-12	 */}
              <div className="col-md-5 wow" data-splitting="">
                <h6>ABOUT CASE</h6>
                <p>
                  Design and develop UX and UI that make your website.
                  application or software a joy to use,
                </p>
              </div>
              {/* end col-6 */}
              <div className="col-md-5 wow" data-splitting="">
                <h6>CASE LAUNCH</h6>
                <p>20, Semptember 2022 - Web design &amp; Mobile app</p>
              </div>
              {/* end col-6 */}
            </div>
            {/* edn row */}
          </div>
          {/* end container */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <figure>
                  <video src="videos/video01.mp4" muted="" controls="" />
                </figure>
              </div>
              {/* end col-12 */}
              <div className="col-md-4">
                <figure>
                  <img src="images/works01.jpg" alt="Image" />
                </figure>
              </div>
              {/* end col-4 */}
              <div className="col-md-4">
                <figure>
                  <img src="images/works02.jpg" alt="Image" />
                </figure>
              </div>
              {/* end col-4 */}
              <div className="col-md-4">
                <figure>
                  <img src="images/works03.jpg" alt="Image" />
                </figure>
              </div>
              {/* end col-4 */}
              <div className="col-md-6">
                <figure>
                  <img src="images/works04.jpg" alt="Image" />
                </figure>
              </div>
              {/* end col-6 */}
              <div className="col-md-6">
                <figure>
                  <img src="images/works05.jpg" alt="Image" />
                </figure>
              </div>
              {/* end col-6 */}
              <div className="col-12">
                <figure>
                  <img src="images/slide01.jpg" alt="Image" />
                </figure>
              </div>
              {/* end col-12 */}
              <div className="col-12 wow" data-splitting="">
                <h5>Thanks for Watching</h5>
              </div>
              {/* end col-12 */}
            </div>
            {/* end row */}
          </div>
          {/* end container-fluid */}
        </section>
        {/* end case-study */}
      </main>
      {/* end main */}
      {/* end footer */}
      {/* JS FILES */}
    </>
  );
};

export default SingleShowCase;
