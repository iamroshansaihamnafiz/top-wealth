import React from 'react';
import OpprData from '../../Data/opprtunity-data.json';
import Link from "next/link";
import Image from "next/image";
import goBottomImage from '../../../public/assets/images/go-bottom.png';

function Opportunity(props) {
    const {
        locations,
        title,
        colorTitle,
        opportunities,
        opportunityList
    } = OpprData;
    return (
        <>
            <section id="opportunity-section">
                <div className="container pt-16">
                    <div className="location-list flex items-center justify-center">
                        <ul>
                            {locations.map((location, index) => (
                                <li key={index}>
                                    {location.loc}
                                </li>
                            ))}

                        </ul>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-semibold text-center mt-8">
                        {title} <span className="text-primary">{colorTitle}</span>
                    </h1>

                    <div className="opportunities mt-14 text-center">
                        {opportunities.map((opportunity, index) => (
                            <div key={index}>
                                <h4 className="text-2xl font-semibold">{opportunity.title}</h4>
                                <h4 className="text-[14px] mt-2 font-normal">{opportunity.subTitle}</h4>
                            </div>
                        ))}

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-8 mt-10">
                            {opportunityList.map((item, index) => (
                                <li key={index} className="list-none hover:text-primary transition cursor-pointer">
                                    <Link href="#" className="flex justify-center items-center">
                                        <Image src={item.lImage}
                                               width={70} height={100}
                                               alt=""/>
                                    </Link>
                                    <h4 className="text-lg mt-3 font-semibold">{item.lTitle}</h4>
                                </li>
                            ))}
                        </div>
                        <div className="go-bottom flex justify-center mt-8">
                            <Image src={goBottomImage} className="w-1/4" width={100} height={100} alt="goBottomImage"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Opportunity;