import css from "./products.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { ProjectsData } from "../../data/projects";

const Products = () => {
    return (
        <>
            <div className="gradient">
                <Header />
                <div className={css.container}>
                     <h3><b>Our Most Requested Products</b></h3>
                     <br/>
                     <div className={css.cards}>
                        {ProjectsData.map((project, index) => (
                            <div className={css.card}>
                                <h4>{project.name}</h4>
                                <br/>
                                <img src={project.img} alt="" width={100} height={100}/>
                            </div>
                        ))}
                     </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Products;