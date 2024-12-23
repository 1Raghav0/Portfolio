import React from "react";

const Page5 = () => {
  return (
    <div id="skills">
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
            <h1 className="ml-[40%] mb-[3%] text-[4vw] font-[special2] ">
              Skills
            </h1>
            <h2 className="ml-[1%] text-[3vw] font-[special2] text-gray-400">
              Tecnical Skills
            </h2>
            <ul className="h-[200px]  text-[3vw] m-[10%] mt-1 mb-4 flex items-center justify-around flex-wrap gap-12">
              <li>
                <i className="ri-html5-fill">HTML</i>
              </li>
              <li>
                <i className="ri-css3-fill ">Css</i>
              </li>
              <li>
                <i className="ri-javascript-fill ">Javascript</i>
              </li>
              <li>
                <i className="ri-tailwind-css-fill ">TailwindCss</i>
              </li>
              <li>
                <i className="ri-reactjs-fill ">React.js</i>
              </li>
              <li>
                <i className="ri-github-fill">GitHub</i>
              </li>
            </ul>

            <h2 className="ml-[1%] text-[3vw] font-[special2] text-gray-400">
              Soft Skills
            </h2>
            <ul className="text-[3vw] ml-[10%] mt-4  flex-col items-start justify-start flex-wrap gap-16">
              <li>Eager to Learn</li>
              <li>Observation</li>
              <li>Decision Making</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
