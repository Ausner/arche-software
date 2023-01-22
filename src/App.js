import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/main-portal/main-portal";
import Slider from "./components/slider/slider";
import Testimonials from "./components/testimonials/testimonials";
import Footer from "./components/footer/footer";
import MissionVission from "./components/mission-vission/mission-vission";
import Services from "./components/services/services";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <span className="gradient">
        <Header></Header>
        <Hero></Hero>
        <Slider></Slider>
        <MissionVission></MissionVission>
        <Services></Services>
        <Projects></Projects>
        <Contact></Contact>
        <Testimonials></Testimonials>
      </span>

      <Footer></Footer>
    </div>
  );
}

export default App;
