import { useState } from "react";

export function RupeesConverter() {
    // Current rate as of Feb 26, 2026: 1 USD = 279.51 PKR
    const EXCHANGE_RATE = 279.51;
    const [state, setState] = useState({ pkr: EXCHANGE_RATE.toFixed(2), usd: 1 });

    const handlePkrChange = (val) => {
        const num = val.trim();
        setState({
            pkr: num,
            usd: num ? (num / EXCHANGE_RATE).toFixed(2) : ""
        });
    };

    const handleUsdChange = (val) => {
        const num = val.trim();
        setState({
            pkr: num ? (num * EXCHANGE_RATE).toFixed(2) : "",
            usd: num
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Currency Converter
                </h2>

                <div className="space-y-6">
                    {/* PKR Input */}
                    <div className="relative">
                        <label htmlFor="Rupees" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">
                            Pakistani Rupee
                        </label>
                        <div className="flex items-center border-2 border-gray-100 rounded-xl px-4 py-3 focus-within:border-blue-500 transition-all">
                            <span className="text-gray-400 font-medium mr-2">Rs</span>
                            <input 
                                type="number" 
                                id="Rupees" 
                                value={state.pkr}
                                onChange={(e) => handlePkrChange(e.target.value)}
                                className="w-full outline-none text-lg font-semibold text-gray-700 bg-transparent"
                                placeholder="0.00"
                            />
                            <span className="text-sm font-bold text-gray-400 ml-2">PKR</span>
                        </div>
                    </div>

                    {/* Divider Icon */}
                    <div className="flex justify-center -my-3 relative z-10">
                        <div className="bg-blue-600 p-2 rounded-full shadow-lg text-white">
                            <svg xmlns="http://www.w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                            </svg>
                        </div>
                    </div>

                    {/* USD Input */}
                    <div className="relative">
                        <label htmlFor="usd" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">
                            US Dollar
                        </label>
                        <div className="flex items-center border-2 border-gray-100 rounded-xl px-4 py-3 focus-within:border-green-500 transition-all">
                            <span className="text-gray-400 font-medium mr-2">$</span>
                            <input 
                                type="number" 
                                id="usd" 
                                value={state.usd}
                                onChange={(e) => handleUsdChange(e.target.value)}
                                className="w-full outline-none text-lg font-semibold text-gray-700 bg-transparent"
                                placeholder="0.00"
                            />
                            <span className="text-sm font-bold text-gray-400 ml-2">USD</span>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-center text-xs text-gray-400 italic">
                    Live Mid-market Rate: 1 USD = {EXCHANGE_RATE} PKR
                </p>
            </div>
        </div>
    );
}

export default RupeesConverter;
