import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

import './review-modal.css'

export default function ReviewModal({ opened, setOpened }) {

    const theme = useMantineTheme();
    const [FormData, setFormData] = useState({})
    const [t, i18n] = useTranslation("global");


    const handleInput = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

    }

    return (
        <Modal overlayColor={theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={opened}
            onClose={() => setOpened(null)}
            style={{ marginTop: '40px' }}
        >
            {/* modal content */}


            <div class="form-container">
                <p>{t("review.title")}</p>
                <form class="form">
                    <label>{t("review.username")}</label>
                    <input required type="text" class="input" placeholder={t("review.username-placeholder")}></input>
                    <label>{t("review.email")}</label>
                    <input required type="text" class="input" placeholder={t("review.email-placeholder")}></input>
                    <label>{t("review.message")}</label>
                    <textarea required maxLength={100} style={{maxHeight:"60px", maxWidth: "100%", minWidth: "60px", minWidth: "100%"}}></textarea>
                    <button>{t("review.button-text")}</button>
                </form>
            </div>
        </Modal>
    )
}