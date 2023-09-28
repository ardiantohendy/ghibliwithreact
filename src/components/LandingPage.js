import "../css/LandingPage.css";
import image from "../assets/images/rico.jpg";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="landingPage">
      <Navbar />
      <div className="main">
        <div className="titleAja">
          <img src={image} alt="" />
          <h1>Studio Ghibli</h1>
          <div className="forA">
            <a href="/filmography">filmography</a>
            <a href="/about">about</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
