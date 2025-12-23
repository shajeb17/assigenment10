import React from "react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-purple-600 to-[#00a9ff] text-white pt-14 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h1 className="text-3xl font-bold mb-3">HabitTrack</h1>
          <p className="text-sm leading-6 opacity-80">
            A modern habit tracking app to build better routines, stay
            productive, track daily progress and achieve long–term goals.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Dashboard</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm opacity-80">📧 Email: support@habittrack.com</p>
          <p className="text-sm opacity-80 mt-1">📞 Phone: +880 1700-000000</p>
          <p className="text-sm opacity-80 mt-1">📍 Dhaka, Bangladesh</p>

          <div className="flex gap-4 mt-4">
            <a className="">🌐</a>
            <a className="">📘</a>
            <a className="">📸</a>
            <a className="">🐦</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/30 mt-10 pt-5 flex justify-center gap-1 items-center text-center text-sm">
        <span className="text-[17px]"> ©</span> {new Date().getFullYear()}{" "}
        HabitTrack — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
