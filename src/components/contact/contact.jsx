import {useState} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import css from "./contact.module.css";
import WIP from "../../assets/WIP.png";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

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
                    {/* <h1>Contact component goes here!</h1>
                    <img src={WIP} width={300} height={300}/> */}


                    <form action="" onSubmit={handleSend} className={css.formContainer}>
                        <span>Please fill the following form</span>
                        <input onChange={handleInput} type="text" name="name" value={FormData.name} required placeholder="     Name"/>
                        <input onChange={handleInput} type="email" name="email" value={FormData.email} required placeholder="     Email"/>
                        <input onChange={handleInput} type="text" name="phone" value={FormData.phone} required placeholder="     Phone Number"/>
                        <textarea onChange={handleInput} name="message" rows={3} value={FormData.message} required placeholder="   Message"></textarea>
                        <button  className="btn" type="submit">
                            Send
                        </button>
                        <ToastContainer />
                    </form>

                    <p>We will contact you as soon as possible!</p>

                </div>
            </div>
            <Footer />
        </>


    )
}

export default Contact;