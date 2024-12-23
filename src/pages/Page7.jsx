import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page7 = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    
    const elements = [
      { selector: '.contact-title', delay: 0.1 },
      { selector: '.github-icon', delay: 0.4 },
      { selector: '.linkedin-icon', delay: 0.5 },
      { selector: '.download-icon', delay: 0.6 }
    ];


    elements.forEach((el) => {
      gsap.fromTo(
        el.selector,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: el.delay,
          scrollTrigger: {
            trigger: el.selector,
            start: "top 80%", 
            end: "top 50%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div id="contact" className="h-screen relative p-10 bg-white">
      <div
        id="Triangle"
        className="h-full w-full bg-black overflow-hidden rounded-2xl"
      >
        <img
          src="./src/assets/Colors.png"
          alt="Colors"
          className="h-full w-full object-contain"
        ></img>
        <h1 className="ml-10 font-[special] text-[6vh] absolute top-10 left-[40%] contact-title">
          Contact
        </h1>
        <p className="ml-10 font-[special1] text-[4vw] absolute uppercase top-[35%] cursor-pointer github-icon ">
          <a href="https://github.com/1Raghav0" target="_blank">
            <i className="ri-github-fill"></i>
          </a>
        </p>
        <p className="ml-10 font-[special1] text-[4vw] absolute uppercase top-[45%] cursor-pointer linkedin-icon ">
          <a href="https://www.linkedin.com/in/raghvendra-singh-986ab3291/" target="_blank">
            <i className="ri-linkedin-box-fill"></i>
          </a>
        </p>
        <p className="ml-10 font-[special1] text-[4vw] absolute uppercase top-[55%] cursor-pointer download-icon ">
          <a href="./Resume.pdf" download='Resume'  >
            <i className="ri-file-download-line"></i>
          </a>
        </p>
        <p className="ml-10 font-[special1] text-[2vw] absolute top-[82%] ">
          <i className="ri-mail-line ">: raghav514422@gmail.com</i>
        </p>
        <p className="font-[special] text-[2vw] absolute  top-[82%] right-20 ">
          <i className="ri-phone-line">: 6397258224</i>
        </p>
      </div>
    </div>
  );
};

export default Page7;
