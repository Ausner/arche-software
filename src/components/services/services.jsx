import css from "./services.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import WIP from "../../assets/WIP.png";

const Services = () => {
    return (
        <>
            <div className="gradient">
                <Header />
                <div className={css.container}>
                    <h1>Services component goes here!</h1>
                    <img src={WIP} width={300} height={300}/>
                </div>
            </div>
            <Footer />   
        </>

    )
}

export default Services;