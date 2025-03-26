import React from "react";

const MarqueeText = () => {
  return (
    <div className="w-full bg-[#FFAC1C] py-2 overflow-hidden">
      <div className="marquee whitespace-nowrap text-white text-lg font-semibold">
        <span className="mx-8">🔥 Get the best tax solutions with TAXTAG!</span>
        <span className="mx-8">🚀 Expert consultation for GST, ITR, and more!</span>
        <span className="mx-8">📞 Contact us today for a hassle-free experience!</span>
      </div>

      {/* Animation Styling */}
      <style>
        {`
          .marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 12s linear infinite;
          }
          
          @keyframes marquee {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default MarqueeText;
