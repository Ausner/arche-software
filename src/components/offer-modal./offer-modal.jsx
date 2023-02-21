import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

import './offer-modal.css'

export default function OfferModal({ opened, setOpened, data }) {

    const theme = useMantineTheme();
    const [FormData, setFormData] = useState({})
    const [t, i18n] = useTranslation("global");


    const handleInput = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

    }

    console.log("data from modal ", data)

    return (
        <Modal overlayColor={theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={opened}
            onClose={() => setOpened(null)}
            style={{marginTop: '40px'}}
        >
            {/* modal content */}
            <form action="">
                    <span className="card__title">{t("offer.title")}</span>
                    <p className="card__content">{t("offer.description")}</p>
                    <div className="card__form">
                        <input placeholder={t("offer.placeholder")} type="text"></input>
                        <button className="sign-up">{t("offer.button-text")}</button>
                    </div>
            </form>



        </Modal>
    )
}