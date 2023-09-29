import "../css/LandingPage.css";
import image from "../assets/images/rico.jpg";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="landingPage">
      <Navbar />
      <div className="main">
        <div className="titleAja">
          <img src={image} alt="" data-aos="flip-right" />
          <h1 data-aos="flip-left">Studio Ghibli</h1>
          <div className="forA">
            <a href="/filmography" data-aos="fade-right">
              filmography
            </a>
            <a href="/about" data-aos="fade-left">
              about
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
