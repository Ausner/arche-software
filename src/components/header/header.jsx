import React, { useState } from "react";
import css from "./header.module.css";
import Logo from "../../assets/logo.png";
import {CgShoppingBag} from "react-icons/cg";
import {GoThreeBars} from "react-icons/go";

const Header = () => {

    const [ShowMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu(ShowMenu => !ShowMenu);
    }


    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt=""/>
                <span>Arche Software</span>
            </div>

            <div className={css.right}>

                <div className={css.bars} onClick={toggleMenu}>
                    <GoThreeBars/>
                </div>
                    <ul className={css.menu} style={{display:ShowMenu ? 'inherit' : 'none'}}>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                

                <input type="text" className={css.search} placeholder="Search"/>

                <CgShoppingBag className={css.cart} />
            </div>
        </div>
    )
}

export default Header;