import React, { useMemo, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";
import CardSwap, { Card } from "./ReactBits/CardSwap";

export default function Navbar() {
  const [lang, setLang] = useState("uz");
  const [mobileOpen, setMobileOpen] = useState(false);

  const TELEGRAM_LINK = "https://t.me/ZebraFoodBot";

  const PRODUCTS = [
    { name: "Classic Hotdog", price: 15000, img: hotdogBase64_1, desc: "Kolbasa · sous · crispy" },
    { name: "Cheese Hotdog", price: 17000, img: hotdogBase64_2, desc: "Cheddar · sous · extra cheese" },
    { name: "Spicy Hotdog", price: 13000, img: hotdogBase64_3, desc: "Spicy sauce · jalapeño · crunchy" },
  ];

  const t = useMemo(() => {
    const dict = {
      uz: {
        home: "Home",
        menu: "Menu",
        contacts: "Contacts",
        branches: "Filiallar",
        order: "Buyurtma",
        title: "Hotdog",
        brand: "Zebra Food",
        desc1: "Toshkentdagi",
        desc2: " — issiq, shirali fast-food taomlar. Tez tayyor, sifatli ingredientlar,",
        vibe: "HOT-DOG",
        viewMenu: "Menu ko‘rish",
        hotdogDay: "Hotdog day 🔥",
        hit: "Zebra Food HITI",
        from: "Narx",
        sum: "so‘m",
      },
      ru: {
        home: "Главная",
        menu: "Меню",
        contacts: "Контакты",
        branches: "Филиалы",
        order: "Заказать",
        title: "Хот-дог",
        brand: "Zebra Food",
        desc1: "Zebra Food в Ташкенте",
        desc2: " — горячий, сочный street fast-food. Быстро готовим, качественные ингредиенты,",
        vibe: "HOT-DOG",
        viewMenu: "Смотреть меню",
        hotdogDay: "Hotdog day 🔥",
        hit: "ХИТ Zebra Food",
        from: "Цена",
        sum: "сум",
      },
      en: {
        home: "Home",
        menu: "Menu",
        contacts: "Contacts",
        branches: "Branches",
        order: "Order",
        title: "Hotdog",
        brand: "Zebra Food",
        desc1: "Zebra Food in Tashkent",
        desc2: " — hot, juicy street fast food. Fast cooking, quality ingredients,",
        vibe: "HOT-DOG",
        viewMenu: "View menu",
        hotdogDay: "Hotdog day 🔥",
        hit: "Zebra Food HIT",
        from: "Price",
        sum: "UZS",
      },
    };
    return dict[lang];
  }, [lang]);

  const linkBase =
    "px-4 py-2.5 rounded-2xl transition font-semibold text-base-content/80 hover:text-base-content hover:bg-base-200/70";
  const linkActive = "bg-base-200/90 text-base-content shadow-sm";

  const moneyLocale = lang === "uz" ? "uz-UZ" : lang === "en" ? "en-US" : "ru-RU";

  return (
    <header className="min-h-screen">
      {/* NAV (FULL WIDTH) */}
      <nav className="sticky top-0 z-50 w-full">
        <div className="w-full border-b border-base-300/70 bg-base-100/60 backdrop-blur-xl">
          <div className="w-full px-3 md:px-6">
            <div className="h-16 md:h-[72px] flex items-center justify-between gap-3">
              {/* LEFT */}
              <div className="flex items-center gap-3">
                <button
                  className="btn btn-ghost btn-circle md:hidden"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open menu"
                >
                  <HiOutlineMenuAlt3 size={26} />
                </button>

                <Link to="/" className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt="Zebra Food"
                    className="w-11 h-11 md:w-12 md:h-12 rounded-2xl object-cover border border-base-300/70"
                  />
                  <div className="leading-tight">
                    <div className="font-black tracking-tight text-lg md:text-xl">
                      Zebra<span className="text-primary">Food</span>
                    </div>
                    <div className="text-xs md:text-sm opacity-60 -mt-0.5">street fast-food</div>
                  </div>
                </Link>

                <span className="hidden lg:inline-flex badge badge-secondary badge-outline font-bold ml-2">
                  HOTDOG
                </span>
              </div>

              {/* CENTER (DESKTOP) */}
              <div className="hidden md:flex items-center">
                <div className="flex items-center gap-1 bg-base-200/50 border border-base-300/60 rounded-3xl p-1.5">
                  <a href="#home" className={linkBase}>
                    {t.home}
                  </a>

                  <NavLink
                    to="/menu"
                    className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
                  >
                    {t.menu}
                  </NavLink>

                  <a href="#contacts" className={linkBase}>
                    {t.contacts}
                  </a>
                  <a href="#branches" className={linkBase}>
                    {t.branches}
                  </a>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-2 md:gap-3">
                {/* Lang */}
                <div className="dropdown dropdown-end">
                  <button className="btn btn-ghost rounded-2xl border border-base-300/60 bg-base-200/40 h-11 min-h-0 px-4">
                    <span className="font-bold">{lang.toUpperCase()}</span>
                  </button>
                  <ul className="dropdown-content menu p-2 shadow-xl bg-base-100 rounded-2xl border border-base-300/70 w-28 mt-2">
                    <li>
                      <button onClick={() => setLang("uz")}>UZ</button>
                    </li>
                    <li>
                      <button onClick={() => setLang("ru")}>RU</button>
                    </li>
                    <li>
                      <button onClick={() => setLang("en")}>EN</button>
                    </li>
                  </ul>
                </div>

                {/* Telegram icon bigger */}
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-circle border border-base-300/60 bg-base-200/40"
                  aria-label="Telegram"
                  title="Telegram"
                >
                  <FaTelegramPlane size={22} />
                </a>

                {/* CTA */}
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary rounded-2xl h-11 min-h-0 px-5 md:px-6 gap-2"
                >
                  <FaTelegramPlane size={20} />
                  <span className="hidden sm:inline font-bold">{t.order}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[60] ${mobileOpen ? "" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={[
            "absolute left-0 top-0 h-full w-[82%] max-w-sm",
            "bg-base-100 border-r border-base-300/70 shadow-2xl",
            "transition-transform duration-200",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          <div className="p-4 flex items-center justify-between border-b border-base-300/70">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Zebra Food"
                className="w-11 h-11 rounded-2xl object-cover border border-base-300/70"
              />
              <div className="font-black text-xl">
                Zebra<span className="text-primary">Food</span>
              </div>
            </div>
            <button className="btn btn-ghost btn-circle" onClick={() => setMobileOpen(false)}>
              <HiX size={24} />
            </button>
          </div>

          <div className="p-4 space-y-3">
            <div className="menu bg-base-200/45 rounded-2xl p-2 border border-base-300/60">
              <a href="#home" onClick={() => setMobileOpen(false)} className="rounded-xl">
                {t.home}
              </a>
              <Link to="/menu" onClick={() => setMobileOpen(false)} className="rounded-xl">
                {t.menu}
              </Link>
              <a href="#contacts" onClick={() => setMobileOpen(false)} className="rounded-xl">
                {t.contacts}
              </a>
              <a href="#branches" onClick={() => setMobileOpen(false)} className="rounded-xl">
                {t.branches}
              </a>
            </div>

            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-full rounded-2xl h-12 min-h-0 gap-2"
            >
              <FaTelegramPlane size={20} /> {t.order}
            </a>

            <div className="opacity-70 text-sm">
              {lang === "uz" ? "Tez, issiq, shirali." : lang === "ru" ? "Быстро, горячо, сочно." : "Fast, hot, juicy."}
            </div>
          </div>
        </div>
      </div>

      {/* HERO (SAME COMPONENT) */}
      <section id="home" className="relative min-h-[calc(100vh-72px)] flex items-center">
        {/* decor */}
        <div className="absolute -left-24 -top-28 w-[520px] h-[520px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute right-0 top-24 w-[560px] h-[560px] bg-secondary/25 rounded-full blur-3xl" />

        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 py-12">
          {/* TEXT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              {t.title}
              <span className="text-primary"> {t.brand}</span>
            </h1>

            <p className="mt-4 text-base md:text-lg opacity-80 max-w-xl leading-relaxed">
              {t.desc1} <span className="text-success font-bold">Zebra Food</span>
              {t.desc2} <span className="text-error font-bold">{t.vibe}</span> vibe.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg rounded-2xl gap-2"
              >
                <FaTelegramPlane size={20} />
                {t.order}
              </a>

              <Link to="/menu" className="btn btn-outline btn-lg rounded-2xl">
                {t.viewMenu}
              </Link>

              <span className="badge badge-secondary badge-lg font-bold px-4 py-4">
                {t.hotdogDay}
              </span>
            </div>
          </div>

          {/* VISUAL */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[430px] h-[430px] md:w-[480px] md:h-[480px] bg-primary/15 rounded-full" />
            </div>

            <CardSwap cardDistance={55} verticalDistance={70} delay={2200} pauseOnHover={true}>
              {PRODUCTS.map((p) => (
                <Card key={`${p.name}-${p.price}`}>
                  <article className="w-full">
                    <div className="badge badge-secondary font-bold">{t.hit}</div>

                    <figure className="mt-3 overflow-hidden rounded-2xl border border-base-300">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="h-44 w-full object-cover"
                        loading="lazy"
                      />
                    </figure>

                    <h3 className="mt-3 text-xl font-black">{p.name}</h3>
                    <p className="opacity-75 text-sm">{p.desc}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-semibold opacity-80">{t.from}</span>
                      <span className="badge badge-primary badge-lg font-black">
                        {p.price.toLocaleString(moneyLocale)} {t.sum}
                      </span>
                    </div>

                    <a
                      href={TELEGRAM_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-accent w-full mt-4 rounded-2xl gap-2"
                    >
                      <FaTelegramPlane size={18} />
                      {t.order}
                    </a>
                  </article>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </section>
    </header>
  );
}

/* ✅ Pastga o‘zingdagi base64 stringlarni qo‘y (sen yuborganlarini shu joyga joylashtir) */
const hotdogBase64_1 = "../assets/hotdog.png";
const hotdogBase64_2 = "../assets/hotdog.png";
const hotdogBase64_3 = "../assets/hotdog.png";
