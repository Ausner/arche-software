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
import {useTranslation} from 'react-i18next';


export default function Footer() {
    const [t, i18n] = useTranslation("global");

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
                    <span>{t("footer.contact-us")}</span>
                    <span className={css.pngLine}>
                        <PhoneIcon className={css.icon}/>
                        <span>+506 8888 8888</span>
                    </span>
                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon}/>
                        <span>archesoftarecompany</span>
                    </span>
                </div>
            </div>
           
            <div className={css.block}>
                <div className={css.detail}>
                    <span>{t("location")}</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>San José, Costa Rica</span>
                    </span>
                </div>
            </div>
        </div>
        <div className={css.copyRight}>
                <span>Copyright ©{ actualYear } {t("footer.by")} Arche Software.</span>
                <span>{t("footer.rigths-reserved")}</span>
        </div>
    </div>
  )
}
