import React from "react";

const Project = () => {
  return (
    <div id="project">
      <div className="m-10 text-black bg-gray-400 overflow-hidden rounded-2xl bg-opacity-20  backdrop-blur-lg">
        <h1 className="ml-[43%] mt-4 font-[special1] text-[8vw]">Projects</h1>
        <div className="flex flex-wrap items-center justify-center">
          <a href="https://github.com/1Raghav0/E-commerce-site.git" target="_blank">
            <div className="group h-[320px] w-[420px] m-4  bg-gray-400 rounded-lg mb-8 relative  ">
              <img
                src="./src/assets/E-commerce site.png"
                alt="E-commerce Site"
                className="object-contain rounded-lg border-2 border-gray-300 hover:h-full "
              />
              <div className="w-[90%] h-0 absolute left-0 bottom-0 overflow-hidden flex flex-col items-center justify-center p-4 text-center transition-[height_0.5s] mb-6 group-hover:h-full ">
                <h1 className="p-2 mb-1 text-black text-[3vh] font-bold opacity-0 backdrop-blur-lg group-hover:opacity-100 transition-opacity">
                  E-commerce Site
                </h1>
                <p className="text-black text-[2.5vh] opacity-0 backdrop-blur-lg group-hover:opacity-100 transition-opacity ">
                  Designed and Implemented Responsive UI/UX: Created an
                  intuitive and mobile-friendly interface, ensuring optimal
                  performance across devices.
                </p>
              </div>
            </div>
          </a>

           <a href="https://github.com/1Raghav0/Youtube-Clone.git" target="_blank">
           <div className="group h-[320px] w-[420px] m-4  bg-gray-400 rounded-lg mb-8  relative  ">
            <img
              src="./src/assets/Youtube-clone.png"
              alt="Youtube-clone"
              className="object-contain rounded-lg border-2 border-gray-300  hover:h-full "
            />
            <div className="layer w-[90%] h-0 absolute left-0 bottom-0 overflow-hidden flex flex-col items-center justify-center p-4 text-center transition-[height_0.5s] mb-6 group-hover:h-full ">
              <h1 className="p-2 mb-1 text-black text-[3vh] font-bold opacity-0 backdrop-blur-md group-hover:opacity-100 transition-opacity ">
                Youtube-Clone
              </h1>
              <p className="p-2 mb-1 text-black text-[2.5vh] opacity-0 backdrop-blur-lg group-hover:opacity-100 transition-opacity ">
                Responsive Design: Adaptable layout for various screen sizes and
                devices. Video Player:
              </p>
            </div>
          </div>
           </a>

            <a href="https://github.com/1Raghav0/Etsy-clone.git" target="_blank">
            <div className="group h-[320px] w-[420px] m-4  bg-gray-400 rounded-lg mb-8  relative  ">
            <img
              src="./src/assets/Etsy-clone.png"
              alt="Esty-clone"
              className="object-contain rounded-lg border-2 border-gray-300 hover:h-full "
            />
            <div className="layer w-[90%] h-0 absolute left-0 bottom-0 overflow-hidden flex flex-col items-center justify-center p-4 text-center transition-[height_0.5s] mb-6 group-hover:h-full ">
              <h1 className="p-2 mb-1 text-black text-[3vh] font-bold opacity-0 backdrop-blur-lg group-hover:opacity-100 transition-opacity ">
                Etsy Clone
              </h1>
              <p className="p-2 mb-1 text-black text-[2.5vh] opacity-0 backdrop-blur-lg group-hover:opacity-100 transition-opacity ">
                Developed a Fully Functional E-Commerce Website using HTML, CSS,
                and JavaScript, providing a seamless online shopping experience.
              </p>
            </div>
          </div>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
