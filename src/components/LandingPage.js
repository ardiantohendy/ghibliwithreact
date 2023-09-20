import "../css/LandingPage.css";
import leftImage from "../assets/images/wallpaperflare.com_wallpaper (1).jpg";

function LandingPage(props) {
  return (
    <div className="landingPage">
      <div className="main">
        <h1>
          Studio <span>Ghibli</span>{" "}
        </h1>
        <div className="forP">
          <p>
            "Studio Ghibli is a legendary beacon of artistic brilliance in the world of animation, crafting enchanting worlds where imagination knows no bounds. Its films are a tapestry of heartwarming tales, intricately woven with vibrant
            characters and breathtaking landscapes."
          </p>
          <div className="forA">
            <a href="#">filmography</a>
            <a href="#">about</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
