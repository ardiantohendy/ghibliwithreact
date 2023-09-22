import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import FilmographyPage from "./components/FilmographyPage";
import { getFilms } from "./connections/GhibliApi";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getFilms();
  }, []);
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutPage />
      <FilmographyPage />
    </div>
  );
}

export default App;
