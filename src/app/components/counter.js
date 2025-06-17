'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState({ quote: '', author: '' });
  const [error, setError] = useState(null);

  const increment = () => setCount(count + 10);
  const decrement = () => setCount(count - 10);
  const reset = () => setCount(0);

  const fetchQuote = () => {
    setError(null); // Clear previous errors
    fetch('/api/quote')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => setQuote(data))
      .catch((error) => setError(error.message));
  };

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
        <button
          className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 hover:scale-110 transition duration-300"
          onClick={decrement}
        >
          -10
        </button>
        <button
          className="px-6 py-3 bg-gray-500 text-white font-bold rounded-lg shadow-md hover:bg-gray-600 hover:scale-110 transition duration-300"
          onClick={reset}
        >
          Reset
        </button>
        <button
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 hover:scale-110 transition duration-300"
          onClick={increment}
        >
          +10
        </button>
      </div>
      <div className="mt-6">
        <button
          className="px-6 py-3 bg-purple-500 text-white font-bold rounded-lg shadow-md hover:bg-purple-600 hover:scale-110 transition duration-300"
          onClick={fetchQuote}
        >
          Get Random Quote
        </button>
        {error ? (
          <div role="alert" className="alert alert-error mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error: {error}</span>
          </div>
        ) : quote.quote ? (
          <div role="alert" className="alert alert-info mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              "{quote.quote}" – <em>{quote.author}</em>
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}