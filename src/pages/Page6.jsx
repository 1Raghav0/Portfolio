import gsap from "gsap";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger"; 
import { useGSAP } from "@gsap/react";



const Page6 = () => {

  gsap.registerPlugin(ScrollTrigger); 

    useGSAP (function () {

      gsap.from("#Triangle .triangle", {
        scale: 0,
        duration: 3,
        rotate: 360,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '#Triangle .triangle', 
          scroll: 'body',
          start: "top 40%",  
          end: "top 30%",    
          scrub: 5,          
        }
      });
    });
  


  return (
      <div className="h-screen relative p-10 bg-white">
        <div
          id="Triangle"
          className="h-full w-full bg-black overflow-hidden rounded-2xl"
        >
          <img
            src="./src/assets/triangle.avif"
            alt="Triangle"
            className="triangle h-full w-full object-contain"
          ></img>
          <h1 className="ml-10 font-[special1] text-[10vw] absolute uppercase top-10">
            HOW
          </h1>
          <h1 className="font-[special1] text-[10vw] absolute uppercase top-10 right-20">
            I HELP
          </h1>
          <h1 className="ml-10 font-[special1] text-[10vw] absolute uppercase top-44 ">
            CAN
          </h1>
          <h1 className="font-[special1] text-[10vw] absolute uppercase top-44 right-24">
            YOU
          </h1>
          <p className="ml-10 font-[special5] text-[12px] w-1/4 absolute uppercase top-[60%]">
          "I am a self-taught frontend developer with a passion for creating seamless and dynamic user experiences. I specialize in building responsive, interactive websites and web applications that help ambitious professionals, entrepreneurs, artists, and boutique businesses thrive in the digital world."
          </p>
          <p className="font-[special5] text-[12px] w-1/4 absolute uppercase top-[60%] right-[5%]">
          "With a background in strategic marketing and expertise in web development, I strive to streamline my clients' processes by handling all aspects of their web projects, minimizing the need for extensive management, marketing research, or hiring a large team."
          </p>
        </div>
      </div>
  );
};

export default Page6;
