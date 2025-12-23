import React from "react";
import { User, CheckCircle, Calendar, Globe } from "lucide-react";
const Counter = () => {
  return (
    <section className="bg-linear-to-r from-purple-600 to-[#00a9ff] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
        <p className="text-lg opacity-90 mb-12">
          See how our app is helping thousands of people build consistent
          habits.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex flex-col items-center bg-white/90 rounded-2xl py-3 text-black">
            <User className="w-12 h-12 mb-3" />
            <h3 className="text-4xl font-extrabold">25K+</h3>
            <p className="mt-2 text-sm opacity-90">Active Users</p>
          </div>

          <div className="flex flex-col items-center bg-white/90 rounded-2xl py-3 text-black">
            <CheckCircle className="w-12 h-12 mb-3" />
            <h3 className="text-4xl font-extrabold">1.2M+</h3>
            <p className="mt-2 text-sm opacity-90">Habits Tracked</p>
          </div>

          <div className="flex flex-col items-center bg-white/90 rounded-2xl py-3 text-black">
            <Calendar className="w-12 h-12 mb-3" />
            <h3 className="text-4xl font-extrabold">500K+</h3>
            <p className="mt-2 text-sm opacity-90">Tasks Completed</p>
          </div>

          <div className="flex flex-col items-center bg-white/90 rounded-2xl py-3 text-black">
            <Globe className="w-12 h-12 mb-3" />
            <h3 className="text-4xl font-extrabold">80+</h3>
            <p className="mt-2 text-sm opacity-90">Countries Reached</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
