import React from "react";

export default function InstagramReelFrame({ permalink }) {
  const src = permalink.endsWith("/") ? `${permalink}embed` : `${permalink}/embed`;

  return (
    <div className="relative w-full mb-20 h-[500px] hoverflow rounded-lg">
      {/* Скрываем лишнее сверху/снизу (шапку/низ Instagram) */}
      <iframe
        src={src}
        title="Instagram Reel"
        className="absolute left-0 top-[-64px] w-full h-full"
        frameBorder="0"
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
      {/* Подстраховка: если вдруг появится белая рамка */}
      <div className="pointer-events-none absolute inset-0 " />
    </div>
  );
}
