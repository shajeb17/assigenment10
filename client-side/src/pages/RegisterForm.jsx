import { use } from "react";
import { AuthContext } from "../uesContextHook/formhook/AuthContex";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebse";

const RegisterForm = () => {
  let { handleRegister, handleSigninGoogle } = use(AuthContext);

  let handleClick = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    let profile = {
      displayName: e.target.text.value,
      photoURL: e.target.image.value,
    };

    let expression = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!expression.test(password)) {
      toast.error(
        "Password must have 1 uppercase, 1 lowercase and be at least 6 characters long"
      );
      return;
    }

    handleRegister(email, password)
      .then(
        () => (
          updateProfile(auth.currentUser, profile),
          toast.success("register success")
        ),
        e.target.reset()
      )
      .catch((e) => toast.error(e.message));
  };

  let handleGoogle = () => {
    handleSigninGoogle()
      .then(
        () => toast.success("register success"),
      )
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="flex flex-col my-18">
      <div className="flex-1">
        <div className="m-auto flex items-center justify-center w-full ">
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
                  required
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
                  required
                  placeholder="Email"
                />
                <label className="label text-white">Password</label>
                <input
                  type="password"
                  className="input  outline-0 "
                  name="password"
                  required
                  placeholder="Password"
                />
                <div className="mt-3">
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn bg-linear-to-r from-purple-500 to-[#00a9ff] text-[16px] text-white font-semibold mt-4 w-full">
                  Register
                </button>
                <button
                  type="button"
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
                <p className="mt-4 text-yellow-400">
                  Opps! i Have a Account?{" "}
                  <Link to={"/login"} className="text-blue-400">
                    Please Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
