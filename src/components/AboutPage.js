import leftImage from "../assets/images/wallpaperflare.com_wallpaper (1).jpg";
import "../css/AboutPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="aboutPage">
      <Navbar />
      <div className="mainAbout">
        <img src={leftImage} alt="" data-aos="flip-right" />
        <div className="txtAbout" data-aos="flip-left">
          <h3>about studio ghibli</h3>
          <p>
            Studio Ghibli was founded in 1985 by animated film directors Isao Takahata and Hayao Miyazaki, and has produced twenty-two feature-length films. Most Studio Ghibli films ranked number one at the box office in Japan in the year
            in which they were released. SPIRITED AWAY, directed by Hayao Miyazaki and released in 2001, is the all-time highest grossing film in Japan, earning over 30 billion yen at the box office. <br /> <br /> Studio Ghibli films have
            garnered numerous awards and critical acclaim from film critics and animation specialists around the world. SPIRITED AWAY was awarded the Golden Bear as the Best Feature Film at the 2002 Berlin International Film Festival and
            won the 2002 Academy Award for Best Animated Feature Film. In October 2001, Studio Ghibli, in conjunction with The Tokuma Memorial Cultural Foundation for Animation, founded the Ghibli Museum, Mitaka, designed by Hayao Miyazaki.{" "}
            <br /> <br />
            THE WIND RISES (2013), THE TALE OF THE PRINCESS KAGUYA (2013), WHEN MARNIE WAS THERE (2014) and THE RED TURTLE (2016), the last four films released by Studio Ghibli, have earned the studio four consecutive Academy Award
            nominations for Best Animated Feature Film. The studio is currently working on a new production.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
