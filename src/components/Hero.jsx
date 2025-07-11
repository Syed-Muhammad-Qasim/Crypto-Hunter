import React from 'react'

const Hero = ({searchQuery ,handleSearch}) => {

const handleInputChange = (event) =>{
   handleSearch(event.target.value)
}


  return (
    <div className="flex flex-col items-center w-full h-[400px] bg-[#FFCC00] gap-1 md:rounded-xl">
        <span className="px-10 pt-16 text-[#090040] text-5xl font-bold">
          Largest
        </span>
        <span className="text-center text-[#090040] text-5xl font-bold">
          Crypto MarketPlace
        </span>
        <span className=" mt-5 text-center px-10 text-[#090040] text-xl overflow-hidden w-[400px]  font-bold md:w-[450px] ">
          Welcome to the World's Largest crypto Currency MarketPlace Signup to
          explore more about Crypto
        </span>
        <span className="flex items-center mt-4 w-[350px] h-[35px] bg-white rounded ">
          <input
            placeholder="Search Crypto ..."
            className=" flex-1 h-full px-4 "
            value = {searchQuery}
            onChange = {handleInputChange}
          />
          <button className="h-full px-4 bg-[#090040] text-white font-semibold hover:bg-[#471396] ">
            Search
          </button>
        </span>
      </div>
  )
}

export default Hero