import React, { use, useEffect } from "react";
import { Link } from "react-router";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import { AuthContext } from "../uesContextHook/formhook/AuthContex";
import { updateProfile } from "firebase/auth";

const RegisterForm = () => {
  let { handleRegister } = use(AuthContext);
       useEffect(() => {
         document.title = "Gamehub :RegistePage";
       }, []);
  let handleClick = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    let text = e.target.text.value;
    let image = e.target.image.value;
    let expression =/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!expression.test(password)) {
      alert(
        "❌ Password must have 1 uppercase, 1 lowercase and be at least 6 characters long."
      );
      return;
    }

    let prifile = {
      displayName: text,
      photoURL: image,
    };
    handleRegister(email, password)
      .then((result) => updateProfile(result.user, prifile))
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <div className="flex-1">
        <div className="m-auto flex items-center justify-center w-full h-screen ">
          <div className="card  max-w-sm shrink-0 shadow-2xl">
            <div className="card-body m-auto flex items-center justify-center">
              <form onSubmit={handleClick}>
                <h1 className="capitalize text-[18px] mb-5">
                  Please a create account
                </h1>
                <label className="label text-white">Name</label>
                <input
                  type="text"
                  className="input  outline-0 "
                  placeholder="Your Name"
                  name="text"
                />

                <label className="label text-white">Image</label>
                <input
                  type="text"
                  className="input  outline-0 "
                  name="image"
                  placeholder="image link"
                />

                <label className="label text-white">Email</label>
                <input
                  type="email"
                  className="input  outline-0 "
                  name="email"
                  placeholder="Email"
                />
                <label className="label text-white">Password</label>
                <input
                  type="password"
                  className="input  outline-0 "
                  name="password"
                  placeholder="Password"
                />
                <div className="mt-3">
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-secondary mt-4 w-full">
                  Register
                </button>
                <p className="mt-4 text-yellow-200">
                  Opps! i Have a Account?{" "}
                  <Link to={"/pagelayout"} className="text-blue-400">
                    Please Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RegisterForm;
