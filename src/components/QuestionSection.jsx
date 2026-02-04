import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaTelegramPlane, FaQuestionCircle, FaCheckCircle } from 'react-icons/fa';

function QuestionSection({ onSend }) {
    const [data, setData] = useState({ name: "", telegram: "", question: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        if (!data.question.trim()) return;

        setLoading(true);

        const message = `
❓ <b>НОВЫЙ ВОПРОС</b> ❓

👤 Имя: ${data.name.trim() || "Анонимно"}
${data.telegram.trim() ? `📱 Telegram: @${data.telegram.trim()}` : ""}

💭 Вопрос:
${data.question.trim()}
        `.trim();

        const ok = await onSend(message);

        if (ok) {
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
            setData({ name: "", telegram: "", question: "" });
        } else {
            alert("❌ Ошибка отправки. Проверьте настройки Telegram бота.");
        }

        setLoading(false);
    };

    return (
        <section id="question" className="py-12 md:py-16 lg:py-20 px-4">
            <div className="max-w-4xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl shadow-xl mb-4 md:mb-6">
                        <FaQuestionCircle className="w-8 h-8 md:w-10 md:h-10 text-primary-content" />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Есть вопросы?
                    </h2>
                    <p className="text-base md:text-lg opacity-70 max-w-2xl mx-auto">
                        Напишите нам, и мы ответим в ближайшее время. Все поля необязательны, кроме самого вопроса.
                    </p>
                </div>

                {/* Success Alert */}
                {success && (
                    <div className="alert alert-success shadow-2xl mb-6 md:mb-8">
                        <FaCheckCircle className="w-6 h-6" />
                        <div>
                            <h3 className="font-bold text-base md:text-lg">Отлично!</h3>
                            <div className="text-sm md:text-base">Ваш вопрос успешно отправлен. Мы свяжемся с вами в ближайшее время.</div>
                        </div>
                    </div>
                )}

                {/* Form Card */}
                <div className="card bg-base-100 shadow-2xl border border-base-300 hover:shadow-primary/20 transition-all duration-500">
                    <div className="card-body p-6 md:p-8 lg:p-10">
                        <form onSubmit={submit} className="space-y-6 md:space-y-8">
                            
                            {/* Personal Info Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                
                                {/* Name Field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold flex items-center gap-2">
                                            <FaUser className="text-primary w-4 h-4" />
                                            Ваше имя
                                        </span>
                                        <span className="label-text-alt badge badge-ghost badge-sm">необязательно</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Как вас зовут?"
                                        className="input input-bordered input-lg w-full focus:input-primary transition-all duration-300"
                                        value={data.name}
                                        onChange={(e) => setData((s) => ({ ...s, name: e.target.value }))}
                                    />
                                </div>

                                {/* Telegram Field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold flex items-center gap-2">
                                            <FaTelegramPlane className="text-primary w-4 h-4" />
                                            Telegram
                                        </span>
                                        <span className="label-text-alt badge badge-ghost badge-sm">необязательно</span>
                                    </label>
                                    <div className="join w-full">
                                        <span className="btn join-item btn-lg pointer-events-none bg-base-200 border-base-300">
                                            @
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="username"
                                            className="input input-bordered input-lg join-item w-full focus:input-primary transition-all duration-300"
                                            value={data.telegram}
                                            onChange={(e) => setData((s) => ({ ...s, telegram: e.target.value.replace("@", "") }))}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Question Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2 text-base md:text-lg">
                                        <FaQuestionCircle className="text-primary w-5 h-5" />
                                        Ваш вопрос
                                        <span className="text-error">*</span>
                                    </span>
                                    <span className="label-text-alt badge badge-primary badge-sm">обязательно</span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered textarea-lg w-full h-32 md:h-40 lg:h-48 focus:textarea-primary resize-none transition-all duration-300"
                                    placeholder="Опишите ваш вопрос подробно..."
                                    value={data.question}
                                    onChange={(e) => setData((s) => ({ ...s, question: e.target.value }))}
                                    required
                                />
                                <label className="label">
                                    <span className="label-text-alt opacity-60">
                                        Минимум 10 символов
                                    </span>
                                    <span className="label-text-alt opacity-60">
                                        {data.question.length} / 500
                                    </span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="card-actions">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg w-full text-base md:text-lg font-bold shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
                                    disabled={loading || !data.question.trim() || data.question.length < 10}
                                >
                                    {loading ? (
                                        <>
                                            <span className="loading loading-spinner loading-md"></span>
                                            <span>Отправка...</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="w-5 h-5" />
                                            <span>Отправить вопрос</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Info Text */}
                            <div className="alert alert-info shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <div className="text-xs md:text-sm">
                                    <p className="font-semibold">Конфиденциальность</p>
                                    <p>Мы не передаем вашу информацию третьим лицам и используем её только для связи с вами.</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Additional Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 md:mt-8">
                    <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="card-body p-4 text-center">
                            <div className="text-2xl md:text-3xl mb-2">⚡</div>
                            <h3 className="font-bold text-sm md:text-base">Быстрый ответ</h3>
                            <p className="text-xs opacity-70">Отвечаем в течение часа</p>
                        </div>
                    </div>
                    <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="card-body p-4 text-center">
                            <div className="text-2xl md:text-3xl mb-2">🔒</div>
                            <h3 className="font-bold text-sm md:text-base">Конфиденциально</h3>
                            <p className="text-xs opacity-70">Ваши данные защищены</p>
                        </div>
                    </div>
                    <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="card-body p-4 text-center">
                            <div className="text-2xl md:text-3xl mb-2">💬</div>
                            <h3 className="font-bold text-sm md:text-base">Профессионально</h3>
                            <p className="text-xs opacity-70">Квалифицированная помощь</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default QuestionSection;