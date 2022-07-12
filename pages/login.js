import React, { useEffect, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { validate } from 'email-validator';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
var passwordValidator = require('password-validator');

var schema = new passwordValidator();
schema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(2)
  .has()
  .not()
  .spaces();

function Login() {
  const router = useRouter();
  const [signUpOrLogin, setSignUpOrLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // router.push('/');
      }
    });
  }, [router]);
  const handleSubmitInput = async (e) => {
    e.preventDefault();
    const emailX = validate(email);
    const passX = schema.validate(password);
    // compare password and confirm-password
    if (password !== confirmPassword) {
      console.log('you pass need to be equal');
      return;
    }
    if (emailX && passX) {
      // create the new user here
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Automatic signed in
          // User are in
          // it will store in auth object
          // you might want to store some user information to database
          // since this is the firebase authentication only it wont store user info to the database
          const user = userCredential.user;
          const userName = user.email.slice(0, 5);
          console.log(user.email.slice(0, 5));
          await setDoc(doc(db, 'user', userCredential.user.uid), {
            name: userName,
            email: user.email,
            address: '',
          });
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          // router.push('/');
        })
        .catch((error) => {
          // if it is not went successfully
          // either let the user know that they did not successfully create account
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    } else {
      // if both password and email not pass-checked
      console.log('please use the correct format with email and password');
    }
  };
  console.log(email, password, confirmPassword);
  return (
    <div className="h-screen overflow-hidden flex pt-10 justify-center bg-[rgb(249,250,251)]">
      {signUpOrLogin ? (
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
              <span
                className="text-blue-600 font-semibold cursor-pointer hover:text-blue-500 transition-all duration-300"
                onClick={() => {
                  {
                    setSignUpOrLogin(false);
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                  }
                }}
              >
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <div className="bg-amber-400 py-2 text-center text-black font-semibold text-lg rounded-md mb-5 cursor-pointer">
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
      ) : (
        <div>
          <div className="text-center flex items-center justify-center">
            <img
              src="logowithbg.png"
              className="w-[100px] mb-5 rounded-lg"
              alt=""
            />
          </div>
          <div className="text-center flex flex-col gap-3 mb-8 ">
            <h1 className="text-4xl font-semibold ">Sign up</h1>
            <div>
              Or{' '}
              <span
                className="text-blue-600 font-semibold cursor-pointer hover:text-blue-500 transition-all duration-300"
                onClick={() => {
                  {
                    setSignUpOrLogin(true);
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                  }
                }}
              >
                Log in instead
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="py-3 px-3 border border-black/50 rounded-sm tracking-wide outline-none text-black"
                  placeholder="Password..."
                />
              </div>{' '}
              <div className="flex flex-col gap-2 mb-5">
                <label
                  htmlFor="confirmpassword"
                  className="text-lg font-semibold"
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id="confirmpassword"
                  className="py-3 px-3 border border-black/50 rounded-sm tracking-wide outline-none text-black"
                  placeholder="Confirm password..."
                />
              </div>
              <div className="flex items-center  gap-[50px] mb-5">
                <label htmlFor="rememberme" className="flex gap-3">
                  <input type="checkbox" name="rememberme" id="rememberme" />
                  <span> Remember me</span>
                </label>
                <p className="text-blue-700">Forgot your password?</p>
              </div>
              <div
                className="bg-amber-400 py-2 text-center text-black font-semibold text-lg rounded-md mb-5 cursor-pointer"
                onClick={(e) => handleSubmitInput(e)}
              >
                <button>Sign Up</button>
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
      )}
    </div>
  );
}

export default Login;
