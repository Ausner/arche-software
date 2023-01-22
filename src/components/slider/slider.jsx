import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Navigation } from "swiper";


//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./slider.css";


import {SliderProducts} from '../../data/products';

export const Slider = () => {

    console.log(SliderProducts)


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
                                    {slide.name}
                                    <br/>
                                    {slide.detail}
                                </span>
                            </div>

                            <span>{slide.price}</span>
                            {/* <div>Apply</div> */}
                            <button>Apply</button>
                        </div>

                        <img src={slide.img} alt="product" className="img-p"/>
                    </SwiperSlide>     
                ))}
            </Swiper>
        </div>
    )
}


export default Slider;