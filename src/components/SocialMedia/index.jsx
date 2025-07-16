import React from "react";

const SocialMedia = () => {
  return (
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
  );
};

export default SocialMedia;
