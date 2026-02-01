import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";
import InstagramReelFrame from "./ReactBits/InstagramReelFrame";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const TELEGRAM_LINK = "https://t.me/ZebraFoodBot";
  const REELS = ["https://www.instagram.com/reel/DUFd7vaCIEZ/"];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="sticky top-0 z-50 bg-base-100/80 backdrop-blur border-b border-base-300"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex h-16 sm:h-[72px] items-center justify-between">
            
            {/* LOGO */}
            <a
              href="#home"
              className="flex items-center gap-2 font-black tracking-tight"
            >
              <img
                src={logo}
                alt="Zebra Food hot-dog street food logo"
                className="w-8 h-8 sm:w-9 sm:h-9"
              />
              <span className="text-base sm:text-lg">
                Zebra <span className="text-primary">Food</span>
              </span>
            </a>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex menu menu-horizontal font-semibold gap-1">
              <li><a href="#home">Главная</a></li>
              <li><a href="#menu">Меню</a></li>
              <li><a href="#contacts">Контакты</a></li>
              <li><a href="#branches">Филиалы</a></li>
            </ul>

            {/* ACTIONS */}
            <div className="flex items-center gap-2">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="Написать в Телеграм"
                className="btn btn-ghost btn-circle"
              >
                <FaTelegramPlane size={22} />
              </a>

              <button
                className="btn btn-ghost btn-circle lg:hidden"
                aria-label="Open menu"
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
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />

          <aside className="absolute right-0 top-0 h-full w-[85vw] max-w-[320px] bg-base-100 p-4 shadow-2xl">
            <div className="flex justify-between items-center">
              <span className="font-black text-lg">Zebra Food</span>
              <button
                className="btn btn-ghost btn-circle"
                onClick={() => setMenuOpen(false)}
              >
                <HiX size={26} />
              </button>
            </div>

            <ul className="menu mt-4 text-base font-semibold">
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Главная</a></li>
              <li><a href="#menu" onClick={() => setMenuOpen(false)}>Меню</a></li>
              <li><a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a></li>
              <li><a href="#branches" onClick={() => setMenuOpen(false)}>Филиалы</a></li>
            </ul>

            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-full mt-6"
            >
              <FaTelegramPlane size={20} />
              <span className="ml-2">Написать в TG</span>
            </a>
          </aside>
        </div>
      )}

      {/* ================= HERO ================= */}
      <header id="home" className="overflow-hidden">
        <section className="min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)]">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-10 grid lg:grid-cols-2 gap-10 items-center">
            
            {/* TEXT */}
            <div>
              <h1 className="font-black leading-tight text-[clamp(28px,6vw,56px)]">
                Hot-Dog  
                <span className="block text-primary">
                  Zebra Food
                </span>
              </h1>

              <p className="mt-4 text-[clamp(14px,3.5vw,18px)] opacity-80 max-w-xl">
                Zebra Food — сочный street fast-food в Ташкенте.  
                Быстро, вкусно и по-настоящему  
                <span className="text-error font-bold"> HOT-DOG</span>.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#menu" className="btn btn-primary">
                  Смотреть меню
                </a>
                <button className="btn btn-outline">
                  Hotdog day 🔥
                </button>
              </div>
            </div>

            {/* REEL */}
            <div className="flex justify-center lg:justify-end">
              {REELS.map((url, i) => (
                <div key={i} className="w-[280px] sm:w-[320px] md:w-[360px]">
                  <InstagramReelFrame permalink={url} />
                </div>
              ))}
            </div>

          </div>
        </section>
      </header>
    </>
  );
}
