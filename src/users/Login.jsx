import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';  // Import toast
import { IoEyeSharp } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Use useNavigate here
import { AuthContext } from "../provaider/AuthProvaider";

const Login = () => {
  const [show, setShow] = useState(false);
  const { singInUser, singInWhithGoogle, signInWithGithab } = useContext(AuthContext);
  const navigate = useNavigate();  
  const location = useLocation();
  const [error, setError] = useState(""); // Store error message

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    singInUser(email, password)
      .then(result => {
       
        navigate(location?.state?.from || '/');
        console.log(result);
      })
      .catch(error => {
      
        setError("Invalid email or password. Please try again.");
        toast.error("Invalid email or password. Please try again.");  
        console.error("Login failed:", error);
      });
  };

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 lg:w-full">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <form onSubmit={handleLogin}>
          <div className="relative lg:px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto lg:p-9">
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-black">Please Login Your Account</h1>
              </div>
              <div className="flex gap-5 mt-4">
                <button onClick={() => singInWhithGoogle()} className="btn bg-gray-50 text-lime-500">
                  <FaGoogle /> Login with Google
                </button>
                <button onClick={() => signInWithGithab()} className="btn bg-gray-50 text-lime-500">
                  <FaGithub /> Login with Github
                </button>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 bg-white"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative flex">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type={show ? "text" : "password"}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 bg-white"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                    <button onClick={() => setShow(!show)}>
                      {show ? <IoEyeSharp /> : <AiFillEyeInvisible />}
                    </button>
                  </div>
                  <div className="relative space-y-4">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">Login</button>
                    <p>
                      Don’t have an account yet?
                      <Link to="/register" className="text-green-500">
                        Register
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer className="text-red-700" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
