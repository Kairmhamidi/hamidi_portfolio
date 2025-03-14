import React from "react";
import Cart from "../../extra/Cart";
import {
  FaBars,
  FaDeaf,
  FaGlobe,
  FaHandPointer,
  FaMobile,
  FaWindows,
} from "react-icons/fa";
import {
  AiFillApi,
  AiFillAppstore,
  AiFillGoogleCircle,
  AiFillRobot,
  AiOutlineBarChart,
  AiOutlineGlobal,
  AiOutlineLineChart,
  AiOutlinePartition,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { SiTensorflow } from "react-icons/si";
import { FaChartLine } from "react-icons/fa";
import { BiCloud } from "react-icons/bi";



import { MdOutlineSmartphone } from "react-icons/md";
import { FiLayers } from "react-icons/fi";

function Features() {
  return (
    <section
      id="Features"
      className="w-full  pb-20 borer-b-[1px] border-b-black ml-3 md:pr-4 pr-7 "
    >
      <div className="flex flex-col gap-5 font-titleFont mb-12 ">
        <h3 className="text-sm text-designcolor tracking-wide capitalize">
          Features
        </h3>
        <h1 className="text-5xl font-titleFont text-gray-300 font-bold">
          What i do
        </h1>
      </div>

      <div className="div grid md:grid-cols-3 gap-10 md:pr-0 pr-4 md:pl-0 pl-2">
        <Cart
          title="Freelance Web Developer"
          desc="Create websites, web apps, and e-commerce stores for clients on platforms like Upwork and Fiverr. Earn through custom projects and maintenance services.

"
          icon={<FaLaptopCode />}
        />
        <Cart
          title="Full-Stack Developer"
          desc="Work in a company building frontend (React/Next.js) and backend (Node.js/Python) applications. Develop and maintain scalable web solutions."
          icon={<FaCodeBranch />}
        />
        <Cart
          title="Content Creator "
          desc=" Teach web development through blogs or YouTube tutorials. Monetize via ads, sponsorships, courses, or selling coding resources."
          icon={<MdOutlineVideoLibrary />}
        />
        <Cart
          title="AI Web App Developer"
          desc="Build AI-powered web applications like chatbots and face recognition using Next.js and TensorFlow.js. Offer SaaS solutions or custom AI services."
          icon={<SiTensorflow />}
        />
        <Cart
          title="Web Consultant"
          desc="Advise businesses on improving their websites, performance, SEO, and UI/UX. Help optimize and scale web applications for better user experience."
          icon={<FaChartLine />}
        />
        <Cart
          title="SaaS Developer"
          desc="Create and sell web-based software-as-a-service (SaaS) applications. Develop tools like project management apps, analytics dashboards, or automation platforms."
          icon={<BiCloud />}
        />
      </div>
    </section>
  );
}

export default Features;
