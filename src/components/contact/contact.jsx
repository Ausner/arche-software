import Header from "../header/header";
import Footer from "../footer/footer";
import css from "./contact.module.css";
import WIP from "../../assets/WIP.png";

const Contact = () => {
    return (
        <>
            <div className="gradient">
                <Header />
                <div className={css.container}>
                    <h1>Contact component goes here!</h1>
                    <img src={WIP} width={300} height={300}/>
                </div>
                
            </div>
            <Footer />
        </>


    )
}

export default Contact;