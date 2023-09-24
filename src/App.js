import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import FilmographyPage from "./components/FilmographyPage";
import { getFilms } from "./connections/GhibliApi";
import { useEffect, useState } from "react";

function App() {
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
              <h3>{films.title}</h3>
              <h4>{films.original_title}</h4>
              <h5>Score: {films.rt_score}</h5>
              <p>{films.description}</p>
              <a href="#">Buy</a>
              <a href="#">More Info</a>
            </div>
          </div>
        );
      } else if (i % 2 !== 0) {
        return (
          <div className="rightCard">
            <div className="descCard">
              <h3>{films.title}</h3>
              <h4>{films.original_title}</h4>
              <h5>Score:{films.rt_score}</h5>
              <p>{films.description}</p>
              <a href="#">Buy</a>
              <a href="#">More Info</a>
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
    <div>
      <Navbar />
      <LandingPage />
      <AboutPage />
      <FilmographyPage getList={listOfFilms} getFilmList={getFilmography} />
    </div>
  );
}

export default App;
