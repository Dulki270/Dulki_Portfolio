import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  // create text variable and function for  that text
  const [text, setText] = useState("");
  // create a full text variable
  const fulltext = "Crafting Modern Web Experiences";

  // typing effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText(fulltext.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex > fulltext.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-black to-blue-500/10 text-gray-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Clouds */}
      <div className="absolute w-80 h-32 bg-blue-800 rounded-full opacity-60 blur-xl animate-cloud -top-10 left-10"></div>
      <div className="absolute w-70 h-40 bg-blue-300 rounded-full opacity-40 blur-lg animate-cloud2 top-50 -left-40"></div>
      <div className="absolute w-80 h-36 bg-blue-800 rounded-full opacity-30 blur-xl animate-cloud bottom-20 left-20"></div>

      {/* add text */}
      <div className="mb-4 text-4xl font-mono font-bold relative z-10">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* add bar below the text */}
      <div className="w-[400px] h-[2px] bg-gray-800 rounded relative overflow-hidden z-10">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
