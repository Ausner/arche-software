import Header from "../header/header";
import Hero from "../main-portal/main-portal";
import Slider from "../slider/slider";
import Testimonials from "../testimonials/testimonials";
import Footer from "../footer/footer";
import MissionVision from "../mission-vission/mission-vision";
import Idea from "../idea/idea";

const Home = () => {
    return (
        <>
            <div className="gradient">
                <Header></Header>
                <Hero></Hero>
                <Slider></Slider>
                <MissionVision></MissionVision>
                <Idea></Idea>
                <Testimonials></Testimonials>
            </div>
          <Footer></Footer>
        </>
    )
}



export default Home;