import css from "./products.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { ProjectsData } from "../../data/projects";
import { useTranslation } from 'react-i18next';
import Contact from "../contact/contact";
import { Link } from "react-router-dom";

const Products = () => {
    const [t, i18n] = useTranslation("global");


    return (
        <>
            <Header />
                <h3 style={{textAlign: 'center'}}><b>{t("products.title")}</b></h3>
                <div className={css.container}>
                    <br />
                    <div className={css.cards}>
                        {ProjectsData.map((project, index) => (
                            <Link to={`/contact/${project.name}`}>
                                <div className={css.card}>
                                    <h4>{t(`products.${project.name}`)}</h4>
                                    <br />
                                    <img src={project.img} alt="" width={100} height={100} />
                                </div>
                            </Link>

                        ))}

                    </div> 


                    
                </div>
               

            <Footer />
        </>

    )
}

export default Products;