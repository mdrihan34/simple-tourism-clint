import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../provaider/AuthProvaider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [show, setShow] = useState(false);
  const {createUser} = useContext(AuthContext)
  const handleLogin = (e) => {

    e.preventDefault();
    const name = e.target.name.value 
    const  photo = e.target.photo.value 
    const email = e.target.email.value 
    const password = e.target.password.value 
    console.log(name,photo,email,password)
   
    
    createUser(email,password)
    .then(result =>{
      updateProfile(result.user,{
        displayName: name, photoURL: photo
      })
      updateProfile(result.user, {
        displayName: name, photoURL: photo
      })
        console.log(result.user)
    })
    .catch(error =>{
        console.error(error)
    })
    
  };
  return (
    <div>
      <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12  lg:w-full">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative lg:px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto lg:p-9">
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-black">
                  Please Register Your Account
                </h1>
              </div>

              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <form onSubmit={handleLogin}>
                    <label className="form-control w-full max-w-xs">
                      <div className="label grid grid-cols-1 space-y-2">
                        <span className="label-text text-xl">Name</span>
                        <input
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          className="input input-bordered w-full max-w-xs bg-gray-200"
                        />
                      </div>
                      <div className="label grid grid-cols-1 space-y-2">
                        <span className="label-text text-xl">Email</span>
                        <input
                          name="email"
                          type="email"
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs bg-gray-200"
                        />
                      </div>
                      <div className="label grid grid-cols-1 space-y-2">
                        <span className="label-text text-xl">PhotoURL</span>
                        <input
                          name="photo"
                          type="text"
                          placeholder="PhotoURL"
                          className="input input-bordered w-full max-w-xs bg-gray-200"
                        />
                      </div>
                      <div className="label grid  space-y-2">
                        <span className="label-text text-xl">Password</span>
                        <div className="input input-bordered w-[298px] bg-gray-200 flex justify-between">
                          <input
                            name="password"
                            type={show ? "text" : "password"}
                            placeholder="password"
                          />
                          <span className="pt-4" onClick={() => setShow(!show)}>
                            {show ? <IoEyeSharp /> : <AiFillEyeInvisible />}
                          </span>
                        </div>
                      </div>
                    </label>
                    <button  className="bg-blue-500 text-white rounded-md px-2 py-1">
                      Register
                    </button>
                  </form>

                  <div className="relative space-y-4">
                    <p>
                      I have an account ?
                      <Link className="text-green-500" to="/login">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
