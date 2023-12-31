import "../css/Footer.css";
import Instagram from "../assets/icons/icons8-instagram-500.png";
import Facebook from "../assets/icons/icons8-facebook-500.png";
import Twitter from "../assets/icons/icons8-twitter-500.png";
import Gmail from "../assets/icons/icons8-gmail-500.png";
import Youtube from "../assets/icons/icons8-youtube-500.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="mainBody">
      <div className="topFoot" data-aos="fade-down">
        <div className="logo">
          <h3>Studio Ghibli</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="options">
          <div className="shop">
            <h4>Shop</h4>
            <p>all product from Ghibli</p>
            <ul>
              <li>
                <a href="#">poster</a>
              </li>
              <li>
                <a href="#">t-shirt</a>
              </li>
              <li>
                <a href="#">hoodie & jacket</a>
              </li>
              <li>
                <a href="#">bag</a>
              </li>
              <li>
                <a href="#">all Product</a>
              </li>
            </ul>
          </div>
          <div className="theater">
            <h4>Theater</h4>
            <p>all stories from Ghibli but in theater</p>
            <ul>
              <li>
                <a href="#">buy ticket</a>
              </li>
              <li>
                <a href="#">more info</a>
              </li>
            </ul>
          </div>
          <div className="optionsLikeNav">
            <ul>
              <li>
                <a href="/ghibliwithreact/">home</a>
              </li>
              <li>
                <a href="/ghibliwithreact/filmography/">filmography</a>
              </li>
              <li>
                <a href="/#">in theaters</a>
              </li>
              <li>
                <a href="/ghibliwithreact/about/">about</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span data-aos="zoom-in"></span>
      <div className="botFoot" data-aos="fade-up">
        <ul>
          <li>
            <a href="#">
              <img src={Instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Gmail} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Youtube} alt="" />
            </a>
          </li>
        </ul>
        <p>&copy;Copyright. All right reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
