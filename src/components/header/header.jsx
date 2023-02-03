import React, { useState } from "react";
import css from "./header.module.css";
import Logo from "../../assets/logo.png";
import ArcheLogo from "../../assets/ArcheLogo.png";
import {CgShoppingBag} from "react-icons/cg";
import {GoThreeBars} from "react-icons/go";
import { Link } from "react-router-dom";

const Header = () => {

    const [ShowMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu(ShowMenu => !ShowMenu);
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
                            <li> <Link to={"/services"}>Services</Link></li>
                            <li> <Link to={"/projects"}>Projects</Link></li>
                            <li> <Link to={"/contact"}>Contact</Link></li>
                    </ul>
                

                <input type="text" className={css.search} placeholder="Search"/>

                <CgShoppingBag className={css.cart} />
            </div>
        </div>
    )
}

export default Header;