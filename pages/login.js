import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
function Login() {
  return (
    <div className="h-screen overflow-hidden flex pt-10 justify-center bg-[rgb(249,250,251)]">
      <div>
        <div className="text-center flex items-center justify-center">
          <img
            src="logowithbg.png"
            className="w-[100px] mb-5 rounded-lg"
            alt=""
          />
        </div>
        <div className="text-center flex flex-col gap-3 mb-8 ">
          <h1 className="text-4xl font-semibold ">Sign into your account</h1>
          <div>
            Or{' '}
            <span className="text-blue-600 font-semibold ">
              create account here
            </span>
          </div>
        </div>
        <div className="bg-white  px-10 py-10 shadow-md shadow-gray-300 rounded-md">
          <form action="">
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="email" className="text-lg font-semibold">
                Email address:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="py-3 border px-3 border-black/50 rounded-sm tracking-wide outline-none text-black "
                placeholder="Email..."
              />
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="password" className="text-lg font-semibold">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="py-3 px-3 border border-black/50 rounded-sm tracking-wide outline-none text-black"
                placeholder="Email..."
              />
            </div>
            <div className="flex items-center  gap-[50px] mb-5">
              <label htmlFor="rememberme" className="flex gap-3">
                <input type="checkbox" name="rememberme" id="rememberme" />
                <span> Remember me</span>
              </label>
              <p className="text-blue-700">Forgot your password?</p>
            </div>
            <div className="bg-amber-400 py-2 text-center text-black font-semibold text-lg rounded-md mb-5">
              <button>Sign in</button>
            </div>
            <div className="flex items-center mb-5">
              <hr className="flex-[1]" />
              <p className="flex-1 text-sm text-gray-600 text-center">
                Or continue with
              </p>
              <hr className="flex-[1]" />
            </div>
            <div className="flex items-center gap-3 text-center">
              <div className="flex-1 border border-black/30 py-3 rounded-md">
                <GoogleIcon />
              </div>
              <div className="flex-1 border border-black/30 py-3 rounded-md">
                <FacebookIcon />
              </div>
              <div className="flex-1 border border-black/30 py-3 rounded-md">
                <GitHubIcon />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
