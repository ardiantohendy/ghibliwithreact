import "../css/LandingPage.css";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="landingPage">
      <Navbar />
      <div className="main">
        <h1>
          Studio <span>Ghibli</span>
        </h1>
        <div className="forP">
          <p>
            "Studio Ghibli is a legendary beacon of artistic brilliance in the world of animation, crafting enchanting worlds where imagination knows no bounds. Its films are a tapestry of heartwarming tales, intricately woven with vibrant
            characters and breathtaking landscapes."
          </p>
          <div className="forA">
            <a href="/filmography">filmography</a>
            <a href="/about">about</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
