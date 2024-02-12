import React from "react";
import kanban from "../assets/kb.png"
import previous from "../assets/previous.png"
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    return (
      <div className="h-screen relative">
        <div onClick={() => { navigate(-1) }} className="absolute z-10 top-4 left-2 w-10 cursor-pointer">
          <img width="50" src={previous} alt="" />
        </div>
        <div className="bg-[#C7C8CC] absolute w-full px-2 sm:px-6 lg:px-8 flex h-[10%] items-center justify-center text-3xl font-semibold text-gray-700 shadow-sm shadow-[#42403b]">
          Kanban Board
        </div>
        <div className="h-[100%] bg-[#B4B4B8] w-full flex flex-col sm:flex-row justify-evenly">
          <div className=" w-[100%] sm:w-[60%] sm:h-[100%] flex flex-col justify-center">
            <form className="w-[90%] mx-auto mt-[17%] sm:mt-[5%] border-2 border-[#605e5e] p-3 md:p-14 py-7 sm:py-11 md:p-13 flex flex-col justify-start text-[#38362c] text-lg bg-[#a0a0a3] rounded-lg">
            <label className="w-full" htmlFor="username">
                Username (required)
              </label>
              <input
                className="rounded-lg mb-3 sm:mb-8 h-10 p-4"
                id="username"
                type="text"
                placeholder="Username"
              />
              <label className="w-full" htmlFor="email">
                Email (required)
              </label>
              <input
                className="rounded-lg mb-3 sm:mb-8 h-10 p-4"
                id="email"
                type="email"
                placeholder="email"
              />
              <label className="w-full" htmlFor="password">
                password (required)
              </label>
              <input
                className="rounded-lg mb-5 sm:mb-10 h-10 p-4"
                id="password"
                type="password"
                placeholder="password"
              />
              <input
                className="bg-[#77776b] hover:bg-[#919181] w-full h-10 rounded-lg border-2 border-gray-500 cursor-pointer"
                type="submit"
                value="Sign up"
              />
            </form>
            <p className="text-center mt-1 text-[#38362c]">Already a member? <Link to="/login"><span className="text-blue-900 font-bold">Login</span></Link></p>
          </div>
          <div className="w-[100%] sm:w-[40%]  flex sm:flex-col sm:items-center justify-center">
            <img className="w-[300px] sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[250px]" width="400" src={kanban} alt="" />
          </div>
        </div>
      </div>
    );
}

export default Signup