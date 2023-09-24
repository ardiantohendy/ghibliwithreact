import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoToHome from "./pages/GoToHome";
import GoToAbout from "./pages/GoToAbout";
import GoToFilm from "./pages/GoToFilm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoToHome />} />
        <Route path="/about" element={<GoToAbout />} />
        <Route path="/filmography" element={<GoToFilm />} />
      </Routes>
    </Router>
  );
}

export default App;
