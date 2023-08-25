import React, { useState } from "react";
import LoginPageImage from "../../images/Characters.svg";
import like from "../../images/love.png";
import comment from "../../images/comments.png";
import share from "../../images/network.png";
import logo from "../../images/Logo.png";
import Google from "../../images/google.png";
import Facebook from "../../images/facebook.png";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useForm } from "react-hook-form";
import {
  Login,
  userRegister,
  AuthGoogle,
  AuthFacebook,
} from "./AuthLogic/authLogic";
import Loader from "../../components/Loader";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [addName, setAddName] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const Authantication = async (data) => {
    // console.log(data);
    setIsLoading(true);
    addName
      ? userRegister({
          email: data.email,
          password: data.password,
          setIsLoading: setIsLoading,
        })
      : Login({
          email: data.email,
          password: data.password,
          setIsLoading: setIsLoading,
        });
  };
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      {/* LeftSide of LoginPage */}
      <div className="w-[50vw] h-[100vh] bg-[#004cef] flex flex-col justify-between items-center rounded-r-2xl py-9">
        <div className="absolute h-96 w-96 bg-gradient-to-b from-[#ffffff58] to-[#ffffff17] rounded-full top-56 "></div>

        <div className="absolute flex flex-col items-center justify-evenly h-96 top-56">
          <img src={like} width={60} className="" />
          <img src={comment} width={60} className="" />
          <img src={share} width={60} className="" />
        </div>

        <div className="flex flex-col justify-center items-center ">
          <p className="text-white font-semibold text-[40px]">
            Welcome to BuddyHub
          </p>
          <p className="text-[#8ebeed] text-[15px] w-[60%] text-center">
            Like, comment, share, and post photos and videos. Connect with
            friends, sharing moments, laughter, and memories!
          </p>
        </div>
        <img src={LoginPageImage} width={460} className="z-10" />
      </div>
      {/* RightSide of LoginPage */}
      <div className="w-[50vw] h-[100vh] flex flex-col justify-center items-start rounded-r-lg py-9">
        <div className="w-[70%] mx-auto flex flex-col justify-evenly h-full items-start">
          <div className="flex flex-col justify-center items-start">
            <div className="flex gap-3 justify-center items-start mb-3">
              <img src={logo} width={40} />
              <p className="text-[30px] ">BuddyHub</p>
            </div>
            {addName ? (
              <p className="text-[40px] font-semibold">Welcome to BuddyHub</p>
            ) : (
              <p className="text-[40px] font-semibold">Login to your Account</p>
            )}
            {addName ? (
              <p className="text-[16px] text-[#a39c9c]">
                Welcome to BuddyHub! Select method to Register:
              </p>
            ) : (
              <p className="text-[16px] text-[#a39c9c]">
                Welcome back! Select method to log in:
              </p>
            )}
          </div>
          <div className="flex justify-evenly items-center w-full">
            <div
              onClick={() => AuthGoogle()}
              className="flex gap-1 cursor-pointer justify-center items-center border-2 border-solid border-[#d6cfcf] px-12 py-2 rounded-md"
            >
              <img src={Google} width={25} />
              <p className="text-[19px] text-[#1c1a1a] font-semibold">Google</p>
            </div>
            <div
              onClick={() => AuthFacebook()}
              className="flex gap-1 cursor-pointer justify-between items-center border-2 border-solid border-[#d6cfcf] px-12 py-2 rounded-md"
            >
              <img src={Facebook} width={25} />
              <p className="text-[19px] text-[#1c1a1a] font-semibold">
                Facebook
              </p>
            </div>
          </div>
          <div className="flex justify-evenly items-center w-full">
            <div className="h-[1px] bg-[#a39c9c] w-[30%]"></div>
            <p className="text-[#a4a0a0]">or continue with email</p>
            <div className="h-[1px] bg-[#a39c9c] w-[30%]"></div>
          </div>

          <form
            onSubmit={handleSubmit(Authantication)}
            className="flex flex-col justify-center items-center w-full gap-2"
          >
            <div className="flex flex-col justify-center items-center w-full gap-2">
              {addName && (
                <div className="w-[83%]">
                  <OutlinedInput
                    className="w-full"
                    startAdornment={
                      <InputAdornment className="text-[gray]" position="start">
                        <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
                      </InputAdornment>
                    }
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
              )}
              <div className="w-[83%]">
                <OutlinedInput
                  className="w-full"
                  startAdornment={
                    <InputAdornment className="text-[gray]" position="start">
                      <MailOutlineIcon></MailOutlineIcon>
                    </InputAdornment>
                  }
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="w-[83%]">
                <OutlinedInput
                  className="w-full pl-3"
                  startAdornment={
                    <InputAdornment className="text-[gray]" position="start">
                      <LockOutlinedIcon></LockOutlinedIcon>
                    </InputAdornment>
                  }
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        className="text-[gray]"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">Password is required</span>
                )}
              </div>
              <div className="w-full flex justify-center items-center"></div>
              <div className="w-[83%] flex justify-end items-center">
                <a className="text-[#004cef] cursor-pointer">
                  Forgot Passowrd?
                </a>
              </div>
              <div className="w-full flex flex-col gap-4 items-center justify-center">
                {isLoading ? (
                  <div className="w-[83%] flex cursor-pointer justify-center items-center bg-[#004cef] hover:bg-[#406dcd] transition-colors duration-200 py-3 text-white rounded-lg font-semibold">
                    <Loader />
                  </div>
                ) : (
                  <input
                    type="submit"
                    value={addName ? "Register" : "LogIn"}
                    className="w-[83%] flex cursor-pointer justify-center items-center bg-[#004cef] hover:bg-[#406dcd] transition-colors duration-200 py-3 text-white rounded-lg font-semibold"
                  />
                )}
                {addName ? (
                  <p>
                    Already have an account?{" "}
                    <span
                      className="text-[#004cef]"
                      onClick={() => setAddName(false)}
                    >
                      LogIn
                    </span>
                  </p>
                ) : (
                  <p>
                    Don't have an account?{" "}
                    <span
                      className="text-[#004cef]"
                      onClick={() => setAddName(true)}
                    >
                      Create an account
                    </span>
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
