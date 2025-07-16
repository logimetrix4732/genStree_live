import React from "react";
import office01 from "../../assets/images/office01.jpg";
import office02 from "../../assets/images/office02.jpg";
import office03 from "../../assets/images/office03.jpg";
import introImg from "../../assets/images/introImg1.png";
const IntroImage = () => {
  return (
    <section className="intro-image">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="office-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <figure className="reveal-effect masker wow">
                    <img src={introImg} alt="Image" />
                    <figure
                      style={{ marginLeft: "10px", marginBottom: "20px" }}
                    >
                      <figcaption style={{ color: "white", marginLeft: 0 }}>
                        <h6
                          style={{
                            margin: "0 0 10px 0",
                            padding: 0,
                            color: "white",
                          }}
                        >
                          What Drives Us:
                        </h6>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "20px",
                            margin: 0,
                          }}
                        >
                          <li style={{ color: "white", marginBottom: "6px" }}>
                            Inclusive Innovation for Real-World Impact
                          </li>
                          <li style={{ color: "white", marginBottom: "6px" }}>
                            Advanced Tech Products Built for India
                          </li>
                          <li style={{ color: "white" }}>
                            Opportunities in STEM, Leadership, & Community
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                  </figure>
                </div>
                {/* end swiper-slide */}
                <div className="swiper-slide">
                  <figure>
                    <img src={office02} alt="Image" />
                    <figcaption>
                      <h6> TORONTO OFFICE</h6>
                    </figcaption>
                  </figure>
                </div>
                {/* end swiper-slide */}
                <div className="swiper-slide">
                  <figure>
                    <img src={office03} alt="Image" />
                    <figcaption>
                      <h6> HEADQUARTOR OF TOUROG</h6>
                    </figcaption>
                  </figure>
                </div>
                {/* end swiper-slide */}
              </div>
              {/* end swiper-wrapper */}
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
  );
};

export default IntroImage;
