import React from "react";

const Footer = () => {
  return (
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
            <h6>Let’s Talk Vision. Let’s Build the Future.</h6>
            <p style={{ fontSize: "30px" }}>
              Have a research query, collaboration idea, or want to license one
              of our data insights? We’re open to partnerships, press, research
              leads, and bold conversations.
            </p>
            <a href="#" className="link">
              Get in touch or email us at contact@genstree.com
            </a>{" "}
          </div>
          {/* end col-12 */}
          <div className="col-12">
            <div className="footer-bar">
              <span className="copyright">
                © 2025 GenStree AI LLP. All rights reserved.
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
  );
};

export default Footer;
