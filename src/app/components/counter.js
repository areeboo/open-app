"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 10);
  const decrement = () => setCount(count - 10);
  const reset = () => setCount(0);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-2xl p-10 sm:p-14 max-w-lg mx-auto my-12 transition-colors">
      <div className="flex justify-center mb-4">
        <Image 
          src="/broly-counter-icon.png" 
          alt="Broly Counter Icon" 
          width={150}
          height={150}
          className=""
        />
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-100">Counter</h1>
      <div className="text-6xl font-bold mb-8 text-green-600 dark:text-green-400 drop-shadow">{count}</div>
      <div className="flex justify-center gap-6">
        <button className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 hover:scale-110 transition duration-300" onClick={decrement}>-10</button>
        <button className="px-6 py-3 bg-gray-500 text-white font-bold rounded-lg shadow-md hover:bg-gray-600 hover:scale-110 transition duration-300" onClick={reset}>Reset</button>
        <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 hover:scale-110 transition duration-300" onClick={increment}>+10</button>
      </div>
    </div>
  );
}
