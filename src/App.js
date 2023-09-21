import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import FilmographyPage from "./components/FilmographyPage";

function App() {
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
