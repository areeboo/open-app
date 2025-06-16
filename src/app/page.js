"use client";

import Link from 'next/link';
import Counter from './components/counter';

export default function Home() {
  return (
    <div>
      <Counter />
      <div className="mt-8 text-center">
        <Link href="/next-page" className="text-blue-500 hover:underline">
          Go to Next Page
        </Link>
      </div>
    </div>
  );
}
