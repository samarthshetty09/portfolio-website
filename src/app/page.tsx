'use client';


import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Home() {

  const [animation, setAnimation] = useState('');
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    setAnimation('slide-down');
    setTimeout(() => {
      router.push('/main');
    }, 500);
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${animation}`}>
      <div className="flex min-h-screen bg-[]">
        <div className="mx-auto">
          <div className="mx-auto mb-[40px] mt-[98px] h-[213px] w-[213px] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
            {/* <img src="https://i.imgur.com/4U5tBXC.png" alt="" /> */}
          </div>
          <h1 className="max-w-screen-sm text-center text-[55px] font-extrabold text-white">
            Samarth Shetty <br />
            Software <span className='text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]"'>Engineer</span>
          </h1>
          <p className="mx-auto mt-[40px] mb-[54px] text-[18px] font-light text-[#C5C5C5] text-center max-w-lg">
            Hi👋 Welocme to my website, I am a Computer Science Graduate Student at North Carolina State University, with over 2 years of Industry Experience as a Full Stack Software Engineer. I have expertise in developing high performance, scalable and concurrent full stack architectures.
          </p>
          <a href="/main" onClick={handleClick} className="mt-8">
            <svg className="mx-auto w-10 h-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </a>
          {/* <div className="text-center">
            <button className="text-gray-800 inline-block px-[30px] py-[16px] mr-[18px] bg-white rounded-full font-semibold text-[22px]">Learn More</button>
            <button className="text-white inline-block px-[30px] py-[16px] bg-transparent border-2 rounded-full font-semibold text-[22px]">Download CV</button>
          </div> */}
        </div>
      </div>
    </main >
  );
}
