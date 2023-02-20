import React, { useState } from "react";
import css from "./header.module.css";
import Logo from "../../assets/logo.png";
import ArcheLogo from "../../assets/ArcheLogo.png";
import {CgShoppingBag} from "react-icons/cg";
import {GoThreeBars} from "react-icons/go";
import { Link } from "react-router-dom";
import {useTranslation} from 'react-i18next';
import { useEffect } from "react";


const Header = () => {

    const [t, i18n] = useTranslation("global");
    const [language, setLanguage] = useState("es");
    const [ShowMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu(ShowMenu => !ShowMenu);
    }

    useEffect(() => {
        setLanguage(i18n.language);
    }, [i18n])

    const changeLang = () => {
        console.log('i18n.language: ', i18n.language)
        if (i18n.language === 'es') {
            setLanguage('en');
            i18n.changeLanguage('en')

        } else {
            setLanguage('es');
            i18n.changeLanguage('es')

        }
    }


    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={ArcheLogo} alt=""/>
                <Link to={"/"}>
                    <span>Arche Software</span>
                </Link>
            </div>

            <div className={css.right}>

                <div className={css.bars} onClick={toggleMenu}>
                    <GoThreeBars/>
                </div>
                    <ul className={css.menu} style={{display:ShowMenu ? 'inherit' : 'none'}}>
                            <li> <Link to={"/products"}>{t("header.products-link")}</Link></li>
                            <li> <Link to={"/contact"}>{t("header.contact-link")}</Link></li>
                            <li onClick={changeLang}>{language.toUpperCase()}</li>
                    </ul>
                
            </div>
        </div>
    )
}

export default Header;