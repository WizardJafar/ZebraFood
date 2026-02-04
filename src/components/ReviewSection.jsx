import React, { useState } from "react";
import { FaStar, FaPaperPlane, FaUser, FaTelegramPlane, FaCheckCircle } from "react-icons/fa";

function ReviewSection({ onSend }) {
    const [data, setData] = useState({
        rating: 0,
        name: "",
        telegram: "",
        review: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [hoverRating, setHoverRating] = useState(0);

    const nameOk = data.name.trim().length > 0;
    const tgOk = data.telegram.trim().length > 0;
    const canRate = nameOk && tgOk;

    const canSubmit = canRate && (data.rating > 0 || data.review.trim().length > 0);

    const submit = async (e) => {
        e.preventDefault();
        if (!canSubmit) return;

        setLoading(true);

        const message = `
🌟 <b>НОВЫЙ ОТЗЫВ</b> 🌟

⭐ Оценка: ${data.rating > 0 ? `${"⭐".repeat(data.rating)} (${data.rating}/5)` : "—"}
👤 Имя: ${data.name}
📱 Telegram: @${data.telegram}

${data.review.trim() ? `💬 Отзыв:\n${data.review.trim()}` : ""}
    `.trim();

        const ok = await onSend(message);

        if (ok) {
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
            setData({ rating: 0, name: "", telegram: "", review: "" });
        } else {
            alert("❌ Ошибка отправки. Проверьте настройки Telegram бота.");
        }

        setLoading(false);
    };

    return (
        <section id="review" className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-3 sm:px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-warning to-warning/70 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                        <FaStar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-warning-content" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-warning to-warning/70 bg-clip-text text-transparent px-4">
                        Оцените нас!
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg opacity-70 max-w-2xl mx-auto px-4">
                        Ваше мнение очень важно для нас. Поделитесь впечатлениями о Zebra Food.
                    </p>
                </div>

                {/* Success */}
                {success && (
                    <div className="alert alert-success shadow-lg sm:shadow-xl md:shadow-2xl mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                        <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                        <div className="min-w-0">
                            <h3 className="font-bold text-sm sm:text-base md:text-lg">Спасибо за отзыв!</h3>
                            <div className="text-xs sm:text-sm md:text-base">
                                Мы ценим ваше мнение и обязательно учтём его в работе.
                            </div>
                        </div>
                    </div>
                )}

                {/* Form Card */}
                <div className="card bg-base-100 shadow-lg sm:shadow-xl md:shadow-2xl border border-base-300 hover:shadow-warning/20 transition-all duration-500">
                    <div className="card-body p-4 sm:p-6 md:p-8 lg:p-10">
                        <form onSubmit={submit} className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                            {/* Rating */}
                            <div className="form-control">
                                <label className="label flex-col items-center gap-1 sm:gap-2">
                                    <span className="label-text text-sm sm:text-base md:text-lg font-bold flex items-center gap-2">
                                        <FaStar className="text-warning w-4 h-4 sm:w-5 sm:h-5" />
                                        Ваша оценка
                                    </span>
                                    {!canRate && (
                                        <span className="badge badge-warning badge-xs sm:badge-sm text-xs text-center">
                                            Сначала заполните имя и Telegram
                                        </span>
                                    )}
                                </label>

                                <div className="flex justify-center gap-2 my-4">
                                    {[1, 2, 3, 4, 5].map((star) => {
                                        const active = star <= (hoverRating || data.rating);

                                        return (
                                            <button
                                                key={star}
                                                type="button"
                                                onMouseEnter={() => setHoverRating(star)}
                                                onMouseLeave={() => setHoverRating(0)}
                                                onClick={() => setData((s) => ({ ...s, rating: star }))}
                                                className={`btn btn-circle btn-md transition-all ${active ? "btn-warning scale-110" : "btn-ghost"
                                                    }`}
                                            >
                                                <FaStar className={active ? "text-warning-content" : ""} />
                                            </button>
                                        );
                                    })}
                                </div>


                                {data.rating > 0 && (
                                    <div className="text-center">
                                        <div className="badge badge-warning badge-sm sm:badge-md md:badge-lg">{data.rating} из 5 звёзд</div>
                                    </div>
                                )}
                            </div>

                            <div className="divider">Ваши данные</div>

                            {/* Personal Info */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                                {/* Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xs sm:text-sm md:text-base font-semibold flex items-center gap-2">
                                            <FaUser className="text-warning w-3 h-3 sm:w-4 sm:h-4" />
                                            Ваше имя <span className="text-error">*</span>
                                        </span>
                                        <span className="label-text-alt badge badge-error badge-xs sm:badge-sm text-xs">обязательно</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Как вас зовут?"
                                        className="input input-bordered input-sm sm:input-md md:input-lg w-full focus:input-warning transition-all duration-300 text-sm sm:text-base"
                                        value={data.name}
                                        onChange={(e) => setData((s) => ({ ...s, name: e.target.value }))}
                                        required
                                    />
                                </div>

                                {/* Telegram */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xs sm:text-sm md:text-base font-semibold flex items-center gap-2">
                                            <FaTelegramPlane className="text-warning w-3 h-3 sm:w-4 sm:h-4" />
                                            Telegram <span className="text-error">*</span>
                                        </span>
                                        <span className="label-text-alt badge badge-error badge-xs sm:badge-sm text-xs">обязательно</span>
                                    </label>

                                    {/* FIX: join не ломается на мобилке */}
                                    <div className="join w-full">
                                        <span className="btn join-item btn-sm sm:btn-md md:btn-lg pointer-events-none bg-base-200 border-base-300 text-xs sm:text-sm md:text-base shrink-0">
                                            @
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="username"
                                            className="input input-bordered input-sm sm:input-md md:input-lg join-item w-full min-w-0 focus:input-warning transition-all duration-300 text-sm sm:text-base"
                                            value={data.telegram}
                                            onChange={(e) => setData((s) => ({ ...s, telegram: e.target.value.replace("@", "") }))}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="divider">Отзыв</div>

                            {/* Review */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xs sm:text-sm md:text-base lg:text-lg font-semibold flex items-center gap-2">
                                        💭 Ваш отзыв
                                    </span>
                                    <span className="label-text-alt badge badge-ghost badge-xs sm:badge-sm text-xs">необязательно</span>
                                </label>

                                <textarea
                                    className="textarea textarea-bordered textarea-sm sm:textarea-md md:textarea-lg w-full h-24 sm:h-32 md:h-40 lg:h-48 focus:textarea-warning resize-none transition-all duration-300 text-xs sm:text-sm md:text-base"
                                    placeholder="Поделитесь своими впечатлениями о Zebra Food..."
                                    value={data.review}
                                    maxLength={500}
                                    onChange={(e) => setData((s) => ({ ...s, review: e.target.value }))}
                                />

                                {/* FIX: на мобилке переносим в колонку */}
                                <label className="label flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                    <span className="label-text-alt text-xs opacity-60">
                                        {data.review.trim().length > 0 ? "Спасибо за подробный отзыв!" : "Можно оставить пустым, если поставили звёзды"}
                                    </span>
                                    <span className="label-text-alt text-xs opacity-60">
                                        {data.review.length} / 500
                                    </span>
                                </label>
                            </div>

                            {/* Submit */}
                            <div className="card-actions">
                                <button
                                    type="submit"
                                    className="btn btn-warning btn-sm sm:btn-md md:btn-lg w-full text-sm sm:text-base md:text-lg font-bold shadow-md sm:shadow-lg md:shadow-xl hover:shadow-2xl hover:shadow-warning/50 transition-all duration-300"
                                    disabled={!canSubmit || loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="loading loading-spinner loading-xs sm:loading-sm md:loading-md" />
                                            <span>Отправка...</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <span>Отправить отзыв</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            {!canSubmit && (
                                <div className="alert alert-warning shadow-md sm:shadow-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current shrink-0 w-5 h-5 sm:w-6 sm:h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                    <div className="text-xs sm:text-sm min-w-0">
                                        <p className="font-semibold">Для отправки необходимо:</p>
                                        <ul className="list-disc list-inside mt-1">
                                            <li>Заполнить имя и Telegram</li>
                                            <li>Поставить оценку ИЛИ написать отзыв</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Stats (FIX: value sizes + overflow) */}
                <div className="stats stats-vertical sm:stats-horizontal shadow-md sm:shadow-lg md:shadow-xl w-full mt-4 sm:mt-5 md:mt-6 lg:mt-8">
                    <div className="stat place-items-center py-4 sm:py-6">
                        <div className="stat-figure text-warning">
                            <FaStar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                        </div>
                        <div className="stat-title text-xs sm:text-sm">Средняя оценка</div>
                        <div className="stat-value text-warning text-2xl sm:text-3xl md:text-4xl leading-none">4.8</div>
                        <div className="stat-desc text-xs sm:text-sm text-center">Из 500+ отзывов</div>
                    </div>

                    <div className="stat place-items-center py-4 sm:py-6">
                        <div className="stat-figure text-success">
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="stat-title text-xs sm:text-sm">Довольных клиентов</div>
                        <div className="stat-value text-success text-2xl sm:text-3xl md:text-4xl leading-none">96%</div>
                        <div className="stat-desc text-xs sm:text-sm text-center">Рекомендуют друзьям</div>
                    </div>

                    <div className="stat place-items-center py-4 sm:py-6">
                        <div className="stat-figure text-primary">
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                            </svg>
                        </div>
                        <div className="stat-title text-xs sm:text-sm">Всего отзывов</div>
                        <div className="stat-value text-primary text-2xl sm:text-3xl md:text-4xl leading-none">500+</div>
                        <div className="stat-desc text-xs sm:text-sm text-center">И продолжают расти</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReviewSection;
