
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
const Cryptotable = ({ getURL, country, searchQuery, coinData}) => {
  

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

  const displayData=filteredData.slice(0,10);

  return (
    <div className=" w-full min-h-screen py-8">
      <div className="mx-auto rounded-lg w-[450px] md:w-[750px] lg:w-[850px] xl:w-[1000px]">
        <div className="grid grid-cols-5 bg-[#1e293b] text-[#FFCC00] font-bold text-sm">
          <div className="p-4 border-r border-[#334155] text-center">#</div>
          <div className="p-4 border-r border-[#334155] text-left">Coins</div>
          <div className="p-4 border-r border-[#334155] text-left">Price</div>
          <div className="p-4 border-r border-[#334155] text-left">
            24H Change
          </div>
          <div className="p-4 text-left">Market Cap</div>
        </div>
        {displayData.map((item, index) => {
          return (
            <Link to={`/info/${item.id}`}>
            <div
              key={item.id}
              className="grid grid-cols-5 bg-[#27304a] text-white font-bold text-sm"
            >
              <div className="p-4 border-r border-[#334155] text-center">
                {item?.market_cap_rank}
              </div>
              <div className="p-4 border-r border-[#334155] text-left md:flex flex-row gap-2">
                <img src={item?.image} alt="" className=" w-[30px] h-[30px]" />
                {item?.name} - {item?.symbol}
              </div>
              <div className="p-4 border-r border-[#334155] text-left">
                {getCurrencySymbol(country)}
                {item?.current_price}
              </div>
              <div
                className={`p-4 border-r border-[#334155] text-left ${
                  item?.price_change_percentage_24h < 0
                    ? "text-red-500"
                    : "text-green-400"
                }`}
              >
                {item?.price_change_percentage_24h}
              </div>
              <div className="p-4 text-left truncate">
                {" "}
                {getCurrencySymbol(country)}
                {item?.market_cap.toLocaleString()}
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
