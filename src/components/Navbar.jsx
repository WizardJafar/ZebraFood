import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";
import InstagramReelFrame from "./ReactBits/InstagramReelFrame";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const TELEGRAM_LINK = "https://t.me/ZebraFoodBot";

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 sm:h-20 items-center justify-between text-white">

            {/* LOGO */}
            <a href="#home" className="flex items-center gap-2 font-black">
              <img src={logo} alt="Zebra Food logo" className="w-8 h-8" />
              <span>Zebra Food</span>
            </a>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex gap-6 font-semibold">
              <li><a href="#home">Главная</a></li>
              <li><a href="#menu">Меню</a></li>
              <li><a href="#contacts">Контакты</a></li>
              <li><a href="#branches">Филиалы</a></li>
            </ul>

            {/* ACTIONS */}
            <div className="flex items-center gap-3">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-circle text-white"
              >
                <FaTelegramPlane size={22} />
              </a>

              <button
                className="btn btn-ghost btn-circle lg:hidden text-white"
                onClick={() => setMenuOpen(true)}
              >
                <HiOutlineMenuAlt3 size={26} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMenuOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-80 bg-neutral-900 p-4">
            <div className="flex justify-between items-center font-black text-white">
              <span>Zebra Food</span>
              <button onClick={() => setMenuOpen(false)}>
                <HiX size={26} />
              </button>
            </div>

            <ul className="menu mt-6 font-semibold text-white">
              <li><a href="#home">Главная</a></li>
              <li><a href="#menu">Меню</a></li>
              <li><a href="#contacts">Контакты</a></li>
              <li><a href="#branches">Филиалы</a></li>
            </ul>
          </aside>
        </div>
      )}

      {/* ================= HERO (VIDEO / IMAGE FULLSCREEN) ================= */}
      <header id="home" className="relative w-full h-screen overflow-hidden">

        {/* Video / Image Background */}
        <InstagramReelFrame />

        {/* HERO CONTENT */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 text-white text-center sm:text-left">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Hot-Dog <br />
              <span className="text-primary">Zebra Food</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg opacity-90">
              Горячий street fast-food в Ташкенте. Быстро. Сочно. Настоящий <b>HOT-DOG</b>.
            </p>
            <div className="mt-6 flex gap-4 flex-wrap justify-center sm:justify-start">
              <button className="btn btn-primary btn-lg">Смотреть меню</button>
              <button className="btn btn-outline btn-lg text-white">Hotdog day 🔥</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
