import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
const Navbar = ({ setCountry }) => {
  return (
    <div className="bg-gradient-to-r from-[#1a0033] to-[#2d004d] w-full h-[75px] text-white gap-2 px-4 py-5 flex flex-row border-b-2 border-[#4a0080]">
      <span className="w-[160px] ml-6">
        <img src="/logo.png" alt="" className="" />
      </span>
      <div className="hidden md:flex h-[35px] text-lg flex-row  pl-16 ml-6 lg:ml-32 space-x-12 xl:ml-46 xl:space-x-24">
        <Link to="/">
          <button className="hover:text-[#ffd700] transition-colors duration-300">
            {" "}
            Home
          </button>
        </Link>
        <Link to="/features">
          <button className="hover:text-[#ffd700] transition-colors duration-300">
            Features
          </button>
        </Link>
        <Link to="/pricing">
          <button className="hover:text-[#ffd700] transition-colors duration-300">
            Pricing
          </button>
        </Link>
        <Link to="/blog">
          <button className="hover:text-[#ffd700] transition-colors duration-300">
            Blog
          </button>
        </Link>
      </div>
      <span className="flex flex-row gap-2 ml-auto ">
        <select
          className="border-2 bg-[#2d004d] border-[#4a0080] w-[80px] flex flex-row text-center gap-1 py-1 px-2 text-white"
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
        <button className="hidden md:flex bg-[#ffd700] text-[#1a0033] w-[135px] text-center rounded-full flex-row gap-1 py-1 pl-8 font-semibold hover:bg-[#ffed4e] transition-colors duration-300">
          SignUp <ArrowUpRight className="w-[20px]" />
        </button>
      </span>
    </div>
  );
};

export default Navbar;
