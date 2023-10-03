import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoToHome from "./pages/GoToHome";
import GoToAbout from "./pages/GoToAbout";
import GoToFilm from "./pages/GoToFilm";
import FilmographyPage from "./components/FilmographyPage";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<GoToHome />} />
    //     <Route path="/about" element={<GoToAbout />} />
    //     <Route path="/filmography" element={<GoToFilm />} />
    //   </Routes>
    // </Router>
    <FilmographyPage />
  );
}

export default App;
