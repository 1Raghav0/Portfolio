import React, { useState } from "react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";

const Header = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarAnimating, setIsSidebarAnimating] = useState(false);

 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  
  const closeSidebar = () => {
    setIsSidebarAnimating(true); 
    gsap.to(".sidebar", {
      x: "100%",
      duration: 1,
      ease: "power3.in",
      onComplete: () => {
        setIsSidebarOpen(false);
        setIsSidebarAnimating(false); 
      },
    });
  };


  React.useEffect(() => {
    if (isSidebarOpen) {
      gsap.to(".sidebar", { x: 0, duration: 1, ease: "power3.out" });
    } else {
      gsap.to(".sidebar", { x: "100%" });
    }
  }, [isSidebarOpen]);


  const handleLinkClick = (sectionId) => {
  
    closeSidebar();

  
    setTimeout(() => {
      
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0.5); 
  };

  return (
    <>
      <div className="fixed w-full z-10 px-20 py-14 flex items-center justify-end">

        {!isSidebarOpen && !isSidebarAnimating && (
          <i
            className="ri-more-2-fill text-gray-500 text-4xl ml-3 mt-2 cursor-pointer"
            onClick={toggleSidebar}
          ></i>
        )}
      </div>

      <div
        className={`sidebar fixed top-0 right-0 w-64 h-full  backdrop-blur-lg text-gray-400 text-[3vh] z-10 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-1000 ease-out`}
      >
        <div className="flex flex-col">
          <i
            className="ri-close-circle-line m-3 text-4xl text-gray-400 self-center cursor-pointer"
            onClick={closeSidebar}
          ></i>
          <ul className="space-y-4 mt-[10%] m-4">
            <li>
              <a
                href="#home"
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => handleLinkClick("about")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={() => handleLinkClick("project")}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
