import { createContext, useContext, useState, useEffect } from "react";

const CryptoDataContext = createContext();

export const CryptoDataProvider = ({ children }) => {
  const [country, setCountry] = useState("USD");
  const getURL = (country) => {
    if (country === "USD") {
      return "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=1";
    } else if (country === "INR") {
      return "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=250&page=1";
    } else if (country === "EUR") {
      return "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=250&page=1";
    }
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": " CG-YQFH7WqKpd8JNCPXj4jCuUuB",
    },
  };

  const [coinData, setData] = useState([]);

  const fetchdata = async () => {
    const res = await fetch(getURL(country), options);
    const data = await res.json();
    setData(data);
    console.log(data)
  };

  useEffect(() => {
    fetchdata();
  }, [country]);

  return (
    <CryptoDataContext.Provider
      value={{ coinData, country, setCountry, getURL }}
    >
      {children}
    </CryptoDataContext.Provider>
  );
};

export const useCryptoData = () => useContext(CryptoDataContext);
