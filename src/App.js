import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoToHome from "./pages/GoToHome";
import GoToAbout from "./pages/GoToAbout";
import GoToFilm from "./pages/GoToFilm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ghibliwithreact/" element={<GoToHome />} />
        <Route path="/ghibliwithreact/about/" element={<GoToAbout />} />
        <Route path="/ghibliwithreact/filmography/" element={<GoToFilm />} />
      </Routes>
    </Router>
  );
}

export default App;
