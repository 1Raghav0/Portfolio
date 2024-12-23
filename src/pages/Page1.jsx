import React, { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {
  const tiltRef = useRef(null);

  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    // console.log(e.clientX, e.clientY); where mouse is moving that coordinates.
    // console.log(tiltRef.current.getBoundingClientRect()) to find dimensions.

    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        20
    );
    setYVal(
      (e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().width / 2) /
        20
    );

  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 3,
        ease: 'power4.out',
      });
    },
    [xVal, yVal]
  );

  return (
    <>
      <div
        id="home"
        onMouseMove={(e) => {
          mouseMoving(e);
        }}
        className="h-screen p-7 bg-white"
      >

        <div
          id="page1-in"
          className=" relative shadow-xl shadow-gray-700 px-14 py-8  h-full w-full bg-[url(./assets/Portfolio.jpg)] bg-cover rounded-[50px]"
        >
          <img src="./src/assets/Logo.avif" alt="" className="h-20 sm:h-16 md:h-18 lg:h-20 xl:h-24" />
          <TiltText  Motion={tiltRef}/>
          <Page1Bottom />
        </div>
      </div>
    </>
  );
};

export default Page1;

