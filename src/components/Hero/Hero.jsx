"use client"
import heroData from '../../Data/hero-data.json';
import Link from "next/link";

function Hero(props) {
    const {heroImage, title, titleTwo, subTitle, button} = heroData;
    return (
        <>
            <section id="hero-section" className="mt-0 md:-mt-20 lg:-mt-28 relative" style={{
                backgroundImage: `linear-gradient(0deg, rgb(45 44 45 / 33%), rgb(15 15 15 / 30%)),url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '90vh',
            }}>
                <div className="container pt-20">
                    <div className="text-center mt-20">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold">{title}</h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold">
                            <span className="text-primary">Property </span>
                            {titleTwo}
                        </h1>
                        <h4 className="text-sm text-white mt-4">{subTitle}</h4>
                        <button
                            className="mt-4 button bg-primary text-md rounded-full text-black hover:text-white transition font-semibold py-3 px-6">
                            {button}
                        </button>
                    </div>

                    {/* Scroll Down */}
                    <div id="only-scroll">
                        <span className="scroll-btn">
                            <div className="text-white">
                                <span className="mouse">
                                    <span>
                                    </span>
                                </span>
                            </div>
                            <p>SCROLL DOWN</p>
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;