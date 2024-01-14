'use client'
import React from 'react';
import ifYouData from '../../Data/ifyou-data.json';
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import Fimage1 from '../../../public/assets/images/if1.png'
import Fimage2 from '../../../public/assets/images/if2.png'
import Fimage3 from '../../../public/assets/images/if3.png'
import Fimage4 from '../../../public/assets/images/if4.png'

function IfYou(props) {
    const {
        heading,
        relaxMessage,
        features,
        figures,
        button
    } = ifYouData;
    return (
        <>
            <section id="if-you-section">
                <div className="container pt-[8.5rem]">
                    <h2 className="text-3xl md:text-[3.5rem] font-semibold">{heading}</h2>
                    <h1 className="text-3xl md:text-[3.5rem] mt-2 md:mt-10 font-semibold text-primary leading-[60px] xl:leading-10">
                        <Typewriter
                            options={{
                                strings: [
                                    "Difficulty in Sourcing Properties",
                                    "Complex Development Processes",
                                    "Market Analysis Overload",
                                    "Budget and Time Overruns",
                                    "Council Compliance Issues",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 mt-[5rem]">
                        <div className="col lg:col-span-3">
                            <h1 className="text-3xl md:text-4xl font-semibold">
                                {relaxMessage}
                            </h1>
                            <h1 className="text-3xl md:text-[3.5rem] font-semibold leading-[70px]">
                                We are <span className="text-primary">here for you...</span>
                            </h1>

                            <div className="mt-5 space-y-4">
                                {features.map((item, index) => (
                                    <p key={index} className="gap-1 flex text-[#0A181F] text-opacity-80">
                                        <IoIosCheckmarkCircleOutline size={20} className="text-primary"/>
                                        {item}
                                    </p>
                                ))}
                            </div>

                            <div className="figures space-y-6 sm:space-y-0 md:space-y-1 xl:space-y-0 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 gap-2 mt-10">
                                {figures.map((figure, index) => (
                                    <div key={index}>
                                        <h1 className="text-4xl font-semibold">
                                            {figure.figureNumber}
                                        </h1>

                                        <p className="mt-2">
                                            {figure.figureDes}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <button
                                className="mt-10 button bg-primary text-md rounded-full text-black hover:text-white transition font-semibold py-3 px-6">
                                {button}
                            </button>
                        </div>

                        <div className="col lg:col-span-2">
                            <div className="grid grid-cols-2 gap-2">
                                <Image src={Fimage1} className="w-full h-[260px]" alt="Fimage1"/>
                                <Image src={Fimage2} className="w-full h-[260px]" alt="Fimage2"/>
                            </div>

                            <div className="flex gap-4 mt-4">
                                <Image src={Fimage3} className="h-full lg:-ml-20" alt="Fimage3"/>
                                <Image src={Fimage4} className="" alt="Fimage4"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default IfYou;