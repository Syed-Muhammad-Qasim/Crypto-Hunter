import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Details = ({ getURL, country, coinData }) => {
  const { id } = useParams();
  const coin = coinData.find((c) => c.id === id);

  const getCurrencySymbol = (country) => {
    if (country === "USD") return "$";
    if (country === "INR") return "₹";
    if (country === "EUR") return "€";
    return "$";
  };

  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChartData() {
      setLoading(true);
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
      );
      const data = await res.json();
      setChartData({
        labels: data.prices.map((price) => {
          const date = new Date(price[0]);
          return `${date.getMonth() + 1}/${date.getDate()}`;
        }),
        datasets: [
          {
            label: "Price (USD)",
            data: data.prices.map((price) => price[1]),
            borderColor: "#ffd700",
            backgroundColor: "rgba(230,204,255,0.1)",
            pointBackgroundColor: "#ffd700",
            pointBorderColor: "#ffd700",
            tension: 0.2,
          },
        ],
      });
      setLoading(false);
    }
    fetchChartData();
  }, [id]);

  return (
    <div className="mx-auto w-full max-w-2xl min-h-screen">
      <div className="flex flex-col items-center justify-center pt-24">
        <span>
          <img src={coin?.image} alt="" className="w-[120px] h-[120px]" />
        </span>
        <span className="text-[#ffd700] font-bold text-4xl">
          {coin?.name} - ({coin?.symbol.toUpperCase()})
        </span>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="bg-gradient-to-r from-[#1a0033] to-[#2d004d] rounded-xl shadow-lg p-8 w-full max-w-2xl mt-8 border border-[#4a0080]">
          <h3 className="text-[#ffd700] text-2xl font-semibold mb-4 text-center">
            7 Day Price Chart
          </h3>
          {loading ? (
            <div className="text-[#ffd700] text-center py-8">
              Loading chart...
            </div>
          ) : chartData ? (
            <Line
              data={chartData}
              options={{
                plugins: {
                  legend: { labels: { color: "#ffd700" } },
                },
                scales: {
                  x: {
                    ticks: { color: "#e6ccff" },
                    grid: { color: "rgba(230,204,255,0.1)" },
                  },
                  y: {
                    ticks: { color: "#e6ccff" },
                    grid: { color: "rgba(230,204,255,0.1)" },
                  },
                },
                layout: {
                  backgroundColor: "#1a0033",
                },
              }}
            />
          ) : (
            <div className="text-red-700 text-center py-8">
              Chart data not available.
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center w-full ">
        <div className="rounded-xl shadow-lg w-full max-w-2xl p-8 mt-4 bg-gradient-to-r from-[#2d004d] to-[#4a0080] border border-[#4a0080]">
          <div className="flex flex-col gap-4">
            <ul className="text-xl text-[#ffd700] flex justify-between gap-20 px-4 my-4">
              <li>Crypto Market rank</li>
              <li>{coin?.market_cap_rank}</li>
            </ul>
            <hr className="w-full h-[2px] bg-[#4a0080] mb-2" />
            <ul className="text-xl text-[#e6ccff] flex justify-between gap-20 px-4 my-4">
              <li>Current Price</li>
              <li>
                {getCurrencySymbol(country)}
                {coin?.current_price}
              </li>
            </ul>
            <hr className="w-full h-[2px] bg-[#4a0080] mb-2" />
            <ul className="text-xl text-[#e6ccff] flex justify-between gap-20 px-4 my-4">
              <li>Market Cap</li>
              <li>
                {getCurrencySymbol(country)}
                {coin?.market_cap}
              </li>
            </ul>
            <hr className="w-full h-[2px] bg-[#4a0080] mb-2" />
            <ul className="text-xl text-[#e6ccff] flex justify-between gap-20 px-4 my-4">
              <li>24 Hour Change</li>
              <li>
                {getCurrencySymbol(country)}
                {coin?.price_change_percentage_24h}%
              </li>
            </ul>
            <hr className="w-full h-[2px] bg-[#4a0080] mb-2" />
            <ul className="text-xl text-[#e6ccff] flex justify-between gap-20 px-4 my-4">
              <li>24 Hour High</li>
              <li>
                {getCurrencySymbol(country)}
                {coin?.high_24h}
              </li>
            </ul>
            <hr className="w-full h-[2px] bg-[#4a0080] mb-2" />
            <ul className="text-xl text-[#e6ccff] flex justify-between gap-20 px-4 my-4">
              <li>24 Hour Low</li>
              <li>
                {getCurrencySymbol(country)}
                {coin?.low_24h}
              </li>
            </ul>
            <hr className="w-full h-[2px] bg-[#4a0080] mb-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
