'use server';

import axios from "axios";

export const fetchCryptoData = async () => {
  const response = await axios.get(`${process.env.BASE_URL_CRYPTO}/coins/markets`, {
    params: { vs_currency: "usd" },
  });
  return response.data;
};

export const fetchCryptoDataById = async (query: string) => {
  const response = await axios.get(`${process.env.BASE_URL_CRYPTO}/coins/markets`, {
    params: { vs_currency: "usd", ids: query },
  });
  return response.data;
};

export const fetchStockData = async (symbol: string) => {
  const response = await axios.get(`https://www.alphavantage.co/query`, {
    params: { function: "TIME_SERIES_DAILY", symbol, apikey: 'TKI1LI72JJVU44S1' },
  });
  fetch("htts://www.alphavantage.co/query?query=TIME_SERIES_DAILY&symbol=IBM&apikey=TKI1LI72JJVU44S1")
  return response.data
};

export const fetchCryptoLists = async () => {
  const response = await axios.get(`${process.env.BASE_URL_CRYPTO}/coins/list`);
  return response.data;
}