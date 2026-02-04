import React from "react";
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdHome, MdRestaurantMenu, MdContactMail, MdLocationOn, MdLocalOffer, MdStar, MdPayment, MdInfo } from "react-icons/md";
import logo from "../assets/logo.png";

export default function Footer() {
    const TELEGRAM_LINK = "https://t.me/+998978908080";
    const INSTAGRAM_LINK = "https://instagram.com/zebrafood";
    const FACEBOOK_LINK = "https://facebook.com/zebrafood";
    const PHONE = "+998 97 890 80 80";
    const EMAIL = "info@zebrafood.uz";

    const navigationLinks = [
        { href: "#home", label: "Главная", icon: <MdHome className="w-4 h-4" /> },
        { href: "#menu", label: "Меню", icon: <MdRestaurantMenu className="w-4 h-4" /> },
        { href: "#about", label: "О нас", icon: <MdInfo className="w-4 h-4" /> },
        { href: "#contacts", label: "Контакты", icon: <MdContactMail className="w-4 h-4" /> },
    ];

    const serviceLinks = [
        { href: "#branches", label: "Наши филиалы", icon: <MdLocationOn className="w-4 h-4" /> },
        { href: "#offers", label: "Акции", icon: <MdLocalOffer className="w-4 h-4" /> },
        { href: "#review", label: "Отзывы", icon: <MdStar className="w-4 h-4" /> },
        { href: "#payment", label: "Способы оплаты", icon: <MdPayment className="w-4 h-4" /> },
    ];

    const branches = [
        { name: "Филиал Юнусабад", address: "ул. Боги Шамол, 12" },
        { name: "Филиал Чиланзар", address: "ул. Бунёдкор, 45" },
        { name: "Филиал Сергели", address: "Сергелийская дорога, 23" },
    ];

    const workingHours = [
        { day: "Пн - Пт", time: "09:00 - 23:00" },
        { day: "Сб - Вс", time: "10:00 - 00:00" },
    ];

    return (
        <footer className="bg-base-200 border-t border-base-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="Zebra Food logo" className="w-12 h-12" />
                            <span className="text-2xl font-black text-primary">Zebra Food</span>
                        </div>
                        <p className="text-sm opacity-70 leading-relaxed">
                            Zebra Food в Ташкенте — горячий, сочный street fast-food. Быстро готовим, качественные ингредиенты, HOT-DOG vibe.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex gap-2">
                            <a 
                                href={TELEGRAM_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-circle btn-sm btn-primary hover:btn-secondary transition-all"
                                aria-label="Telegram"
                            >
                                <FaTelegramPlane className="w-4 h-4" />
                            </a>
                            <a 
                                href={INSTAGRAM_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-circle btn-sm btn-primary hover:btn-secondary transition-all"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a 
                                href={FACEBOOK_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-circle btn-sm btn-primary hover:btn-secondary transition-all"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-primary">Навигация</h3>
                        <ul className="space-y-2">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <a 
                                        href={link.href}
                                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
                                    >
                                        <span className="opacity-50 group-hover:opacity-100 transition-opacity">
                                            {link.icon}
                                        </span>
                                        <span>{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-primary">Сервисы</h3>
                        <ul className="space-y-2">
                            {serviceLinks.map((link) => (
                                <li key={link.href}>
                                    <a 
                                        href={link.href}
                                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
                                    >
                                        <span className="opacity-50 group-hover:opacity-100 transition-opacity">
                                            {link.icon}
                                        </span>
                                        <span>{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Working Hours */}
                        <div className="pt-4 border-t border-base-300">
                            <h4 className="text-sm font-semibold mb-2">Режим работы</h4>
                            <ul className="space-y-1 text-sm opacity-70">
                                {workingHours.map((schedule, index) => (
                                    <li key={index} className="flex justify-between">
                                        <span>{schedule.day}:</span>
                                        <span className="font-semibold">{schedule.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info & Branches */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-primary">Контакты</h3>
                        
                        {/* Contact Details */}
                        <div className="space-y-3">
                            <a 
                                href={`tel:${PHONE.replace(/\s/g, '')}`}
                                className="flex items-center gap-3 text-sm hover:text-primary transition-colors group"
                            >
                                <div className="btn btn-circle btn-sm btn-ghost group-hover:btn-primary">
                                    <FaPhone className="w-3 h-3" />
                                </div>
                                <span>{PHONE}</span>
                            </a>
                            
                            <a 
                                href={`mailto:${EMAIL}`}
                                className="flex items-center gap-3 text-sm hover:text-primary transition-colors group"
                            >
                                <div className="btn btn-circle btn-sm btn-ghost group-hover:btn-primary">
                                    <FaEnvelope className="w-3 h-3" />
                                </div>
                                <span>{EMAIL}</span>
                            </a>
                        </div>

                        {/* Branches */}
                        <div className="pt-4 border-t border-base-300">
                            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                                <FaMapMarkerAlt className="text-primary" />
                                Наши филиалы
                            </h4>
                            <ul className="space-y-2 text-xs opacity-70">
                                {branches.map((branch, index) => (
                                    <li key={index}>
                                        <div className="font-semibold">{branch.name}</div>
                                        <div>{branch.address}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Special Offers Banner */}
                <div className="mt-8">
                    <div className="card bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border border-primary/30">
                        <div className="card-body p-6">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-bold mb-2">🔥 Подпишитесь на наши новости!</h3>
                                    <p className="text-sm opacity-80">
                                        Получайте эксклюзивные предложения и скидки первыми
                                    </p>
                                </div>
                                <div className="flex gap-2 flex-wrap justify-center">
                                    <a 
                                        href={TELEGRAM_LINK}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-primary"
                                    >
                                        <FaTelegramPlane className="w-5 h-5" />
                                        <span className="ml-2">Telegram</span>
                                    </a>
                                    <a 
                                        href={INSTAGRAM_LINK}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-secondary"
                                    >
                                        <FaInstagram className="w-5 h-5" />
                                        <span className="ml-2">Instagram</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-base-300 border-t border-base-content/10">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
                        <div className="text-center md:text-left">
                            © {new Date().getFullYear()} Zebra Food. Все права защищены.
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="#privacy" className="hover:text-primary transition-colors">
                                Политика конфиденциальности
                            </a>
                            <a href="#terms" className="hover:text-primary transition-colors">
                                Условия использования
                            </a>
                            <a href="#delivery" className="hover:text-primary transition-colors">
                                Доставка и оплата
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}