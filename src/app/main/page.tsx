'use client';  // Add this line at the top

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MainPage() {
  const [animation, setAnimation] = useState('');
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    setAnimation('slide-up');
    setTimeout(() => {
      router.push('/');
    }, 500);
  };

  return (
    <div className={`h-screen flex items-center justify-center text-white ${animation}`}>
      <h1 className="text-5xl font-bold mb-8">This is the Second Page</h1>
    </div>
  );
}
