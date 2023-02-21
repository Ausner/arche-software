import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Navigation } from "swiper";
import {useTranslation} from 'react-i18next';


//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./slider.css";


import {SliderProducts} from '../../data/products';
import { useState } from "react";
import OfferModal from "../offer-modal./offer-modal";

export const Slider = () => {

    console.log(SliderProducts)
    const [opened, setOpened] = useState(false);
    const [dataModal, setDataModal] = useState({});
    const [t, i18n] = useTranslation("global");

    const handleModal = (data) => {
        setDataModal(data);
        console.log("modal ", dataModal)
        setOpened(true);
    }

    const returnName = (e) => {
        if (e === "Web Apps") {
            return t("slider.web-apps");
        } else if (e === "Desktop Apps") {
            return t("slider.desktop-apps");
        } else if (e === "Scripts") {
            return t("slider.scripts");
        }
    }

    const returnPrice = (e) => {
        if (e === "10% Off") {
            return t("slider.10-off");
        } else if (e === "15% Off") {
            return t("slider.15-off");
        } 
    }


    return (
        <div className="s-container">
            
            <Swiper 
            breakpoints={{
                640: {slidesPerView: 3},
                0: {slidesPerView: 1}
            }}

            modules={[Pagination, Navigation]}
            className="mySwiper"
            navigation={true}
            loopFillGroupWithBlank={true}
            slidesPerView={3} spaceBetween={40} slidesPerGroup={1} loop={true}>
                {SliderProducts.map((slide, i) => (
                    <SwiperSlide className="card">
                        <div className="left-s">
                            <div className="name">
                                <span>
                                    {returnName(slide.name)}
                                    <br/>

                                </span>
                            </div>

                            <span>{returnPrice(slide.price)}</span>
                            <button onClick={() => handleModal(slide)}>{t("slider.button-text")}</button>
                        </div>

                        <img src={slide.img} alt="product" className="img-p"/>
                    </SwiperSlide>     
                ))}

            </Swiper>
            <OfferModal style={{marginTop: '10px'}} opened={opened} setOpened = {setOpened} data={dataModal}/>

        </div>
    )
}


export default Slider;