import css from "./products.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { ProjectsData } from "../../data/projects";
import {useTranslation} from 'react-i18next';

const Products = () => {
    const [t, i18n] = useTranslation("global");


    return (
        <>
            <div className="gradient">
                <Header />
                <div className={css.container}>
                     <h3><b>{t("products.title")}</b></h3>
                     <br/>
                     <div className={css.cards}>
                        {ProjectsData.map((project, index) => (
                            <div className={css.card}>
                                <h4>{t(`products.${project.name}`)}</h4>
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