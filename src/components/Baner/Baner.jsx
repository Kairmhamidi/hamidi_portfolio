import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import {
  FaCss3,
  FaFacebook,
  FaFacebookF,
  FaFacebookMessenger,
  FaGithub,
  FaGithubAlt,
  FaHtml5,
  FaLinkedin,
  FaLinkedinIn,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import Image from "../../assets/h2.png";

function Baner() {
  return (
    <section
      id="Home"
      className="w-full py-20 pb-20 flex items-center border-b-[1px] border-b-black"
    >
      <div className="div w-full flex ">
        <div className="left w-1/2 mt-14">
          <div className=" flex flex-col gap-3">
            <h3 className="text-lg font-normal space-x-1 font-titleFont">
              Welcome to my world{" "}
            </h3>
            <h1 className="text-6xl font-bold text-white capitalize">
              Hi, I'm
              <span className=" font-bold text-designcolor">Karim Hamidi</span>
            </h1>
            <h2 className="text-4xl font-bold text-white flex gap-2">
              a{" "}
              <span>
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Red Hat Display",
                  }}
                  cursorColor="#ff014f"
                  effect="fadeIn"
                  delay={1000}
                  duration={2000}
                  startDelay={2000}
                  multiText={[
                    "MERN stack developer.",
                    "UI designer.",
                    "Fullstack developer.",
                    "Code lover.",
                    "UX designer.",
                  ]}
                  multiTextLoop={true}
                  multiTextDelay={2000}
                  typeSpeed={40}
                  deleteSpeed={30}
                />
              </span>
            </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide ">
              a JavaScript-based technology stack for building full-stack web
              applications. It provides a seamless development experience,
              allowing developers to use JavaScript for both frontend and
              backend, ensuring efficiency, scalability, and high performance.
            </p>
          </div>
          <div className="findme mt-[8rem] flex justify-between ">
            <div className="left t">
              <h2 className="text-center font-bodyFont">Find me in</h2>
              <div className=" flex gap-4 mt-5 ">
                <span className="cursor-pointer text-gray-200 w-10 h-10 bg-black/25   inline-flex items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-designcolor cursor-poiter duration-300">
                  <a
                    href="https://www.facebook.com/profile.php?id=100043866711375"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </span>
                <span className="cursor-pointer  w-10 h-10 rounded-md shadow-md inline-flex items-center justify-center hover:translate-y-1 bg-black/25 hover:text-designcolor transition-all duration-300   hover:bg/25 text-gray-200">
                  <FaTwitter />
                </span>
                <span className="w-10 h-10 bg-black/25 text-gray-200 inline-flex justify-center items-center p-2 rounded-md shadow-md hover:translate-y-1  hover:text-designcolor transition-all duration-300  cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/karim-hamidi-647883211/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </span>
                <span className="cursor-pointer text-gray-200 p-2 w-10 h-10 bg-black/25   inline-flex items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-designcolor cursor-poiter duration-300">
                  <a
                    href="https://github.com/Kairmhamidi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithubAlt />
                  </a>
                </span>
              </div>
            </div>
            <div className="right">
              <h3 className="text-center font-normal tracking-wider font-bodyFont">
                Best skills on
              </h3>
              <div className="best flex gap-3 mt-6">
                <span className="w-10 h-10  rounded-md shadow-md inline-flex justify-center items-center bg-black/25 cursor-pointer hover:translate-y-1 hover:text-designcolor transition-all duration-300 ">
                  <FaReact />
                </span>
                <span className="w-10 h-10  rounded-md shadow-md inline-flex justify-center items-center bg-black/25 cursor-pointer hover:translate-y-1 hover:text-designcolor transition-all duration-300 ">
                  <FaCss3 />
                </span>
                <span className="w-10 h-10 rounded-md shadow-md inline-flex justify-center items-center bg-black/25 cursor-pointer hover:translate-y-1 hover:text-designcolor transition-all duration-300 ">
                  <SiNodedotjs />
                </span>
                <span className="w-10 h-10 p-1 rounded-md shadow-md inline-flex justify-center items-center bg-black/25 cursor-pointer hover:translate-y-1 hover:text-designcolor transition-all duration-300 ">
                  <SiExpress />
                </span>
                <span className="w-10 h-10 p-1 rounded-md shadow-md inline-flex justify-center items-center bg-black/25 cursor-pointer hover:translate-y-1 hover:text-designcolor transition-all duration-300 ">
                  <SiMongodb />
                </span>
                <span className="w-10 h-10 p-1 rounded-md shadow-md inline-flex justify-center items-center bg-black/25 cursor-pointer hover:translate-y-1 hover:text-designcolor transition-all duration-300 ">
                  <SiNextdotjs />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right w-1/2 flex justify-center items-center relative">
          <img
            src={Image}
            alt=""
            className="w-[500px] h-[680px] z-10  border-b-black/25  rounded pb-16"
          />
        </div>
      </div>
      <div className="absolute shadow-myshadow rounded w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] b-0 flex justify-center items-center left-[56.5%] top-[35%]"></div>
    </section>
  );
}

export default Baner;
