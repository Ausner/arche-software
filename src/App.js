import "./App.css";
import Services from "./components/services/services";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Home from "./components/home/home";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
          </Routes>
    </div>
  );
}

export default App;
