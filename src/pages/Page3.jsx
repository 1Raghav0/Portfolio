import React from "react";

const Page3 = () => {
  return (
    <>
      <div className="h-screen relative p-10 bg-white">
        <div className="h-full w-full bg-black overflow-hidden rounded-2xl">
          <video
            autoPlay={true}
            loop
            muted
            object-cover
            src="./src/assets/Moon.mp4"
            className="h-full w-full object-contain"
          ></video>
          <div className="ml-10 text-8xl absolute uppercase top-20 left-10">
            <h1 className="font-[special1]">WHAT</h1>
            <h1 className="font-[special1]">I DO</h1>
          </div>
          <div className="ml-10 text-[19px] absolute uppercase top-[75%] left-10 flex flex-col items-start justify-start flex-wrap">
            <h1>I DEVELOP</h1>
            <h1 className="text-gray-400">MODERN, IMPACTFUL AND LUXURIOUS</h1>
            <h1>
              websites that seamlessly bridge your goals with needs of your
              clients
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
