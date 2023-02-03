import React from 'react';
import Logo from "../../assets/logo.png";
import ArcheLogo from '../../assets/ArcheLogo.png'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon
} from "@heroicons/react/outline"; //will be used in the future
import css from "./footer.module.css";


export default function Footer() {

    const actualYear = new Date().getFullYear();

  return (
    <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={ArcheLogo} alt=""/>
                <span>Arche Software</span>
            </div>
        

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact US</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>San José, Costa Rica</span>
                    </span>
                </div>
            </div>
        </div>
        <div className={css.copyRight}>
                <span>Copyright ©{ actualYear } by Arche Software.</span>
                <span>All rigths reserved.</span>
        </div>
    </div>
  )
}
