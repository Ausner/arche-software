import css from "./idea.module.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useTranslation} from 'react-i18next';

const Idea = () => {
    const notify = () => toast.success("Email sent!");
    const [t, i18n] = useTranslation("global");

    const [FormData, setFormData] = useState({email:''});

    const config = {
        headers:{
          apikey: 'bd2b0432-6e52-4ccd-9111-41de88c9e476',
        }
    };

    const handleInput = (e) => {
        setFormData({...FormData, [e.target.name]: e.target.value});
    }

    const handleSend = (e) => {
        e.preventDefault();

        axios.post('https://arche-software-backend.vercel.app/api/emails/idea', FormData, config)
        .then(function (response) {
            notify();
            setFormData({email:''});
        })
        .catch(function (error) {
          console.error("ERROR: ", error);
        });
    
    }

    return (
        <div className={css.container}>
            <h2>{t("idea.title")}</h2>
            <span>{t("idea.subtitle")}</span>

            <form action="" onSubmit={handleSend}>
                <input type="email" className={css.input} id="email" name="email" value={FormData.email} placeholder="example@test.com" autocomplete="off" onChange={handleInput}/>
                <input className={css.buttonSubmit} value={t("idea.button-text")} type="submit"/>
                <ToastContainer />
            </form>
        </div>        

    )
}

export default Idea;