import React from "react";
import logo01 from "../../assets/images/logo01.png";
import logo02 from "../../assets/images/logo02.png";
import logo03 from "../../assets/images/logo03.png";
import logo04 from "../../assets/images/logo04.png";
import logo05 from "../../assets/images/logo05.png";
import logo06 from "../../assets/images/logo06.png";
import logo07 from "../../assets/images/logo07.png";
import logo08 from "../../assets/images/logo08.png";
import logo09 from "../../assets/images/logo09.png";
const Clients = () => {
  return (
    <section className="clients">
      <div className="container">
        <div className="row">
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
                <img src={logo01} alt="Image" />
              </li>
              <li className="reveal-effect masker wow">
                <img src={logo02} alt="Image" />
              </li>
              <li className="reveal-effect masker wow">
                <img src={logo03} alt="Image" />
              </li>
              <li className="reveal-effect masker wow">
                <img src={logo04} alt="Image" />
              </li>
              <li className="reveal-effect masker wow">
                <img src={logo05} alt="Image" />
              </li>
              <li className="reveal-effect masker wow">
                <img src={logo06} alt="Image" />
              </li>
              <li className="reveal-effect masker wow">
                <img src={logo07} alt="Image" />
              </li>
              <li className="reveal-effect masker wow">
                <img src={logo08} alt="Image" />
              </li>
              <li className="reveal-effect masker wow">
                <img src={logo09} alt="Image" />
              </li>
            </ul>
          </div>
          {/* end col-7 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
};

export default Clients;
