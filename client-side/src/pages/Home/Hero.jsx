import React from "react";
import hero1 from "../../assets/20945221.jpg";
const Hero = () => {
  return (
    <section className="bg-[#0f172a] text-white py-28">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-start">
            Build Better Habits.
            <span className="block mt-2 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Stay Consistent Everyday.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 ">
            A powerful and easy way to track your habits, stay productive, and
            build the life you always wanted. Your journey begins today.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="px-7 py-3 bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-7 py-3 bg-white/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={hero1}
            alt="tracking image"
            className="w-[480px] rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
