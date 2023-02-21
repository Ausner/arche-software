import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import './review-modal.css'

export default function ReviewModal({ opened, setOpened }) {

    const theme = useMantineTheme();
    const [FormData, setFormData] = useState({name:'', email:'', comment:''})
    const [t, i18n] = useTranslation("global");

    const config = {
        headers:{
          apikey: 'bd2b0432-6e52-4ccd-9111-41de88c9e476',
        }
    };
    const handleInput = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    }

    const notify = () => toast.success("Review sent!");


    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post('https://arche-software-backend.vercel.app/api/reviews', FormData, config)
        .then(function (response) {
            notify();
            setFormData({name:'', email:'', comment:''});
            setOpened(false);
        })
        .catch(function (error) {
          console.error("ERROR: ", error);
        });

    }

    return (
        <Modal overlayColor={theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={opened}
            onClose={() => setOpened(null)}
            style={{ marginTop: '40px' }}
        >


            <div class="form-container">
                <p>{t("review.title")}</p>
                <form class="form" action="" onSubmit={handleSubmit}>
                    <label>{t("review.username")}</label>
                    <input required type="text" class="input" name="name" value={FormData.name} placeholder={t("review.username-placeholder")} onChange={handleInput}></input>
                    <label>{t("review.email")}</label>
                    <input required type="email" class="input" name="email" value={FormData.email} placeholder={t("review.email-placeholder")} onChange={handleInput}></input>
                    <label>{t("review.message")}</label>
                    <textarea required maxLength={100} style={{maxHeight:"60px", maxWidth: "100%", minWidth: "60px", minWidth: "100%"}} name="comment" value={FormData.comment} onChange={handleInput}></textarea>
                    <button type="submit">{t("review.button-text")}</button>
                </form>
            </div>
        </Modal>
    )
}