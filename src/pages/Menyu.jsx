import React, { useMemo, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

// 🔹 CATEGORY items images
import hotdog1 from "../assets/hotdog.png";
import hotdog2 from "../assets/hotdog.png";
import hotdog3 from "../assets/hotdog.png";

import burger1 from "../assets/burger.jpg";
import burger2 from "../assets/burger.jpg";
import burger3 from "../assets/burger.jpg";

import drinks1 from "../assets/Cola.jpg";
import drinks2 from "../assets/Cola.jpg";
import drinks3 from "../assets/Cola.jpg";

// 🔹 Modal menu image
import menuImage from "../assets/menu.jpg";

const Menyu = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const CATEGORIES = useMemo(
    () => [
      {
        id: "hotdog",
        label: "Hotdog",
        items: [
          { name: "Classic Hotdog", desc: "Kolbasa · sous · crispy", price: 15000, img: hotdog1, badge: "Top" },
          { name: "Cheese Hotdog", desc: "Cheddar · sous · extra cheese", price: 17000, img: hotdog2, badge: "Cheese" },
          { name: "Spicy Hotdog", desc: "Spicy · kolbasa · chili", price: 13000, img: hotdog3, badge: "Spicy" },
        ],
      },
      {
        id: "burger",
        label: "Burger",
        items: [
          { name: "Classic Burger", desc: "Beef · cheese · sauce", price: 25000, img: burger1, badge: "New" },
          { name: "Double Burger", desc: "2x beef · cheddar · pickles", price: 32000, img: burger2, badge: "Big" },
          { name: "Spicy Burger", desc: "Spicy sauce · jalapeño", price: 28000, img: burger3, badge: "Hot" },
        ],
      },
      {
        id: "drinks",
        label: "Ichimlik",
        items: [
          { name: "Cola 0.5", desc: "Cold · fresh", price: 7000, img: drinks1, badge: "Cold" },
          { name: "Fanta 0.5", desc: "Orange · cold", price: 7000, img: drinks2, badge: "Cold" },
          { name: "Water", desc: "Still · 0.5", price: 3000, img: drinks3, badge: "Lite" },
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState(CATEGORIES[0].id);
  const activeCategory = useMemo(
    () => CATEGORIES.find((c) => c.id === active) || CATEGORIES[0],
    [active, CATEGORIES]
  );

  const fmt = (n) => new Intl.NumberFormat("uz-UZ").format(n);

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Menyu</h1>
            <p className="text-sm text-base-content/70 mt-2">
              Kategoriya tanlang — keyin pastda mahsulotlar chiqadi
            </p>
          </div>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="btn btn-primary btn-sm md:btn-md gap-2 rounded-2xl"
          >
            <FaTelegramPlane size={18} /> Menu
          </button>
        </div>

        {/* Tabs */}
        <div className="sticky top-0 z-10 -mx-4 px-4 py-3 mb-6 backdrop-blur-md bg-base-100/70 border-b border-base-300/60">
          <div className="tabs tabs-boxed p-1.5 rounded-2xl overflow-x-auto flex-nowrap w-full">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`tab font-semibold rounded-xl transition ${
                  active === c.id
                    ? "tab-active bg-primary text-primary-content"
                    : "text-base-content/70 hover:text-base-content"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category preview */}
        <div className="mb-6 card bg-base-200 border border-base-300 overflow-hidden">
          <div className="card-body gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm text-base-content/70">Selected</div>
              <div className="text-2xl font-black">{activeCategory.label}</div>
              <div className="text-sm text-base-content/70 mt-1">
                Bosib ko‘rish: menu rasm ochiladi
              </div>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="btn btn-accent rounded-2xl gap-2"
            >
              <FaTelegramPlane /> hoziroq buyurtma bering 
            </button>
          </div>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.items.map((item, idx) => (
            <div
              key={`${activeCategory.id}-${idx}`}
              className="card bg-base-200 border border-base-300 shadow-xl transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
            >
              <figure className="relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                {item.badge && (
                  <div className="absolute top-3 left-3 badge badge-secondary badge-lg shadow">
                    {item.badge}
                  </div>
                )}
              </figure>
              <div className="card-body gap-3">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="card-title text-xl">{item.name}</h2>
                  <div className="badge badge-outline border-base-300 text-base-content/70">
                    {activeCategory.label}
                  </div>
                </div>
                <p className="text-sm text-base-content/70">{item.desc}</p>
                <div className="flex items-end justify-between pt-1">
                  <div>
                    <div className="text-xs text-base-content/60">Narx</div>
                    <div className="text-2xl font-extrabold leading-none">
                      {fmt(item.price)}
                      <span className="text-sm font-semibold text-base-content/70 ml-1">
                        UZS
                      </span>
                    </div>
                  </div>
                
                </div>
                <div className="h-px bg-base-300 mt-1" />
                <div className="flex items-center justify-between text-xs text-base-content/60">
                  <span>Fresh • Hot • Fast</span>
                  <span>2-5 min</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-10" />
      </div>

      {/* Modal - bitta rasm */}
      <dialog className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box max-w-4xl p-0 overflow-hidden border border-base-300 bg-base-200">
          <div className="p-4 flex items-center justify-between border-b border-base-300">
            <div className="font-black text-lg">{activeCategory.label} Menu</div>
            <button
              className="btn btn-ghost btn-sm btn-circle"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="p-4">
            <img
              src={menuImage}
              alt="Menu"
              className="w-full rounded-2xl border border-base-300 object-contain max-h-[75vh]"
            />
            <div className="mt-3 text-sm text-base-content/70">
              Katta ko‘rish uchun browser zoom / telefon pinch zoom.
            </div>
          </div>
          <div className="modal-action px-4 pb-4">
            <button
              className="btn btn-primary rounded-2xl"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
        <form
          method="dialog"
          className="modal-backdrop"
          onClick={() => setModalOpen(false)}
        >
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Menyu;
