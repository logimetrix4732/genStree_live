import React from "react";

const IntroAbout = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 wow" data-splitting="">
            <h3 className="section-title">
              Empowering Women in STEM, AI & Innovation
            </h3>
            <a href="mailto:connect@genstree.com">connect@genstree.com</a>
          </div>
          {/* end col-5 */}
          <div className="col-lg-7 wow" data-splitting="">
            <p>
              At GenStree AI LLP, we believe true innovation starts with
              inclusion. We’re reshaping technology by placing women at the
              forefront of leadership, design, and development.
            </p>
            <h6>Genstree AI LLP</h6>
            <small>Women-Led | Future-Focused</small> <b>2025</b>
            <h4>
              Lead the Indian tech landscape with inclusive leadership and
              impactful innovation — <br />
              across geospatial intelligence, AI-powered enterprise tools, and
              grassroots outreach programs.
            </h4>
          </div>
          {/* end col-7 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
};

export default IntroAbout;
