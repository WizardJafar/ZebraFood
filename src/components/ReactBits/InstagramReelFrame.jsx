import React, { useEffect, useRef, useState } from "react";
import videoSrc from "../../assets/vidio.MP4";
import posterImg from "../../assets/burger.png";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function InstagramReelFrame() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.play().catch(() => {});
  }, []);

  const toggleMute = () => {
    if (videoRef.current) videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden rounded-2xl">

      {/* ===== MOBILE VIDEO ===== */}
      <div className="sm:hidden relative w-full h-full">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          playsInline
          muted={muted}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />

        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white"
        >
          {muted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
        </button>
      </div>

      {/* ===== DESKTOP IMAGE FULL ===== */}
      <div className="hidden sm:block w-full h-screen relative">
        <img
          src={posterImg}
          alt="Desktop poster"
          className="w-full object-cover-center h-[100%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>
    </div>
  );
}
