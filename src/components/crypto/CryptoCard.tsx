import React from 'react'

export interface InstrumentCardProps {
    name: string;
    symbol: string;
    price_change_percentage_24h: number;
    market_cap: number;
}

const InstrumentCard = ({ name, symbol, price_change_percentage_24h, market_cap }: InstrumentCardProps) => {
    return (
        <div className="coin-card p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold">{name} ({symbol})</h2>
            <p className="text-gray-700">Price: ${price_change_percentage_24h.toFixed(2)}</p>
            <p className="text-gray-700">Market Cap: ${market_cap.toLocaleString()}</p>
        </div>
    );
};

export default InstrumentCard;
