import React from "react";
import css from "./main-portal.module.css";
import HeroImg from "../../assets/main.png";
import ArcheLogo from "../../assets/ArcheLogo.png";
import {RiShoppingBagFill} from "react-icons/ri";
import {BsArrowRight} from "react-icons/bs";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";


const Hero = () => {

    const transition = {duration: 3, type: "spring"};

    return (
        <div className={css.container}>
            {/* Left side */}
            <div className={css.h_sides}>
                <span className={css.text1}>Technology products</span>

                <div className={css.text2}>
                    <span className={css.softwareDevelopment}>Software Development</span>
                    {" "}
                    <span>We build dreams into software</span>
                </div>
            </div>


            {/* middle side main image */}
            <div className={css.wrapper}>
                <motion.div
                initial={{bottom:"2rem"}}
                whileInView={{bottom:"0rem"}}
                className={css.blueCircle}
                transition={transition}
                ></motion.div>
                <motion.img 
                transition={transition}
                initial={{bottom:"-2rem"}}
                whileInView={{bottom:"0rem"}}
                src={HeroImg} alt="" width={600}/>


                <motion.div 
                transition={transition}
                initial={{right: "4%"}}
                whileInView={{right: "2%"}}
                className={css.cart2}>
                    <RiShoppingBagFill/>


                    <div className={css.signup}>
                        <span>Let's work together!</span>

                        <Link to={"/contact"}>
                            <div>
                                <BsArrowRight/>
                            </div>
                        </Link>
                        
                    </div>
                </motion.div>
            </div>


            {/* Right Side */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>

                <div className={css.customers}>
                    <span>1.5m</span>
                    <span>Happy Customers</span>
                </div>
            </div>

        </div>
    )
}

export default Hero;