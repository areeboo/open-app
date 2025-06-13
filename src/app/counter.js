'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 10);
  const decrement = () => setCount(count - 10);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-base-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-primary">Count: {count}</h2>
      <div className="flex gap-2">
        <button onClick={decrement} className="btn btn-secondary">
          -10
        </button>
        <button onClick={reset} className="btn btn-accent">
          Reset
        </button>
        <button onClick={increment} className="btn btn-primary">
          +10
        </button>
      </div>
    </div>
  );
}