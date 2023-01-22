import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/main-portal/main-portal";
import Slider from "./components/slider/slider";
import Testimonials from "./components/testimonials/testimonials";
import Footer from "./components/footer/footer";
import MissionVision from "./components/mission-vission/mission-vision";
import Services from "./components/services/services";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Idea from "./components/idea/idea";

function App() {
  return (
    <div className="App">
      <span className="gradient">
        <Header></Header>
        <Hero></Hero>
        <Slider></Slider>
        <MissionVision></MissionVision>
        {/* <Services></Services>
        <Projects></Projects>
        <Contact></Contact> */}
        <Idea></Idea>
        <Testimonials></Testimonials>
      </span>

      <Footer></Footer>
    </div>
  );
}

export default App;
