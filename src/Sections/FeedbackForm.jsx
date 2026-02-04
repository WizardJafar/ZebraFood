import React from "react";
import ReviewSection from "../components/ReviewSection.jsx";
import QuestionSection from "../components/QuestionSection.jsx";

export default function FeedbackForm() {
  const BOT_TOKEN = "8440368645:AAGGnHqAaBODMZBebJilNbh4DpZFkzysPfE";
  const CHAT_ID = "-5142503292";

  const sendToTelegram = async (message) => {
    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      });
      return res.ok;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-3 sm:mb-4">
            Обратная связь
          </h1>
          <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto px-4">
            Ваше мнение важно для нас. Поделитесь отзывом или задайте вопрос
          </p>
        </div>

        {/* ✅ ВОТ ТУТ ВЫЗОВ 2 КОМПОНЕНТОВ */}
        <ReviewSection onSend={sendToTelegram} />
        <QuestionSection onSend={sendToTelegram} />

        <div className="text-center py-6 sm:py-8">
          <p className="text-sm sm:text-base text-base-content/70">
            Все сообщения отправляются напрямую в нашу команду 💬
          </p>
        </div>
      </div>
    </div>
  );
}
