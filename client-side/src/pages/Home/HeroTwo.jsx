import React from "react";
import heroImage from "../../assets/5186784.jpg"; 

const HeroTwo = () => {
  return (
    <section className="bg-[#0f172a] text-white py-28">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16">
        
     
        <div className="md:w-1/2 space-y-6 text-start">
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Transform Your Habits.
            <span className="block mt-2 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Achieve More Every Day.
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-md">
            Track your progress, stay consistent, and build a better version of
            yourself. Your transformation journey starts right now.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-7 py-3 bg-linear-to-r from-purple-400 to-blue-400 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition">
              Start Now
            </button>

            <button className="px-7 py-3 border border-white/20 bg-white/10 rounded-xl font-semibold hover:bg-white/20 transition">
              Explore Features
            </button>
          </div>

        </div>


        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="habit tracking"
            className="w-[460px] rounded-2xl shadow-2xl hover:scale-105 transition"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroTwo;
