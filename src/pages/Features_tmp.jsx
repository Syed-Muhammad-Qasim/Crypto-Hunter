import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cryptotable from "../components/Cryptotable";
import { useState } from "react";
import { useCryptoData } from "../context/CryptoDataContext";
const Features_tmp = () => {
    const [searchQuery, setSearch] = useState("");

    const handleSearch = (query) => {
      setSearch(query);
    };
    const { coinData, country, setCountry, getURL } = useCryptoData();
  return (
    <div>
    <Navbar setCountry={setCountry} />
    <div className="bg-gradient-to-r from-[#1a0033] to-[#2d004d] w-full min-h-screen space-y-2 md:p-3 lg:p-4">
      <Hero searchQuery={searchQuery} handleSearch={handleSearch} />
      <Cryptotable
        getURL={getURL}
        country={country}
        searchQuery={searchQuery}
        coinData={coinData}
      />
    </div>
  </div>
  )
}

export default Features_tmp