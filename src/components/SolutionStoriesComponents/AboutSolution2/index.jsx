import "./AboutSolution2.css";
import richaRai from "../../../assets/images/richaRai.jpg";
import manishaArora from "../../../assets/images/manishaArora.png";
import manshi from "../../../assets/images/manshi.png";
import shradha from "../../../assets/images/shradha1.png";
const AboutSolution2 = () => {
  return (
    <div className="aboutSolution2-container">
      <div className="aboutSolution2-contentLeft">
        <div className="aboutSolution2-row">
          <div className="aboutSolution2-imgWrapper">
            <img src={richaRai} alt="" />
          </div>
          <div className="aboutSolution2-imgWrapper">
            <img src={manishaArora} alt="" />
          </div>
          <div className="aboutSolution2-imgWrapper">
            <img src={manshi} alt="" />
          </div>
          <div className="aboutSolution2-imgWrapper">
            <img src={shradha} alt="" />
          </div>
        </div>
      </div>
      <div className="aboutSolution2-contentRight">
        <div className="aboutSolution2-content">
          <h4>Welcome To</h4>
          <h2>Empowering Women. Engineering Impact.</h2>
          <p>
            At Genstree, we believe technology isn’t just built — it’s lived,
            led, and shaped by women who dare to reimagine the world. Our
            mission is to create transformative tools that uplift communities,
            starting from India’s rural heartlands to its urban innovation hubs.
            <br />
            We are a research-driven, woman-led tech company redefining what's
            possible in agriculture, governance, education, and infrastructure.
            From AI-powered Smart Village systems to satellite-based disaster
            prediction and inclusive product ecosystems — we build with purpose
            and scale with empathy.
            <br />
            Let’s make digital India truly inclusive — and globally impactful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSolution2;
