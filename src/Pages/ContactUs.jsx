import React from "react";
import NavBar from "../components/NavBar";

const ContactUs = () => {
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
              <h1>CONTACT</h1>
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
        <section className="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <h3 className="section-title">
                  SAY HELLO <br />
                  TO REACH US
                </h3>
              </div>
              {/* end col-5 */}
              <div className="col-lg-4 col-md-6">
                <h6>HEAD OFFICE</h6>
                <address>
                  Boryssa Himry 124 B Block Pozniaky
                  <br />
                  Kiev - UKRAINE
                </address>
              </div>
              {/* end col-4 */}
              <div className="col-lg-3 col-md-6">
                <h6>REACH US</h6>
                <address>
                  <p>+38 02 237 24 21</p>
                  <a href="#">hello@tourog.com.ua</a>
                </address>
              </div>
              {/* end col-3 */}
              <div className="col-lg-5">
                <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325518.68780316407!2d30.252511957059642!3d50.4016990487754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCwLCAwMjAwMA!5e0!3m2!1suk!2str!4v1555663203384!5m2!1suk!2str" />
                </div>
                {/* end map */}
              </div>
              {/* end col-5 */}
              <div className="col-lg-7">
                <div className="contact-form">
                  <form id="contact" name="contact" method="post">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                        required=""
                      />
                      <span>Your name</span>
                    </div>
                    {/* end form-group */}
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="off"
                        required=""
                      />
                      <span>Your e-mail</span>
                    </div>
                    {/* end form-group */}
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        autoComplete="off"
                        required=""
                      />
                      <span>Subject</span>
                    </div>
                    {/* end form-group */}
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        autoComplete="off"
                        required=""
                        defaultValue={""}
                      />
                      <span>Your message</span>
                    </div>
                    {/* end form-group */}
                    <div className="form-group">
                      <button id="submit" type="submit" name="submit">
                        <strong>
                          Submit Now
                          <b /> <i />
                        </strong>
                      </button>
                    </div>
                    {/* end form-group */}
                  </form>
                  {/* end form */}
                  <div className="form-group">
                    <div
                      id="success"
                      className="alert alert-success"
                      role="alert"
                    >
                      {" "}
                      Your message was sent successfully! We will be in touch as
                      soon as we can.{" "}
                    </div>
                    {/* end success */}
                    <div id="error" className="alert alert-danger" role="alert">
                      {" "}
                      Something went wrong, try refreshing and submitting the
                      form again.{" "}
                    </div>
                    {/* end error */}
                  </div>
                  {/* end form-group */}
                </div>
                {/* end contact-form */}
              </div>
              {/* col-7 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end blog */}
      </main>
      {/* end footer */}
      {/* JS FILES */}
    </>
  );
};

export default ContactUs;
