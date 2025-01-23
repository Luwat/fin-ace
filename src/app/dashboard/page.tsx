'use client';

import { useState } from "react";
import { fetchCryptoData, fetchStockData } from "@/lib/api";
import SearchBar from "@/components/SearchBar";

export default function Dashboard() {
  interface CryptoData {
    name: string;
    current_price: number;
    market_cap: number;
    price_change_percentage_24h: number;
  }

  const [data, setData] = useState<CryptoData | null>(null);

  const handleSearch = async (query: string) => {
    try {
      const cryptoData = await fetchCryptoData(query);
      const stockData = await fetchStockData(query);
      console.log(cryptoData)
      setData(cryptoData); // Simplified for demo purposes
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <SearchBar onSearch={handleSearch} />
      {data && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-lg font-bold">{data.name}</h3>
          <p>Price: ${data.current_price}</p>
          <p>Market Cap: ${data.market_cap}</p>
          <p>24h Change: {data.price_change_percentage_24h}%</p>
        </div>
      )}
    </div>
  );
}
