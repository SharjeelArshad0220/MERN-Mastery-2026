import { useState } from "react";
export default function ToggleState() {
    const [isOn, setIsOn] = useState(false);
    const toggle = () => {        setIsOn(prev => !prev);
    }
    return (
        <div className="p-10 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Toggle State Example</h1>
            <div className="flex justify-center">
                <button onClick={toggle} className={`px-6 py-3 rounded-lg text-white font-semibold ${isOn ? 'bg-green-500' : 'bg-gray-500'}`}>
                    {isOn ? 'ON' : 'OFF'}
                </button>
            </div>
        </div>
    )
}