import React from 'react';
import WhyChooseData from '../../Data/why-choose-data.json';
import Image from "next/image";
import {GoArrowDownRight} from "react-icons/go";

function WhyChoose(props) {
    const {
        title, colorTitle, benefits
    } = WhyChooseData;
    return (
        <>
            <section id="why-choose-section">
                <div className="container pt-16">
                    <h1 className="text-3xl md:text-4xl font-semibold text-center">
                        {title} <span className="text-primary">{colorTitle}</span>
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="group col relative cursor-pointer border border-gray-300 rounded-xl py-6 px-4">
                                <Image src={benefit.benefitImage} width={60} height={100} alt="benefitImage"/>
                                <h4 className="mt-3 font-semibold">{benefit.title}</h4>
                                <p className="mt-2 font-normal text-[14px]">
                                    {benefit.description}
                                </p>
                                <div className="icon mt-4 flex items-center absolute right-4 bottom-4">
                                    <GoArrowDownRight className="transition duration-300 w-[35px] h-[35px] border border-gray-300 rounded-full p-2 group-hover:bg-primary group-hover:text-white text-primary"/>
                                </div>
                                <div className="py-6"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhyChoose;