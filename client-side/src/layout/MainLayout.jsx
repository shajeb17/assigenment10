import React from "react";
import Navbar from "../component/NavBar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../pages/Footer";
import { ScaleLoader } from "react-spinners";
import Theme from "../component/Theme";

const MainLayout = () => {
  let navigate = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1">
        {navigate.state === "loading" ? (
          <div className="flex justify-center items-center h-[70vh]">
              <ScaleLoader></ScaleLoader>
          </div>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
      <div className="fixed bottom-5 right-10 btn bg-linear-to-r from-purple-500 to-[#00a9ff] text-white rounded-2xl border-0">

      <Theme></Theme>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
