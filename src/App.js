import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutPage />
    </div>
  );
}

export default App;
