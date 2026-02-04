import React, { useState } from "react";
import { FaQuestionCircle, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { MdHome, MdRestaurantMenu, MdContactMail, MdLocationOn, MdLocalOffer, MdStar, MdPayment } from "react-icons/md";
import logo from "../assets/logo.png";
import InstagramReelFrame from "./ReactBits/InstagramReelFrame";

export default function Navbar() {
    const TELEGRAM_LINK = "https://t.me/+998978908080";

    const REELS = [
        "https://www.instagram.com/reel/DUFd7vaCIEZ/",
    ];

    const menuItems = [
        { href: "#home", label: "Главная", icon: <MdHome className="w-5 h-5" /> },
        { href: "#menu", label: "Меню", icon: <MdRestaurantMenu className="w-5 h-5" /> },
        { href: "#contacts", label: "Контакты", icon: <MdContactMail className="w-5 h-5" /> },
        { href: "#branches", label: "Наши филиалы", icon: <MdLocationOn className="w-5 h-5" /> },
    ]

    return (
        <div className="drawer">
            <input id="mobile-menu-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar fixed top-0 z-50 bg-base-100/50 backdrop-blur border-b border-base-300 px-2 sm:px-4">
                    <div className="flex-1 lg:w-[20%]">
                        <div className="flex items-center gap-2 sm:gap-3 font-black">
                            <img src={logo} alt="Zebra Food logo" className="w-8 h-8 sm:w-9 sm:h-9" />
                            <span className="text-base sm:text-lg">Zebra Food</span>
                        </div>
                    </div>

                    <div className="lg:w-[50%] hidden lg:flex justify-center">
                        <ul className="flex gap-5 font-semibold">
                            <li className="rounded-b-md py-2 px-3 hover:text-primary hover:border-b-2 hover:border-primary hover:shadow-primary hover:shadow-xl hover:transition-all">
                                <a href="#home">Главная</a>
                            </li>
                            <li className="rounded-b-md py-2 px-3 hover:text-primary hover:border-b-2 hover:border-primary hover:shadow-primary hover:shadow-xl hover:transition-all">
                                <a href="#contacts">Контакты</a>
                            </li>
                            <li className="rounded-b-md py-2 px-3 hover:text-primary hover:border-b-2 hover:border-primary hover:shadow-primary hover:shadow-xl hover:transition-all">
                                <a href="#about">О нас</a>
                            </li>
                            <li className="rounded-b-md py-2 px-3 hover:text-primary hover:border-b-2 hover:border-primary hover:shadow-primary hover:shadow-xl hover:transition-all">
                                <a href="#review">Оцените нас!</a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:w-[20%] flex-none flex justify-end items-center gap-1 sm:gap-2 md:gap-3">
                        <a
                            href={TELEGRAM_LINK}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-ghost btn-circle btn-sm sm:btn-md tooltip tooltip-left hover:btn-primary"
                            aria-label="Написать в Телеграмм"
                            data-tip="Написать в Телеграмм"
                        >
                            <FaTelegramPlane size={20} className="sm:w-6 sm:h-6" />
                        </a>
                        <a
                            href="#question"
                            rel="noreferrer"
                            className="btn btn-ghost btn-circle btn-sm sm:btn-md tooltip tooltip-left hover:btn-primary"
                            data-tip="Задайте вопрос"
                        >
                            <FaQuestionCircle size={20} className="sm:w-6 sm:h-6" />
                        </a>
                        <label
                            htmlFor="mobile-menu-drawer"
                            className="btn btn-ghost btn-circle btn-sm sm:btn-md lg:hidden drawer-button"
                            aria-label="Open menu"
                        >
                            <HiOutlineMenuAlt3 size={24} className="sm:w-7 sm:h-7" />
                        </label>
                    </div>
                </nav>

                {/* Main Content */}
                <header className="h-screen overflow-hidden">
                    <section id="home" className="relative h-[calc(100vh-64px)] md:h-[calc(100vh-72px)] mt-16 sm:mt-[72px]">
                        <div className="relative h-full max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-6 lg:gap-10 items-center pt-16 lg:pt-0">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                                    Хот-дог <span className="text-primary">Zebra Food</span>
                                </h1>

                                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg opacity-80 max-w-xl">
                                    Zebra Food в Ташкенте — горячий, сочный street fast-food. Быстро готовим,
                                    качественные ингредиенты, <span className="text-error font-bold">HOT-DOG</span> vibe.
                                </p>

                                <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                                    <button className="btn btn-primary btn-sm sm:btn-md md:btn-lg">Смотреть меню</button>
                                    <button className="btn btn-outline btn-sm sm:btn-md md:btn-lg">Hotdog day 🔥</button>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-full border-primary border-2 shadow-2xl shadow-primary flex justify-center p-4 sm:p-6 lg:p-8">
                                    <img src={logo} alt="Zebra Food logo" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </section>
                </header>
            </div>

            {/* DaisyUI Drawer Side */}
            <div className="drawer-side z-[60]">
                <label htmlFor="mobile-menu-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

                <div className="menu min-h-screen w-80 sm:w-96 bg-base-200 text-base-content p-0">

                    {/* Header with Close Button */}
                    <div className="sticky top-0 z-10 bg-base-200 border-b border-base-300 p-4 flex justify-end">
                        <label
                            htmlFor="mobile-menu-drawer"
                            className="btn btn-ghost btn-circle hover:btn-error hover:rotate-90 transition-all duration-300"
                            aria-label="Close menu"
                        >
                            <HiX className="w-7 h-7" />
                        </label>
                    </div>

                    {/* Menu Content */}
                    <div className="p-6 pb-20 space-y-6 overflow-y-auto">

                        {/* Brand Section */}
                        <div className="space-y-3">
                            <h1 className="text-4xl font-black text-primary">
                                Zebra Food
                            </h1>
                            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg opacity-80 max-w-xl">
                                Zebra Food в Ташкенте — горячий, сочный street fast-food. Быстро готовим,
                                качественные ингредиенты, <span className="text-error font-bold">HOT-DOG</span> vibe.
                            </p>
                        </div>

                        <div className="divider my-4"></div>

                        {/* Navigation Section */}
                        <div className="space-y-3">
                            <div className="text-xs font-bold uppercase tracking-wider text-primary opacity-70 px-2">
                                Навигация
                            </div>
                            <ul className="menu menu-lg bg-base-100 rounded-box shadow-lg p-2">
                                {menuItems.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            className="flex items-center gap-3 active:bg-primary active:text-primary-content"
                                        >
                                            <span className="text-primary">{item.icon}</span>
                                            <span className="font-semibold">{item.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
}