import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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

          <svg className="mx-auto animate-bounce w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          {/* <div className="text-center">
            <button className="text-gray-800 inline-block px-[30px] py-[16px] mr-[18px] bg-white rounded-full font-semibold text-[22px]">Learn More</button>
            <button className="text-white inline-block px-[30px] py-[16px] bg-transparent border-2 rounded-full font-semibold text-[22px]">Download CV</button>
          </div> */}
        </div>
      </div>
    </main >
  );
}
