import React, { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";
import InstagramReelFrame from "./ReactBits/InstagramReelFrame";

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const TELEGRAM_LINK = "https://t.me/ZebraFoodBot";



    const REELS = [
        "https://www.instagram.com/reel/DUFd7vaCIEZ/",
    ];

    return (
        <div className="drawer">
            <input
                id="zf-drawer"
                type="checkbox"
                className="drawer-toggle"
                checked={drawerOpen}
                onChange={(e) => setDrawerOpen(e.target.checked)}
            />

            <div className="drawer-content">
                <header className="h-screen overflow-hidden">
                    <nav className="navbar flex justify-between sticky top-0 z-50 bg-base-100/50 backdrop-blur border-b border-base-300 px-4">
                        <div className="flex-1 w-[20%]">
                            <div className="flex items-center gap-3 font-black">
                                <img src={logo} alt="Zebra Food logo" className="w-9 h-9" />
                                <span className="text-lg">Zebra Food</span>
                            </div>
                        </div>

                        <div className="w-[50%] hidden lg:flex flex- justify-center ">
                            <ul className="menu menu-horizontal gap-2 font-semibold">
                                <li><a href="#home">Главная</a></li>
                                <li><a href="#menu">Меню</a></li>
                                <li><a href="#contacts">Контакты</a></li>
                                <li><a href="#branches">Наши филиалы</a></li>
                            </ul>
                        </div>

                        <div className="w-[20%]  flex-none  flex justify-end items-end gap-3">

                            <a
                                href={TELEGRAM_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-ghost btn-circle tooltip tooltip-left"
                                aria-label="Написать в Телеграмм"
                                title="Написать в Телеграмм"
                            >
                                <div className="tooltip-content ">
                                    <div className="animate- text-primary-400   font-black">Написать в Телеграмм</div>
                                </div>
                                <FaTelegramPlane size={24} />
                            </a>

                            <button
                                className="btn btn-ghost btn-circle lg:hidden"
                                onClick={() => setMenuOpen(true)}
                                aria-label="Open menu"
                                title="Menu"
                            >
                                <HiOutlineMenuAlt3 size={28} />
                            </button>
                        </div>

                        {menuOpen && (
                            <div className="fixed inset-0 z-[60]">
                                <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />

                                <aside className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-base-100 shadow-2xl border-l border-base-300 p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 font-black">
                                            <img src={logo} alt="Zebra Food logo" className="w-9 h-9" />
                                            <span className="text-lg">Zebra Food</span>
                                        </div>

                                        <button
                                            className="btn btn-ghost btn-circle"
                                            onClick={() => setMenuOpen(false)}
                                            aria-label="Close menu"
                                            title="Close"
                                        >
                                            <HiX size={28} />
                                        </button>
                                    </div>

                                    <ul className="menu mt-4 p-0 text-base font-semibold">
                                        <li><a href="#home" onClick={() => setMenuOpen(false)}>Главная</a></li>
                                        <li><a href="#menu" onClick={() => setMenuOpen(false)}>Меню</a></li>
                                        <li><a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a></li>
                                        <li><a href="#branches" onClick={() => setMenuOpen(false)}>Наши филиалы</a></li>
                                    </ul>

                                    <div className="mt-4">
                                        <a
                                            href={TELEGRAM_LINK}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-primary w-full"
                                        >
                                            <FaTelegramPlane size={22} />
                                            <span className="ml-2">Написать в TG</span>
                                        </a>
                                    </div>
                                </aside>
                            </div>
                        )}
                    </nav>


                    <section id="home" className="relative h-[calc(100vh-64px)] md:h-[calc(100vh-72px)]">
                        
                       

                        <div className="relative h-full max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-4xl md:text-5xl font-black leading-tight">
                                    Хот-дог <span className="text-primary">Zebra Food</span>
                                </h1>

                                <p className="mt-4 text-base md:text-lg opacity-80 max-w-xl">
                                    Zebra Food в Ташкенте — горячий, сочный street fast-food. Быстро готовим,
                                    качественные ингредиенты, <span className="text-error font-bold">HOT-DOG</span> vibe.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    <button className="btn btn-primary btn-md md:btn-lg">Смотреть меню</button>
                                    <button className="btn btn-outline btn-md md:btn-lg">Hotdog day 🔥</button>
                                </div>
                            </div>

                            <div className="relative w-full translate-y-20  -translate-x-6 flex justify-center lg:justify-end">
                                {REELS.map((url, i) => (
                                    <div className="w-[340px] md:w-[360px]">
                                        <InstagramReelFrame permalink={url} />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </section>
                </header>
            </div>


        </div>
    );
}
