import React, { useEffect, useState } from "react";
import { Link } from "react-router";
const Cryptotable = ({ getURL, country, searchQuery, coinData }) => {
  const getCurrencySymbol = (country) => {
    if (country === "USD") return "$";
    if (country === "INR") return "₹";
    if (country === "EUR") return "€";
    return "$";
  };

  const filteredData = coinData.filter((item) => {
    if (!searchQuery) {
      return true;
    }
    const query = searchQuery.toLowerCase();
    const name = (item.name || "").toLowerCase();
    const symbol = (item.symbol || "").toLowerCase();

    return name.includes(query) || symbol.includes(query);
  });

  const displayData = filteredData.slice(0, 10);

  return (
    <div className="mx-auto w-full min-h-screen py-2 overflow-x-auto">
      <div className="mx-auto rounded-lg w-full max-w-7xl px-2 md:px-0 md:w-[750px] lg:w-[850px] xl:w-[1000px]">
        <div className="grid grid-cols-5 bg-gradient-to-r from-[#1a0033] to-[#2d004d] text-[#ffd700] font-bold text-xs md:text-sm">
          <div className="p-2 md:p-4 border-r border-[#4a0080] text-center">
            #
          </div>
          <div className="p-2 md:p-4 border-r border-[#4a0080] text-left">
            Coins
          </div>
          <div className="p-2 md:p-4 border-r border-[#4a0080] text-left">
            Price
          </div>
          <div className="p-2 md:p-4 border-r border-[#4a0080] text-left">
            24H Change
          </div>
          <div className="p-2 md:p-4 text-left">Market Cap</div>
        </div>
        {displayData.map((item, index) => {
          return (
            <Link to={`/info/${item.id}`}>
              <div
                key={item.id}
                className="grid grid-cols-5 bg-gradient-to-r from-[#2d004d] to-[#4a0080] text-white font-bold text-xs md:text-sm hover:from-[#3a0066] hover:to-[#5a0099] transition-all duration-300"
              >
                <div className="p-2 md:p-4 border-r border-[#4a0080] text-center">
                  {item?.market_cap_rank}
                </div>
                <div className="p-2 md:p-4 border-r border-[#4a0080] text-left md:flex flex-row gap-2">
                  <img
                    src={item?.image}
                    alt=""
                    className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
                  />
                  <span className="hidden md:inline">
                    {item?.name} - {item?.symbol}
                  </span>
                  <span className="md:hidden">{item?.symbol}</span>
                </div>
                <div className="p-2 md:p-4 border-r border-[#4a0080] text-left">
                  {getCurrencySymbol(country)}
                  {item?.current_price}
                </div>
                <div
                  className={`p-2 md:p-4 border-r border-[#4a0080] text-left ${
                    item?.price_change_percentage_24h < 0
                      ? "text-red-400"
                      : "text-green-400"
                  }`}
                >
                  {item?.price_change_percentage_24h?.toFixed(2)}%
                </div>
                <div className="p-2 md:p-4 text-left truncate">
                  {getCurrencySymbol(country)}
                  {item?.market_cap?.toLocaleString()}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cryptotable;
