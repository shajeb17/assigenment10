import React from "react";
import heroPic from "../../assets/Sandy_Bus-32_Single-09.jpg"; 

const HeroThree = () => {
  return (
    <section className="bg-[#0a0f1f] text-white py-28">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-14">
        
       
        <div className="space-y-7 text-start">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build Powerful Routines.
            <span className="block bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Level Up Your Lifestyle.
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-md">
            Stay motivated, track your habits, and reach your goals 
            with a simple and intelligent habit-building platform.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-7 py-3 bg-blue-600 hover:bg-blue-700 font-semibold rounded-xl shadow-lg hover:scale-105 transition">
              Start Building
            </button>

            <button className="px-7 py-3 border border-white/20 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroPic}
            alt="hero tracking"
            className="w-[480px] rounded-3xl shadow-[0px_10px_40px_rgba(0,0,0,0.6)] hover:scale-105 transition"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroThree;
