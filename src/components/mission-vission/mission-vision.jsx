import css from "./mission-vision.module.css";
import {useTranslation} from 'react-i18next';
import { useState, useEffect } from "react";

const MissionVision = ({lang}) => {

    const [t, i18n] = useTranslation("global");

    return(
        <div className={css.container}>
            <div className={css.mission}>
                    <h2>{t("mission-and-vision.mission-title")}</h2>
                    <span>{t("mission-and-vision.mission-desc")}</span>
                </div>
                <div className={css.vision}>
                    <h2>{t("mission-and-vision.vision-title")}</h2>
                    <span>{t("mission-and-vision.vision-desc")}</span>
                </div>
        </div>
    )

}

export default MissionVision;