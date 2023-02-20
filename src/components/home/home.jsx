import Header from "../header/header";
import Hero from "../main-portal/main-portal";
import Slider from "../slider/slider";
import Testimonials from "../testimonials/testimonials";
import Footer from "../footer/footer";
import MissionVision from "../mission-vission/mission-vision";
import Idea from "../idea/idea";
import { useEffect } from "react";

const Home = ({lang}) => {
    console.log('home: ', lang)


    useEffect(() => {
        console.log('use effect home: ', lang)
    }, [])


    return (
        <>
            <div className="gradient">
                <Header></Header>
                <Hero></Hero>
                <Slider></Slider>
                <MissionVision lang={lang}></MissionVision>
                <Idea></Idea>
                <Testimonials></Testimonials>
            </div>
          <Footer></Footer>
        </>
    )
}



export default Home;