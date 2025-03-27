import React from "react";

const MarqueeText = () => {
  return (
    <div className="w-full bg-[#EFA139] py-2 overflow-hidden">
      <div className="marquee whitespace-nowrap text-white text-lg font-semibold">
        <span className="mx-8">🔥 Get the best tax solutions with TAXTAG!</span>
        <span className="mx-8">🚀 Expert consultation for GST, ITR, and more!</span>
        <span className="mx-8">📞 WhatsApp us: <a href="https://wa.me/918233798276" className="underline">+91 82337 98276</a></span>
        <span className="mx-8">📧 Email us: <a href="mailto:taxtagservices@gmail.com" className="underline">taxtagservices@gmail.com</a></span>
        <span className="mx-8">📞 Contact us today for a hassle-free experience!</span>
      </div>

      {/* Animation Styling */}
      <style>
        {`
          .marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 20s linear infinite;
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
