import React, { useMemo, useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaTelegramPlane } from "react-icons/fa";

const Branches = () => {
    const BRANCHES = useMemo(
        () => [
            {
                id: "branch-1",
                label: "улица Янгишахар, 10",
                lat: 41.366938,
                lon: 69.286303,
            },
            {
                id: "branch-2",
                label: "9-й квартал, 99, массив Юнусабад, Юнусабадский район",
                lat: 41.377649,
                lon: 69.282843,
            },
        ],
        []
    );

    const [branchId, setBranchId] = useState(BRANCHES[0].id);
    const active = BRANCHES.find((b) => b.id === branchId);

    const embedSrc = `https://yandex.ru/map-widget/v1/?ll=${active.lon}%2C${active.lat}&z=18&l=map`;
    const mapLink = `https://yandex.ru/maps/?ll=${active.lon}%2C${active.lat}&z=18`;

    return (
        <section className="relative h-screen min-h-[700px] overflow-hidden" id="contacts">
            {/* MAP */}
            <iframe
                key={active.id}
                src={embedSrc}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
                    <div className="w-full max-w-md bg-base-100/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-10">

                        <p className="text-3xl font-bold text-primary mb-8">
                            Наши Контакты
                        </p>

                        {/* PHONE */}
                        <div className="mb-6 bg-base-200 rounded-xl p-4 space-y-3">
                            {[
                                { href: "tel:+998978908080", label: "+998 97 890 80 80" },
                                { href: "tel:+998772660330", label: "+998 77 266 03 30" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="group flex items-center gap-3"
                                >
                                    <FaPhone className="text-primary group-hover:rotate-90 transition-all duration-300" />
                                    <a
                                        href={item.href}
                                        className="text-xl font-bold hover:text-primary transition"
                                    >
                                        {item.label}
                                    </a>
                                </div>
                            ))}
                        </div>


                        {/* ADDRESS + SELECT INLINE */}
                        <div className="mb-8 bg-base-200 rounded-xl p-4">
                            <div className="flex gap-3">
                                <FaMapMarkerAlt className="mt-1 text-primary " size={18} />

                                <div className="text-base-content flex justify-center ">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="opacity-70">Филиал:</span>

                                        <select
                                            value={branchId}
                                            onChange={(e) => setBranchId(e.target.value)}
                                            className="select select-ghost  select-primary select-sm   underline decoration-dashed underline-offset-4
                                 font-semibold cursor-pointer focus:outline-none"
                                        >
                                            {BRANCHES.map((b) => (
                                                <option key={b.id} value={b.id}>
                                                    {b.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>


                                </div>
                            </div>
                        </div>

                        {/* MAP BUTTON */}
                        <a
                            href={mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group hover: btn btn-primary  btn-outline shadow shadow-primary    rounded-full w-full sm:w-auto gap-2"
                        >
                            Посмотреть на карте
                            <FaMapMarkerAlt className="group-hover:-rotate-40 transition-all" />
                        </a>

                        {/* TELEGRAM */}
                        <div className="pt-6 border-t mt-6">
                            <a
                                href="https://t.me/+998978908080"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-primary font-semibold group hover:"
                            >
                                <FaTelegramPlane className="group-hover:rotate-15 transition-all" />
                                Telegram orqali bog‘laning
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Branches;
