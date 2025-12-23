import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../uesContextHook/formhook/AuthContex";
import { toast } from "react-toastify";

const LoginForm = () => {
  let { handleSinin, handleSigninGoogle } = use(AuthContext);
  let [email, setEmail] = useState();

  let handleClick = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    handleSinin(email, password)
      .then(() => toast.success("Login success"))
      .catch((e) => toast.error(e.message));
  };

  let handleGoogle = () => {
    handleSigninGoogle()
      .then(() => toast.success("Login success"))
      .catch((e) => toast.error(e.message));
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleClick}>
              <h1 className="text-[22px] font-semibold mb-4">Please Login</h1>
              <label className="label">Email</label>
              <input
                type="email"
                className="input bg-black/10 outline-0 "
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input bg-black/10 outline-0 "
                name="password"
                placeholder="Password"
              />
              <div>
                <Link
                  to={"/passwordreset"}
                  state={{ email }}
                  className="link link-hover"
                >
                  Forgot password?
                </Link>
              </div>
              <button className="btn bg-linear-to-r from-purple-500 to-[#00a9ff] text-[16px] text-white font-semibold mt-4 w-full">
                Login
              </button>
              <button
                onClick={handleGoogle}
                className="btn bg-white text-black w-full mt-3 border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p className="mt-4 text-green-600">
                I Dont Have a Account?{" "}
                <Link to={"/register"} className="text-blue-400">
                  Please Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
