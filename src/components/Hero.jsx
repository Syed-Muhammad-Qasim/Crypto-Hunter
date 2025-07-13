import React from "react";

const Hero = ({ searchQuery, handleSearch }) => {
  const handleInputChange = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <div className="flex flex-col items-center w-full h-[525px] bg-gradient-to-br from-[#1a0033] to-[#4a0080] gap-1 md:rounded-xl md:h-[450px]">
      <span className="px-10 pt-16 text-[#ffd700] text-5xl font-bold">
        Largest
      </span>
      <span className="text-center text-[#ffd700] text-5xl font-bold">
        Crypto MarketPlace
      </span>
      <span className=" mt-5 text-center px-10 text-[#e6ccff] text-xl overflow-hidden w-[400px]  font-bold md:w-[450px] ">
        Welcome to the World's Largest crypto Currency MarketPlace Signup to
        explore more about Crypto
      </span>
      <span className="flex items-center mt-4 w-[350px] h-[35px] bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-2xl">
        <input
          placeholder="Search Crypto ..."
          className=" flex-1 h-full px-4 bg-transparent text-white placeholder-gray-300"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="h-full px-4 bg-[#ffd700] text-[#1a0033] font-semibold hover:bg-[#ffed4e] rounded-r-lg transition-all duration-300">
          Search
        </button>
      </span>
    </div>
  );
};

export default Hero;
