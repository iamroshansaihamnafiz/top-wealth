import React from 'react';
import OutcomeData from '../../Data/outcome-data.json';
import {IoLocationOutline} from "react-icons/io5";
import OutImage1 from '../../../public/assets/images/out1.jpg';
import Image from "next/image";

function Outcome(props) {
    const {
        title,
        subTitle,
        outcomeList
    } = OutcomeData;
    return (
        <>
            <section id="outcome-section">
                <div className="full pt-10">
                    <div className="text-center">
                        <h4 className="text-2xl font-semibold">{title}</h4>
                        <h4 className="text-md text-[#151723] text-opacity-80 mt-2 font-normal">{subTitle}</h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-8 overflow-hidden">
                        {outcomeList.map((item, index) => (
                            <div key={index}
                                 className="col relative hover:scale-105 transition duration-500 cursor-pointer">
                                <Image src={item.OutImage} width={360} height={400} alt="OutImage1"
                                       className="w-full h-full object-cover"/>
                                <div className="absolute inset-0 bg-black opacity-30"></div>

                                <div className="content absolute left-5 bottom-5 text-white">
                                    <div className="flex items-center gap-1">
                                        <IoLocationOutline/>
                                        <div className="span">{item.location}</div>
                                    </div>
                                    <h4 className="mt-1 font-medium text-md">{item.type}</h4>
                                    <h5 className="mt-1 font-semibold">
                                        <span className="text-gray-200 font-normal">Bought at: </span>
                                        {item.boughtAt}
                                    </h5>
                                    <h5 className="mt-1 font-semibold">
                                        <span className="text-gray-200 font-normal">Now at: </span>
                                        {item.nowAt}
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Outcome;