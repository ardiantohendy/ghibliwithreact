import "../css/FilmographyPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getFilms } from "../connections/GhibliApi";
import { useEffect, useState } from "react";

function FilmographyPage(props) {
  const [getFilmography, setFilmography] = useState([]);

  useEffect(() => {
    getFilms().then((result) => {
      setFilmography(result);
    });
  }, []);

  const listOfFilms = (property) => {
    return property.map((films, i) => {
      if (i % 2 === 0) {
        return (
          <div className="leftCard">
            <div className="imgCard">
              <img src={films.image} alt="" />
            </div>
            <div className="descCard">
              <div className="encapsule">
                <div className="descCardTtl">
                  <h3>{films.title}</h3>
                  <h4>( {films.original_title} )</h4>
                  <h5>Score: {films.rt_score}</h5>
                </div>
                <p className="description">{films.description}</p>
              </div>
              <div className="descBtn">
                <a href="#">Buy</a>
                <a href="#">More Info</a>
              </div>
            </div>
          </div>
        );
      } else if (i % 2 !== 0) {
        return (
          <div className="rightCard">
            <div className="descCard">
              <div className="encapsule">
                <div className="descCardTtl">
                  <h3>{films.title}</h3>
                  <h4>( {films.original_title} )</h4>
                  <h5>Score:{films.rt_score}</h5>
                </div>
                <p className="description">{films.description}</p>
              </div>
              <div className="descBtn">
                <a href="#">Buy</a>
                <a href="#">More Info</a>
              </div>
            </div>
            <div className="imgCard">
              <img src={films.image} alt="" />
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="filmPage">
      <Navbar />
      <div className="subTxt">
        <h3>filmography.</h3>
      </div>
      <div className="mainContent">{listOfFilms(getFilmography)}</div>
      <Footer />
    </div>
  );
}

export default FilmographyPage;
