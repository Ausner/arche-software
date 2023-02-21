import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import './offer-modal.css'

export default function OfferModal({ opened, setOpened, data }) {

    const theme = useMantineTheme();
    const [FormData, setFormData] = useState({email:''})
    const [t, i18n] = useTranslation("global");
    const config = {
        headers:{
          apikey: 'bd2b0432-6e52-4ccd-9111-41de88c9e476',
        }
    };

    const handleInput = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    }


    const notify = () => toast.success("Request sent!");

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('https://arche-software-backend.vercel.app/api/emails/offer', {FormData, data}, config)
        .then(function (response) {
            notify();
            setFormData({email:''});
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
            style={{marginTop: '40px'}}
        >
            {/* modal content */}
            <form action=""  onSubmit={handleSubmit}>
                    <span className="card__title">{t("offer.title")}</span>
                    <p className="card__content">{t("offer.description")}</p>
                    <div className="card__form">
                        <input placeholder={t("offer.placeholder")} type="email" name="email" value={FormData.email} required onChange={handleInput}></input>
                        <button className="sign-up">{t("offer.button-text")}</button>
                    </div>
            </form>



        </Modal>
    )
}