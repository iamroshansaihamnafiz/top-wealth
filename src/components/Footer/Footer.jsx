import React from 'react';
import FlOgo from '../../../public/assets/images/footer-logo.png';
import Image from "next/image";
import {IoLogoInstagram} from "react-icons/io5";
import {BsWhatsapp} from "react-icons/bs";
import {AiOutlineFacebook} from "react-icons/ai";
import {SlSocialYoutube} from "react-icons/sl";
import Link from "next/link";
import footerData from "../../Data/footer-data.json";

function Footer(props) {
    const {
        logo,
        companyDescription,
        email,
        siteMap,
        location,
        Rtext,
        button,
        copyrightText,
        copyrightPolicies
    } = footerData;
    return (
        <>
            <footer id="footer-section" className="bg-black mt-16 text-white pt-16 pb-4 text-[15px]">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-11 gap-8">
                        <div className="col xl:col-span-3">
                            <Image src={logo} width={100} height={100} alt="FlOgo"/>
                            <p className="mt-4 text-[14px]">
                                {companyDescription}
                            </p>
                            <div className="flex items-center gap-2 mt-3">
                                <div
                                    className="icon bg-primary p-2 rounded-full cursor-pointer text-black hover:text-white">
                                    <IoLogoInstagram/>
                                </div>
                                <div
                                    className="icon bg-primary p-2 rounded-full cursor-pointer text-black hover:text-white">
                                    <BsWhatsapp/>
                                </div>
                                <div
                                    className="icon bg-primary p-2 rounded-full cursor-pointer text-black hover:text-white">
                                    <AiOutlineFacebook/>
                                </div>
                                <div
                                    className="icon bg-primary p-2 rounded-full cursor-pointer text-black hover:text-white">
                                    <SlSocialYoutube/>
                                </div>
                            </div>
                            <p className="mt-4 text-[14px] underline cursor-pointer">
                                {email}
                            </p>
                        </div>
                        <div className="col xl:col-span-2">
                            <h4 className="text-md">Site map</h4>
                            <ul className="mt-5 space-y-2">
                                {siteMap.map((item, index) => (
                                    <li key={index} className="space-y-2">
                                        <Link href="/" className="block text-white hover:text-primary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col xl:col-span-3">
                            <h4 className="text-md">Location</h4>
                            <p className="mt-5">
                                {location}
                            </p>
                        </div>
                        <div className="col xl:col-span-3">
                            <p className="mt-0">
                                {Rtext}
                            </p>
                            <button
                                className="py-3 px-6 font-semibold text-[14px] bg-primary text-black hover:text-white rounded-full mt-5">
                                {button}
                            </button>
                        </div>
                    </div>

                    <div
                        className="copyright-section mt-10 border-t-2 border-gray-800 block lg:flex items-center justify-between">
                        <p className="pt-4 text-[14px]">
                            {copyrightText}
                        </p>
                        <ul>

                            <li className="pt-4 text-[14px] flex items-center gap-4">
                                {copyrightPolicies.map((item, index) => (
                                    <Link key={index} href="#" className="text-white hover:text-primary">
                                        {item}
                                    </Link>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;