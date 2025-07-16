import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Studio from "./Pages/Studio";
import SingleBlog from "./components/SingleBlog";
import ContactUs from "./Pages/ContactUs";
import Popper from "./components/Popper";
import NavBar from "./components/NavBar";
import GenVoice from "./Pages/GenVoice";
import Footer from "./components/Footer";
import SolutionStories from "./Pages/SolutionStories";
import preloader from "../src/assets/images/preloader.gif";

function App() {
  return (
    <Router>
      <div className="preloader">
        <div className="layer" />
        <div className="inner">
          <figure>
            <img src={preloader} alt="Image" />{" "}
          </figure>
          <span>GenStree Loading</span>{" "}
        </div>
      </div>
      <div className="page-transition">
        <div className="layer" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<Studio />} />
        <Route path="/AIbulletin" element={<GenVoice />} />
        <Route path="/solution" element={<SolutionStories />} />
        <Route path="/newsletter/:id" element={<SingleBlog />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/popper" element={<Popper />} />
        <Route path="/Navbar" element={<NavBar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
