'use client';

import InstrumentCardLists from "@/components/crypto/CryptoCardLists";
// import { useState } from "react";
// import { fetchCryptoData, fetchCryptoDataById, fetchStockData } from "@/lib/api";
// import SearchBar from "@/components/SearchBar";
// import InstrumentCard from "@/components/InstrumentCard";
// import { useFetchData } from "@/hooks/useFetchData";

export default function DashboardPage() {
  // interface CryptoData {
  //   name: string;
  //   current_price: number;
  //   market_cap: number;
  //   price_change_percentage_24h: number;
  // }
  // const query = '';
  // const {data, loading, error, refetch} = useFetchData<CryptoData>('https://api.coingecko.com/api/v3/coins/markets', undefined, {vs_currency: 'usd', ids: query});


  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      {/* <SearchBar onSearch={() => refetch(query)} /> */}
      
      {/* {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Loading...</p>}
      {data && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-lg font-bold">{data.name}</h3>
          <p>Price: ${data.current_price}</p>
          <p>Market Cap: ${data.market_cap}</p>
          <p>24h Change: {data.price_change_percentage_24h}%</p>
        </div>
      )} */}

      <InstrumentCardLists />
      
    </div>
  );
}
