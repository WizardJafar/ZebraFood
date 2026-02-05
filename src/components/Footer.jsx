import React from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  MdHome,
  MdRestaurantMenu,
  MdContactMail,
  MdLocationOn,
  MdInfo,
} from "react-icons/md";
import logo from "../assets/logo.png";

export default function Footer() {
  const TELEGRAM_LINK = "https://t.me/+998978908080";

  const PHONE = "+998 97 890 80 80";
  const PHONE_2 = "+998 77 266 03 30";

  const navigationLinks = [
    { href: "#home", label: "Главная", icon: <MdHome className="w-4 h-4" /> },
    { href: "#about", label: "О нас", icon: <MdInfo className="w-4 h-4" /> },
    { href: "#contacts", label: "Контакты", icon: <MdContactMail className="w-4 h-4" /> },
    { href: "#branches", label: "Наши филиалы", icon: <MdLocationOn className="w-4 h-4" /> },
  ];

  const branches = [
    { address: "улица Янгишахар, 10" },
    { address: "9-й квартал, 99, массив Юнусабад, Юнусабадский район" },
  ];

  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Zebra Food logo" className="w-12 h-12 rounded-xl" />
              <span className="text-2xl font-black text-primary">Zebra Food</span>
            </div>

            <p className="text-sm opacity-70 leading-relaxed">
              Zebra Food в Ташкенте — горячий, сочный street fast-food.
              Быстро готовим, качественные ингредиенты, HOT-DOG vibe.
            </p>

            {/* Telegram */}
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary rounded-xl"
            >
              <FaTelegramPlane className="w-4 h-4" />
              <span className="ml-2">Telegram</span>
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Навигация</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm hover:text-primary transition"
                  >
                    <span className="opacity-60">{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Контакты</h3>

            <p className="text-xs opacity-60">
              Нажмите на номер — звонок начнётся автоматически
            </p>

            <div className="space-y-3">
              {[PHONE, PHONE_2].map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 rounded-xl px-3 py-2
                             bg-base-100 border border-base-300
                             hover:border-primary hover:bg-base-100/80 transition"
                >
                  <div className="btn btn-circle btn-sm btn-primary">
                    <FaPhone className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{phone}</div>
                    <div className="text-xs opacity-60">Позвонить</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Branches */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Наши филиалы</h3>

            <ul className="space-y-2 text-sm opacity-80">
              {branches.map((branch, index) => (
                <li
                  key={index}
                  className="rounded-xl px-3 py-2 bg-base-100 border border-base-300"
                >
                  <FaMapMarkerAlt className="inline mr-2 text-primary" />
                  {branch.address}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-base-300 border-t border-base-content/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm opacity-70">
          © {new Date().getFullYear()} Zebra Food. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
