import {useState} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import css from "./contact.module.css";
import WIP from "../../assets/WIP.png";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useTranslation} from 'react-i18next';
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const Contact = () => {
    const params = useParams();

    console.log(params)
    const [t, i18n] = useTranslation("global");

    const notify = () => toast.success("Email sent!");
    const [FormData, setFormData] = useState({name:'', email:'', phone:'', message:''})
    const config = {
        headers:{
          apikey: 'bd2b0432-6e52-4ccd-9111-41de88c9e476',
        }
    };
  

    const handleInput = (e) => {
        console.log(e)
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

    useEffect(() => {

        if (params.message) {
            switch (params.message) {
                case 'web-sites':
                    if (i18n.language === 'es') {
                        setFormData({...FormData, ['message']: 'Quiero realizar una página web. Me gustaría más información al respecto.'});
                    } else {
                        setFormData({...FormData, ['message']: 'I want to make a web page. I would like more information about it.'});
                    }
                    break;
                case 'mobile-apps':
                    if (i18n.language === 'es') {
                        setFormData({...FormData, ['message']: 'Quiero realizar una aplicación móvil. Me gustaría más información al respecto.'});
                    } else {
                        setFormData({...FormData, ['message']: 'I want to make a mobile app. I would like more information about it.'});
                    }
                    break;
                case 'custom-systems':
                    if (i18n.language === 'es') {
                        setFormData({...FormData, ['message']: 'Quiero realizar un sistema personalizado. Me gustaría más información al respecto.'});
                    } else {
                        setFormData({...FormData, ['message']: 'I want to make a custom system. I would like more information about it.'});
                    }
                    break;
                case 'web-chat':
                    if (i18n.language === 'es') {
                        setFormData({...FormData, ['message']: 'Quiero realizar un chat web. Me gustaría más información al respecto.'});
                    } else {
                        setFormData({...FormData, ['message']: 'I want to make a web chat. I would like more information about it.'});
                    }
                    break;
                case 'delivery-app':
                    if (i18n.language === 'es') {
                        setFormData({...FormData, ['message']: 'Quiero realizar una aplicación de entregas / Pedidos. Me gustaría más información al respecto.'});
                    } else {
                        setFormData({...FormData, ['message']: 'I want to make a delivery app. I would like more information about it.'});
                    }
                    break;
                case 'car-rental':
                    if (i18n.language === 'es') {
                        setFormData({...FormData, ['message']: 'Quiero realizar una aplicación para renta de carros. Me gustaría más información al respecto.'});
                    } else {
                        setFormData({...FormData, ['message']: 'I want to make a car rental app. I would like more information about it.'});
                    }
                    break;                
                case 'databases':
                    if (i18n.language === 'es') {
                        setFormData({...FormData, ['message']: 'Quiero realizar una base de datos. Me gustaría más información al respecto.'});
                    } else {
                        setFormData({...FormData, ['message']: 'I want to make a database. I would like more information about it.'});
                    }
                    break;
            }
        }
    }, [params])


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