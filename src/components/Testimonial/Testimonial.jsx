'use client';
import React from 'react';
import TestimonialData from '../../Data/testimonial-data.json';
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from "react-icons/io";
import Image from "next/image";
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import Swiper core and required modules
import {Navigation} from 'swiper/modules';

function Testimonial(props) {
    const {
        title, colorTitle, testimonials
    } = TestimonialData;
    return (
        <>
            <section id="testimonial-section">
                <div className="full mt-20 py-28 bg-gray-100">
                    <div className="container">
                        <div className="head flex items-center justify-between">
                            <h1 className="text-3xl md:text-4xl font-semibold">
                                {title} <span className="text-primary">{colorTitle}</span> <br/>
                                Are Saying
                            </h1>

                            <div className="icons flex items-center gap-4">
                                <div
                                    className="button-prev-slide one border border-black cursor-pointer hover:border-primary hover:text-primary p-2 rounded-full">
                                    <IoIosArrowRoundBack size={25}/>
                                </div>

                                <div
                                    className="button-next-slide two border border-black cursor-pointer hover:border-primary hover:text-primary p-2 rounded-full">
                                    <IoIosArrowRoundForward size={25}/>
                                </div>
                            </div>
                        </div>

                        <div className="mt-14">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={3}
                                navigation={{
                                    nextEl: ".button-next-slide",
                                    prevEl: ".button-prev-slide",
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    400: {
                                        slidesPerView: 1,
                                    },
                                    639: {
                                        slidesPerView: 1,
                                    },
                                    865: {
                                        slidesPerView: 2
                                    },
                                    1000: {
                                        slidesPerView: 3
                                    },
                                    1500: {
                                        slidesPerView: 3
                                    },
                                    1700: {
                                        slidesPerView: 3
                                    }
                                }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="col h-[230px] relative cursor-pointer bg-white rounded-xl py-6 px-4">
                                            <p className="mt-2 font-[500] text-[14px]">
                                                {testimonial.description}
                                            </p>
                                            {/*<div className="py-8"></div>*/}
                                            <div
                                                className="flex w-full absolute bottom-5 left-4 items-center justify-between mt-6">
                                                <div className="left flex gap-3 items-center">
                                                    <Image src={testimonial.tImage} width={40} height={100}
                                                           alt="tImage"/>
                                                    <h4 className="font-semibold">
                                                        {testimonial.name}<br/>
                                                        <p className="mt-1 text-xs font-normal text-gray-500">
                                                            {testimonial.location}
                                                        </p>
                                                    </h4>
                                                </div>

                                                <div className="right mr-8">
                                                    <Image src={testimonial.tSVG} width={40} height={100}
                                                           alt="tSVG"/>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonial;