/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL_CRYPTO } from "@/lib/constant"
import InstrumentCard, { InstrumentCardProps } from "./CryptoCard"
import { useEffect, useState } from "react";

const InstrumentCardLists = () => {
     const [data, setData] = useState<InstrumentCardProps[] | undefined>();
      const [loading, setLoading] = useState<boolean>(false);
      const [error, setError] = useState<string | null>(null);

      const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(`${BASE_URL_CRYPTO}?vs_currency=usd`);
          const data = await response.json();
          setData(data);
        } catch (err: any) {
          setError(err?.response?.data?.message || err.message || "Failed to fetch data");
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        fetchData();
      }, [])

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {loading && <p>Loading...</p>}
      {data && data?.map((data: InstrumentCardProps) => (
        <InstrumentCard key={data.name} {...data} />
      ))}
    </div>
  )
}

export default InstrumentCardLists
