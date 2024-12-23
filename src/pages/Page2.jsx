import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".rotateText", {
      transform: "rotateX(-90deg)",
      opacity: 0,
      duration: 2,
      stagger: 0.3,
      ease:"power4.out",
      scrollTrigger: {
        trigger: ".rotateText",
        // markers: true,
        start: "top 40%",
        end: "top -110%",
        scrub: 2,
      },
    });
  });

  return (
    <>
      <div id="section" className="bg-white text-center mt-5 p-15 text-black overflow-hidden ">
        <h3 className="text-gray-500 text-xl font-[special5]">
          © Raghav.code 2024 | Developed
        </h3>
        <div className="rotateText">
          <h1 className="text-[10vw] text-black font-[special2] uppercase leading-[12vw] mt-40">
            IMPACTFUL
          </h1>
        </div>
        <div className="rotateText">
          <h1 className="text-[10vw] text-black font-[special2] uppercase leading-[12vw]">
            DESIGN
          </h1>
        </div>
        <div className="rotateText">
          <h1 className="text-[10vw] text-black font-[special2] uppercase leading-[12vw]">
            IS THE
          </h1>
        </div>
        <div className="rotateText">
          <h1 className="text-[10vw] text-black font-[special2] uppercase leading-[12vw]">
            DESIGN
          </h1>
        </div>
        <div className="rotateText">
          <h1 className="text-[10vw] text-black font-[special2] uppercase leading-[12vw]">
            THAT
          </h1>
        </div>
        <div className="rotateText">
          <h1 className="text-[10vw] text-black font-[special2] uppercase leading-[12vw]">
            WORKS!
          </h1>
        </div>
      {/* -translate-x-1/2 is use to alin in center. */}
      <div className="h-1 w-1/4 mt-20 relative left-1/2 -translate-x-1/2 bg-black"></div>
      </div>
    </>
  );
};

export default Page2;
