import works01 from "../../assets/images/works01.jpg";
import works02 from "../../assets/images/works02.jpg";
import works03 from "../../assets/images/works03.jpg";
import Quantuml from "../../assets/images/Quantuml.jpg";
import farming from "../../assets/images/farming.jpg";
import Ai from "../../assets/images/Ai1.jpg";
const WorksImages = () => {
  return (
    <section className="works">
      <ul>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="images/works01.jpg" data-fancybox="">
              <img
                src={Ai}
                alt="Image"
                style={{
                  width: "514px",
                  height: "660px",
                  objectFit: "cover",
                }}
              />
            </a>{" "}
          </figure>
          <div className="caption wow" data-splitting="">
            <h3>AI & Women in Tech</h3>
            <small>
              How women are leading India's AI revolution — from rural labs to
              global patents. GenStree explores how inclusive AI is shaping
              ethical, scalable innovation.
            </small>{" "}
          </div>
          {/* end caption */}
        </li>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="images/works02.jpg" data-fancybox="">
              <img
                src={farming}
                alt="Image"
                style={{
                  width: "514px",
                  height: "660px",
                  objectFit: "cover",
                }}
              />
            </a>{" "}
          </figure>
          <div className="caption wow" data-splitting="">
            <h3>Smart Farming, Smarter Women</h3>
            <small>
              Precision agriculture isn’t just about drones — it’s about women
              rewriting the future of food. From satellite-led crop monitoring
              to AI-based soil analytics, GenStree covers it all.
            </small>
          </div>
          {/* end caption */}
        </li>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="images/works03.jpg" data-fancybox="">
              <img
                src={Quantuml}
                alt="Image"
                style={{
                  width: "514px",
                  height: "660px",
                  objectFit: "cover",
                }}
              />
            </a>{" "}
          </figure>
          <div className="caption wow" data-splitting="">
            <h3>The Quantum Future, Built in India</h3>
            <small>
              Can India leapfrog into quantum leadership with women at the
              forefront? We decode the National Quantum Mission, its real
              impact, and the people shaping it.
            </small>
          </div>
          {/* end caption */}
        </li>
      </ul>
    </section>
  );
};

export default WorksImages;
