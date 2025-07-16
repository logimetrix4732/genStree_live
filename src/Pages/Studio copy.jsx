import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import video02 from "../assets/videos/video02.mp4";
import WOW from "wowjs";
import Splitting from "splitting";
import "odometer/themes/odometer-theme-default.css";
import Odometer from "odometer";
import WeAreAbleToDo from "../components/WeAreAbleToDo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Studio = () => {
  const sectionRef = useRef(null);
  const odometers = useRef([]);
  const [visible, setVisible] = useState(false);

  const stats = [
    { count: 14, label: "Days", title: "CASE RESEARCH" },
    { count: 24, label: "Hours", title: "UX PROTYPES" },
    { count: 3, label: "Months", title: "UI DESIGNS" },
    { count: 90, label: "Days", title: "FINAL LAUNCH" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // stop observing once visible
        }
      },
      { threshold: 0.5 } // 50% visible then trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      odometers.current.forEach((el, index) => {
        if (el) {
          const od = new Odometer({
            el: el,
            value: 0,
            format: "(d)",
            theme: "default",
          });

          // Delay for smooth rendering
          setTimeout(() => {
            od.update(stats[index].count);
          }, 300);
        }
      });
    }
  }, [visible]);
  useEffect(() => {
    new WOW.WOW().init();
    Splitting();
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
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
              <h1>ABOUT US</h1>
              <p>
                Genstree AI LLP is dedicated to empowering women in
                tech—building inclusive
                <br />
                spaces, fostering innovation, and driving social change through
                <br /> purposeful leadership.
              </p>
            </div>
            {/* end container */}
          </div>
          {/* end inner */}
        </header>
        {/* end page-header */}
        <section className="text-content-block">
          <div className="container">
            <div className="row">
              <div className="col-12 wow" data-splitting="">
                <h3 className="section-title">
                  BUILDING TECH SOLUTIONS <br />
                  WITH PURPOSE & INCLUSION
                </h3>
              </div>
              {/* end col-12 */}
              <div className="col-12 wow" data-splitting="">
                <h5>
                  We co-create digital platforms that empower, inspire, and
                  uplift—blending innovation with empathy to deliver meaningful
                  impact.
                </h5>
              </div>
              {/* end col-12	 */}
              <div className="col-lg-3 col-md-6 wow" data-splitting="">
                <small>01</small>
                <h6>DISCOVER</h6>
                <p>
                  We research real challenges, especially those impacting women,
                  and align technology to solve them effectively.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 wow" data-splitting="">
                <small>02</small>
                <h6>IDEATE</h6>
                <p>
                  Our team blends creativity with purpose—turning ideas into
                  inclusive, scalable digital concepts.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 wow" data-splitting="">
                <small>03</small>
                <h6>DESIGN</h6>
                <p>
                  With a strong focus on user-centric design, we create
                  interfaces that are simple, accessible, and powerful.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 wow" data-splitting="">
                <small>04</small>
                <h6>BUILD</h6>
                <p>
                  We turn prototypes into real, impactful products—bringing
                  ideas to life through modern, scalable development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* end text-content-block */}
        <section className="intro-image light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="office-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <figure className="reveal-effect masker wow">
                        {" "}
                        <img src="images/office01.jpg" alt="Image" />
                        <figcaption>
                          <h6> HEADQUARTOR OF TOUROG</h6>
                        </figcaption>
                      </figure>
                    </div>
                    {/* end swiper-slide */}
                    <div className="swiper-slide">
                      <figure>
                        {" "}
                        <img src="images/office02.jpg" alt="Image" />
                        <figcaption>
                          <h6> TORONTO OFFICE</h6>
                        </figcaption>
                      </figure>
                    </div>
                    {/* end swiper-slide */}
                    <div className="swiper-slide">
                      <figure>
                        {" "}
                        <img src="images/office03.jpg" alt="Image" />
                        <figcaption>
                          <h6> HEADQUARTOR OF TOUROG</h6>
                        </figcaption>
                      </figure>
                    </div>
                    {/* end swiper-slide */}
                  </div>
                  {/* end swiper-wrapper */}
                  <div className="swiper-pagination" />
                  {/* end swiper-pagination */}
                </div>
                {/* end office-slider */}
              </div>
              {/* end col-12 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end intro-image */}
        <section className="process" ref={sectionRef}>
          <div className="container">
            <div className="row">
              {stats.map((stat, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <span
                    className="odometer"
                    ref={(el) => (odometers.current[index] = el)}
                  >
                    0
                  </span>
                  <span className="symbol">{stat.label}</span>
                  <small>{stat.title}</small>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* end process */}
        <WeAreAbleToDo />

        {/* end icon-content-block */}
        <section className="testimonials">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6"
                style={{
                  background: "#75dab4",
                  backgroundAttachment: "fixed",
                  position: "relative",
                  borderRadius: "4px",
                  maxWidth: "500px",
                }}
              >
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  spaceBetween={30}
                  slidesPerView={1}
                  className="testimonials-slider"
                  style={{
                    width: "100%",
                    height: "auto",
                    margin: "0 auto",
                  }}
                >
                  <SwiperSlide>
                    <div className="testimonial">
                      <blockquote
                        style={{
                          fontSize: "18px",
                          lineHeight: "1.6",
                          marginBottom: "20px",
                          color: "#161619",
                        }}
                      >
                        We work closely with your development team, markettting
                        profissionals and stakeholder to design and develop UX
                        and UI that make your website, application or software a
                        joy to use
                      </blockquote>
                      <div className="reviewer">
                        <img
                          src="images/team01.jpg"
                          alt="Image"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                        <div className="reviewer-infos">
                          <h6 style={{ fontSize: "14px", margin: "0" }}>
                            Marcus James
                          </h6>
                          <small style={{ fontSize: "12px" }}>
                            IBIS HOTEL MANAGER
                          </small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="testimonial">
                      <blockquote
                        style={{
                          fontSize: "18px",
                          lineHeight: "1.6",
                          marginBottom: "20px",
                          color: "#161619",
                        }}
                      >
                        Collaborating with our team was a game-changer. Their
                        focus on innovation helped reach a broader audience.
                      </blockquote>
                      <div className="reviewer">
                        <img
                          src="images/team01.jpg"
                          alt="Image"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                        <div className="reviewer-infos">
                          <h6 style={{ fontSize: "14px", margin: "0" }}>
                            Sarah Johnson
                          </h6>
                          <small style={{ fontSize: "12px" }}>
                            Creative Director
                          </small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="col-lg-6">
                <h3 className="section-title">
                  STUDIO PROUD
                  <br />
                  IS QUALITY OF
                  <br />
                  PARTNERS
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* end testimonials */}
        <section className="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 wow" data-splitting="">
                <h3 className="section-title">
                  ALL ABOUT
                  <br />
                  THE OUR TEAM
                </h3>
              </div>
              {/* end col-8 */}
              <div className="col-lg-6 wow" data-splitting="">
                <h5>
                  We work closely with your development team. markettting
                  profissionals and stakeholder to design and develop UX and UI
                  that make your website. application or software a joy to use,
                </h5>
              </div>
              {/* end col-4 */}
            </div>
            {/* end row */}
            <div className="row">
              <div className="col">
                <figure className="reveal-effect masker wow">
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
                  </ul>
                  <img src="images/team01.jpg" alt="Image" />
                  <figcaption className="wow" data-splitting="">
                    {" "}
                    <h6>Alexander O'neil</h6> <small>EXECUTIVE CHIEF</small>{" "}
                  </figcaption>
                </figure>
              </div>
              {/* end col */}
              <div className="col">
                <figure className="reveal-effect masker wow">
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
                  </ul>
                  <img src="images/team02.jpg" alt="Image" />
                  <figcaption className="wow" data-splitting="">
                    {" "}
                    <h6>Jessica Tanana</h6> <small>SENIOR ENGINEER</small>{" "}
                  </figcaption>
                </figure>
              </div>
              {/* end col */}
              <div className="col">
                <figure className="reveal-effect masker wow">
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
                  </ul>
                  <img src="images/team03.jpg" alt="Image" />
                  <figcaption className="wow" data-splitting="">
                    {" "}
                    <h6>Steven Mc'Laren</h6> <small>CREATIVE HEAD CHIEF</small>{" "}
                  </figcaption>
                </figure>
              </div>
              {/* end col */}
              <div className="col">
                <figure className="reveal-effect masker wow">
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
                  </ul>
                  <img src="images/team04.jpg" alt="Image" />
                  <figcaption className="wow" data-splitting="">
                    {" "}
                    <h6>Dasha Avdeieva</h6> <small>ACCOUNT MANAGER</small>{" "}
                  </figcaption>
                </figure>
              </div>
              {/* end col */}
              <div className="col">
                <figure className="reveal-effect masker wow">
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
                  </ul>
                  <img src="images/team05.jpg" alt="Image" />
                  <figcaption className="wow" data-splitting="">
                    {" "}
                    <h6>Dmitry Samohin</h6> <small>DIGITAL PRODUCER</small>{" "}
                  </figcaption>
                </figure>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end team */}
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
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
              <h6>LET'S HAVE A TALK ABOUT YOUR PROJECT.</h6>
              <h2>
                Need more information or want <br />
                to get in touch?
              </h2>
              <a href="#" className="link">
                Get in touch
              </a>{" "}
            </div>
            {/* end col-12 */}
            <div className="col-12">
              <div className="footer-bar">
                {" "}
                <span className="copyright">
                  © 2022 Tourog | All Rights Reserved
                </span>{" "}
                <span className="creation">
                  Site created by <a href="#">Themezinho</a>
                </span>{" "}
              </div>
              {/* end footer-bar */}
            </div>
            {/* end col-12 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </footer>
      {/* end footer */}
      {/* JS FILES */}
    </>
  );
};

export default Studio;
