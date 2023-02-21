import React, {useState} from 'react'
import css from "./testimonials.module.css";
import Hero from "../../assets/hero1.png";
import { TestimonialsData } from "../../data/testimonials";
import {useTranslation} from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewModal from '../review-modal/review-modal';

export default function Testimonials() {
    const [t, i18n] = useTranslation("global");
    const [opened, setOpened] = useState(false);
    const [dataModal, setDataModal] = useState({});

  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
            <div className={css.container}>
                <span>{t("testimonials.title")}</span>
                <span>
                {t("testimonials.subtitle-1")}
                </span>
            </div>
        

            <img src={Hero} alt="" />

            <div className={css.container}>
                <span>100k</span>
                <span>
                {t("testimonials.subtitle-2")}
                </span>
            </div>
        </div>

        <div className={css.reviews}>{t("testimonials.reviews")}</div>

        <div className={css.carousel}>
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className={css.tCarousel}
            breakpoints={{
                856: {slidesPerView: 3},
                640: {slidesPerView: 2},
                0: {slidesPerView: 1},
            }}
            >
                {TestimonialsData.map((testimonial, i) => (
                    <SwiperSlide className={css.card}>
                        <div className={css.testimonial}>
                            <img src={testimonial.image} alt=""/>
                            <span>{testimonial.comment}</span>
                            <hr/>
                            <span>{testimonial.name}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <button className='btn' onClick={() => setOpened(true)}> {t("testimonials.button-text")} </button>
        <ReviewModal style={{marginTop: '10px'}} opened={opened} setOpened = {setOpened}/>
    </div>
  )
}
