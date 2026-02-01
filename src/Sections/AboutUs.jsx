import React from "react";
import {
    FaInstagram,
    FaUtensils,
    FaBolt,
    FaLeaf,
    FaMapMarkerAlt,
} from "react-icons/fa";
import fries from "../assets/fries.png"
import burger from "../assets/burger.png"
import sandvich from "../assets/Sandvich.png"
export default function AboutUs() {

    const Images = [
        sandvich,
        burger,
        fries,
    ];
    return (
        <section id="about" className="py-16 sm:py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* LEFT */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 text-base-content/80">
                            <FaUtensils className="text-primary" />
                            <span className="text-sm font-semibold">
                                Zebra Food • Street Fast Food
                            </span>
                        </div>

                        <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold leading-tight">
                            О нас — <span className="text-primary">Zebra Food</span>
                        </h2>

                        <p className="mt-4 text-base sm:text-lg text-base-content/70 leading-relaxed">
                            Zebra Food — это быстрый стрит-фуд, который хочется повторить:
                            хот-доги, бургеры, картофель фри и кофе. Мы делаем упор на вкус,
                            стабильное качество и удобный формат «по дороге».
                        </p>

                        <div className="mt-7 grid sm:grid-cols-2 gap-4">
                            <div className="card bg-base-200">
                                <div className="card-body p-5">
                                    <div className="flex items-start gap-3">
                                        <FaBolt className="text-primary text-xl mt-1" />
                                        <div>
                                            <p className="font-bold">Быстро и удобно</p>
                                            <p className="text-sm text-base-content/70">
                                                Идеально для обеда, перекуса и заказа на вынос.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-base-200">
                                <div className="card-body p-5">
                                    <div className="flex items-start gap-3">
                                        <FaLeaf className="text-primary text-xl mt-1" />
                                        <div>
                                            <p className="font-bold">Вкус без компромиссов</p>
                                            <p className="text-sm text-base-content/70">
                                                Понятные ингредиенты, сочные сочетания и стабильный результат.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="https://www.instagram.com/zebrafood.uz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary rounded-full gap-2"
                            >
                                <FaInstagram />
                                Наш Instagram
                            </a>

                            <a href="#contacts" className="btn btn-outline rounded-full">
                                Контакты и филиалы
                            </a>
                        </div>

                       
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        <div className="card bg-base-200 shadow-xl">
                            <div className="card-body p-6 sm:p-8">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm text-base-content/60">Мы в соцсетях</p>
                                        <p className="text-2xl font-extrabold">@zebrafood.uz</p>
                                        <p className="mt-1 text-base-content/70">
                                            Новинки, атмосфера, акции и самые сочные кадры.
                                        </p>
                                    </div>

                                    <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-primary/15 items-center justify-center">
                                        <FaInstagram className="text-primary text-2xl" />
                                    </div>
                                </div>

                                {/* Placeholder grid (без картинок) */}
                                <div className="flex items-center justify-around">
                                    {Images.map((img) => (
                                        <img src={img} alt="Food" className="w-50 h-50"/>
                                    ))}
                                </div>

                                <div className="mt-5">
                                    <a
                                        href="https://www.instagram.com/zebrafood.uz/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-neutral w-full rounded-full gap-2"
                                    >
                                        Открыть профиль
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Accent blobs */}
                        <div className="pointer-events-none absolute -top-4 -right-4 w-28 h-28 rounded-full bg-primary/15 blur-2xl" />
                        <div className="pointer-events-none absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-secondary/10 blur-2xl" />
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="stats bg-base-200 shadow">
                        <div className="stat">
                            <div className="stat-title">Формат</div>
                            <div className="stat-value text-primary text-2xl sm:text-3xl">
                                Street Food
                            </div>
                            <div className="stat-desc">Быстро • Сочно • Просто</div>
                        </div>
                    </div>

                    <div className="stats bg-base-200 shadow">
                        <div className="stat">
                            <div className="stat-title">Меню</div>
                            <div className="stat-value text-primary text-2xl sm:text-3xl">
                                Hot Dogs
                            </div>
                            <div className="stat-desc">+ бургеры, фри, кофе</div>
                        </div>
                    </div>

                    <div className="stats bg-base-200 shadow">
                        <div className="stat">
                            <div className="stat-title">Где мы</div>
                            <div className="stat-value text-primary text-2xl sm:text-3xl">
                                Ташкент
                            </div>
                            <div className="stat-desc">Выбирай ближайший филиал</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
