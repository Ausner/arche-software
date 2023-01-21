import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/main-portal/main-portal";
import Slider from "./components/slider/slider";
import Testimonials from "./components/testimonials/testimonials";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Slider></Slider>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default App;
