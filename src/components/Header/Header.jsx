'use client';
import Link from "next/link";
import {AiOutlineClose} from "react-icons/ai";
import {HiOutlineBars3} from "react-icons/hi2";
import Image from "next/image";
import navbarData from '../../Data/navbar-data.json';

function Header(props) {
    // 👇️ Toggle class on click Show Menu Bar (Button)
    const ClickShowMenuBar = () => {
        const nav = document.getElementById('mobile_menu');
        if (nav) {
            nav.classList.add('show_menu');
        }
    };

    // 👇️ Toggle class on click Close Menu Bar (Button)
    const ClickCloseMenuBar = () => {
        const nav = document.getElementById('mobile_menu');
        if (nav) {
            nav.classList.remove('show_menu');
        }
    };

    const {logo, menu, button} = navbarData;
    return (
        <>
            {/* Header Section */}
            <section id="header-section" className="relative">
                <header className="py-6 md:py-4 bg-transparent w-full fixed md:relative z-50">
                    <div className="container flex items-center justify-between">
                        <div className="logo">
                            <Link href='/'>
                                <Image className="h-[38px]" width={100} height={100} src={logo} alt="Logo"/>
                            </Link>
                        </div>

                        <nav className="hidden lg:block overflow-hidden lg:overflow-visible">
                            <div className="container flex">
                                <div className="navbar-items flex items-center justify-between flex-grow pl-12">
                                    <div className="flex items-center space-x-10 capitalize">
                                        {menu.map((item, index) => (
                                            <li key={index} className="list-none">
                                                <Link href="/"
                                                      className="active text-white font-[500] hover:text-primary transition">{item}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </nav>

                        <div className="buttons hidden lg:flex items-center space-x-1">
                            <button
                                className="button border border-white rounded-full text-white py-2 px-4 hover:bg-primary hover:border-primary transition">
                                {button}
                            </button>
                        </div>

                        {/* Tab / Mobile Icons */}
                        <div className="lg:hidden tab-mobile flex items-center gap-2">
                            <div onClick={ClickShowMenuBar}
                                 className="w-8 text-center text-white hover:text-primary transition cursor-pointer">
                                <div className="text-2xl">
                                    <HiOutlineBars3/>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu */}
                <div id="mobile_menu" className="block lg:hidden bg-white z-50 overflow-hidden w-[300px] h-[100%]">
                    <div className="head flex items-center justify-between px-8 pt-8">
                        <div className="logo">
                            <Link href='/'>
                                <h1 className="font-semibold text-[20px]">Alliance <span
                                    className="text-primary">Exports</span></h1>
                            </Link>
                        </div>
                        <div onClick={ClickCloseMenuBar} className="icon text-xl cursor-pointer hover:text-primary">
                            <AiOutlineClose/>
                        </div>
                    </div>

                    <div className="navbar-wrapper pl-12 pt-8 space-y-5">
                        {menu.map((item, index) => (
                            <li key={index} className="list-none">
                                <Link href={`/${item.toLowerCase()}`}
                                      className="active font-[500] hover:text-primary transition">{item}</Link>
                            </li>
                        ))}

                        <div className="buttons flex lg:hidden items-center space-x-1">
                            <button className="button">
                                {button}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;