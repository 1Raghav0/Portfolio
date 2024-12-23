import React from "react";

const TiltText = (props) => {
  return (
    <div>
      <div id="tiltDiv" ref={props.Motion} className="mt-24 ">
        {/* leading is for line height */}
        <h1 className="text-[4.2vw] uppercase font-[special] leading-[4vw]">
          I AM <span className="text-gray-500">FRONTEND</span>
        </h1>
        <h1 className="text-[7vw] font-[special2] leading-[7vw]">DEVELOPER</h1>
        <h1 className="text-[4.2vw] uppercase font-[special2] leading-[4vw]">
          To Hire
        </h1>
      </div>
    </div>
  );
};

export default TiltText;
