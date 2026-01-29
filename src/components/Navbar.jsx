import React, { useMemo, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import logo from '../assets/logo.png'
import CardSwap, { Card } from "./ReactBits/CardSwap";
// ожидаю что у тебя уже есть:
// import logo from "...";
// import { CardSwap, Card } from "reactbits"; // или как у тебя подключено


export default function Navbar({
}) {
    const [lang, setLang] = useState("uz"); // "uz" | "ru" | "en"
    const PRODUCTS = [
        {
            name: "Classic Hotdog",
            price: 15000,
            img: "data:image/jpeg;base64,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", // твой base64
            desc: "Kolbasa · sous · crispy",
        },
        {
            name: "Cheese Hotdog",
            price: 17000,
            img: "data:image/jpeg;base64,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",
            desc: "Cheddar · sous · extra cheese",
        },
        {
            name: "Spicy Hotdog",
            price: 13000,
            img: "data:image/jpeg;base64,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",
            desc: "Spicy sauce · jalapeño · crunchy",
        },
    ];
    const t = useMemo(() => {
        const dict = {
            uz: {
                home: "Home",
                menu: "Menu",
                contacts: "Contacts",
                branches: "Filiallar",
                order: "Buyurtma berish",
                title: "Hotdog",
                brand: "Zebra Food",
                desc1:
                    "Toshkentdagi",
                desc2:
                    " — issiq, shirali fast-food taomlar. Tez tayyor, sifatli ingredientlar,",
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
                branches: "Наши филиалы",
                order: "Заказать",
                title: "Хот-дог",
                brand: "Zebra Food",
                desc1: "Zebra Food в Ташкенте",
                desc2:
                    " — горячий, сочный street fast-food. Быстро готовим, качественные ингредиенты,",
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
                branches: "Our branches",
                order: "Order",
                title: "Hotdog",
                brand: "Zebra Food",
                desc1: "Zebra Food in Tashkent",
                desc2:
                    " — hot, juicy street fast food. Fast cooking, quality ingredients,",
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

    const TELEGRAM_LINK = "https://t.me/ZebraFoodBot"; // поставь свой @username или бот

    return (
        <header className="h-screen">
            {/* NAV */}
            <nav className="navbar sticky top-0 z-50 bg-base-100/50 backdrop-blur border-b-2 border-base-300 rounded-bl-2xl rounded-br-2xl mx-auto px-4">
                {/* left: logo */}
                <div className="flex-1">
                    <figure className="flex items-center gap-3 font-black max-w-12">
                        <img src={logo} alt="Zebra Food logo" />
                    </figure>
                </div>

                {/* center nav */}
                <div className="flex-1 justify-center">
                    <ul className="hidden md:flex menu menu-horizontal gap-1 font-semibold">
                        <li><a href="#home">{t.home}</a></li>
                        <li><a href="#menu">{t.menu}</a></li>
                        <li><a href="#contacts">{t.contacts}</a></li>
                        <li><a href="#branches">{t.branches}</a></li>
                    </ul>
                </div>

                {/* right actions: lang + telegram + button */}
                <div className="flex-1 justify-end gap-2 flex items-center">
                    {/* language switch */}
                    <div className="dropdown dropdown-end">
                        <button className="btn btn-ghost btn-sm">
                            {lang.toUpperCase()}
                        </button>
                        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-28 mt-2">
                            <li><button onClick={() => setLang("uz")}>UZ</button></li>
                            <li><button onClick={() => setLang("ru")}>RU</button></li>
                            <li><button onClick={() => setLang("en")}>EN</button></li>
                        </ul>
                    </div>

                    {/* telegram */}
                    <a
                        href={TELEGRAM_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost btn-sm btn-circle"
                        aria-label="Telegram"
                        title="Telegram"
                    >
                        {/* <FaTelegramPlane size={18} /> */}
                    </a>

                    {/* order button */}
                    <button className="btn btn-primary btn-sm">{t.order}</button>
                </div>
            </nav>

            {/* HERO */}
            <section id="home" className="relative min-h-screen flex items-center">
                {/* decor */}
                <div className="absolute -left-20 -top-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
                    {/* text */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-5xl font-black leading-tight">
                            {t.title}
                            <span className="text-primary"> {t.brand}</span>
                        </h1>

                        <p className="mt-4 text-lg opacity-80 max-w-xl">
                            {lang === "uz" ? (
                                <>
                                    {t.desc1}{" "}
                                    <span className="text-success font-bold">Zebra Food</span>
                                    {t.desc2}{" "}
                                    <span className="text-error font-bold">{t.vibe}</span> vibe.
                                </>
                            ) : (
                                <>
                                    {t.desc1}{" "}
                                    <span className="text-success font-bold">Zebra Food</span>
                                    {t.desc2}{" "}
                                    <span className="text-error font-bold">{t.vibe}</span> vibe.
                                </>
                            )}
                        </p>

                        <div className="mt-6 flex gap-3">
                            <button className="btn btn-primary btn-lg">{t.viewMenu}</button>
                            <button className="btn btn-outline btn-lg">{t.hotdogDay}</button>
                        </div>
                    </div>

                    {/* visual */}
                    <div className="relative flex items-center justify-center">
                        <div className="flex justify-center ml-5 w-[420px] h-[420px] bg-primary/20 rounded-full" />

                        <CardSwap
                            cardDistance={55}
                            verticalDistance={70}
                            delay={2000}
                            pauseOnHover={true}
                        >
                            {/* Card 1 */}
                            {PRODUCTS.map((p) => (
                                <Card key={`${p.name}-${p.price}`}>
                                    <article className="w-full">
                                        <div className="badge badge-secondary font-bold">{t.hit}</div>

                                        <figure className="mt-3 overflow-hidden rounded-2xl border border-base-300">
                                            <img
                                                src={p.img}
                                                alt={`Zebra Food ${p.name} ${p.price}`}
                                                className="h-44 w-full object-cover"
                                                loading="lazy"
                                            />
                                        </figure>

                                        <h3 className="mt-3 text-xl font-black">{p.name}</h3>
                                        <p className="opacity-75 text-sm">{p.desc}</p>

                                        <div className="mt-3 flex items-center justify-between">
                                            <span className="font-semibold opacity-80">{t.from}</span>
                                            <span className="badge badge-primary badge-lg font-black">
                                                {p.price.toLocaleString("ru-RU")} {t.sum}
                                            </span>
                                        </div>
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