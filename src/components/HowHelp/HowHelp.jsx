import React from 'react';
import HowImage from '../../../public/assets/images/3icon.svg';
import Image from "next/image";
import HowHelpeData from "@/Data/how-help-data.json";

function HowHelp(props) {
    const {
        allInOnePackage,
        allInOneTitle,
        allInOnecolorTitle,
        description
    } = HowHelpeData;
    return (
        <>
            <section id="how-help-section">
                <div className="container pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-0 justify-center items-center">
                        <div className="col">
                            <Image src={HowImage} className="w-full md:w-96" alt="HowImage"/>
                        </div>
                        <div className="col">
                            <h2 className="text-xl md:text-2xl font-semibold">{allInOnePackage}</h2>
                            <h2 className="text-3xl md:text-4xl font-semibold">
                                {allInOneTitle}
                                <span className="text-primary"> {allInOnecolorTitle}</span>
                            </h2>
                            <p className="mt-4 text-[#151723] text-opacity-80">{description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
        ;
}

export default HowHelp;