import {useState} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import css from "./contact.module.css";
import WIP from "../../assets/WIP.png";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useTranslation} from 'react-i18next';


const Contact = () => {
    const [t, i18n] = useTranslation("global");

    const notify = () => toast.success("Email sent!");
    const [FormData, setFormData] = useState({name:'', email:'', phone:'', message:''})
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

        axios.post('https://arche-software-backend.vercel.app/api/emails', FormData, config)
        .then(function (response) {
            notify();
            setFormData({name:'', email:'', phone:'', message:''});
        })
        .catch(function (error) {
          console.error("ERROR: ", error);
        });
    
    }

    return (
        <>
            <div className="gradient">
                <Header />
                <div className={css.container}>
                    <form action="" onSubmit={handleSend} className={css.formContainer}>
                        <span>{t("contact.subtitle-1")}</span>
                        <input onChange={handleInput} type="text" name="name" value={FormData.name} required placeholder={"     " + t("contact.name")}/>
                        <input onChange={handleInput} type="email" name="email" value={FormData.email} required placeholder={"     " + t("contact.email")}/>
                        <input onChange={handleInput} type="text" name="phone" value={FormData.phone} required placeholder={"     " + t("contact.phone")}/>
                        <textarea onChange={handleInput} name="message" rows={3} value={FormData.message} required placeholder={"   " + t("contact.message")}></textarea>
                        <button  className={css.btn} type="submit">
                            {t("contact.button-text")}
                        </button>
                        <ToastContainer />
                    </form>

                    <p>{t("contact.subtitle-2")}</p>

                </div>
            </div>
            <Footer />
        </>


    )
}

export default Contact;