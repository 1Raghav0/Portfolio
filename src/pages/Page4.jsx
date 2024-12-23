import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page4 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".rotatetext", {
      transform: "rotateX(-90deg)",
      opacity: 0,
      duration: 2,
      stagger: 0.3,
      ease:"power4.out",
      scrollTrigger: {
        trigger: ".rotatetext",
        // markers: true,
        start: "top 40%",
        end: "top -110%",
        scrub: 1,
      },
    });
  });

  return (
    <>
    <div id="section-1" className="text-center mt-5 p-15 text-black overflow-hidden ">
        <div className="rotatetext">
          <h1 className="text-[10vw] text-black font-[special2] uppercase leading-[12vw] mt-20">
            HELPING
          </h1>
        </div>
        <div className="rotatetext">
          <h1 className="text-[10vw] text-gray-400 font-[special2] uppercase leading-[12vw] ">
            MY
          </h1>
        </div>
        <div className="rotatetext">
          <h1 className="text-[10vw] text-black font-[special2] uppercase leading-[12vw]">
            CLIENTS
          </h1>
        </div>
        <div className="rotatetext">
          <h1 className="text-[10vw] text-gray-400 font-[special2] uppercase leading-[12vw] ">
            TO ACHIEVE
          </h1>
        </div>
        <div className="rotatetext">
          <h1 className="text-[10vw] text-black font-[special2] uppercase leading-[12vw]">
            THEIR
          </h1>
        </div>
        <div className="rotatetext">
          <h1 className="text-[10vw] text-gray-400 font-[special2] uppercase leading-[12vw] ">
            DREAMS!
          </h1>
        </div>
      </div>
      
    </>
  );
};

export default Page4;
