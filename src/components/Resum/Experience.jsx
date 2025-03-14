import React from 'react'
import Resumecart from "./Resumecart";
import Rightresumcart from "./Rightresumcart";

import { motion } from 'framer-motion';
function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between  md:gap-20 md:flex-row flex-col md:pr-0 pr-4 md:pl-0 pl-3">
        <div className="div md:w-1/2 ">
          <div className=" py-15  pl-6">
            <p className="text-sm text-designcolor tracking-[4px] uppercase">
              Fetures
            </p>
            <h2 className="text-2xl font-bold capitalize">Job Experience</h2>
          </div>
          <div className=" border-l-[6px] border-l-black/30 h-[1000px] flex flex-col gap-10 ">
            <Resumecart
              title="Web Developer"
              subtitle="wassa (05/2022 - 02/2023)"
              result="9.6/10"
              descriptions=" At Wassa, I worked on developing and optimizing web applications to enhance user experience. I focused on improving UI/UX, debugging issues, and ensuring smooth functionality across platforms."
            />
            <Resumecart
              title="Web Developer"
              subtitle="Super Cola(07/2023 - 08/2024)"
              result="9.5/10"
              descriptions=" At Super Cola, I was responsible for building scalable web applications and optimizing existing systems. I worked closely with the team to ensure fast load times and improved the overall web infrastructure."
            />
            <Resumecart
              title="Web Developer"
              subtitle="Rahanet ISP (08/2024 - 03/2025)"
              result="9.6/10"
              descriptions="  I developed and maintained internal web applications at Rahanet ISP, helping improve the company's digital services. My responsibilities included system integration, optimizing backend processes, and ensuring seamless user interactions."
            />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <div className="div py-15 text-right pr-6">
            <p className="text-sm text-designcolor tracking-[4px] uppercase">
              Fetures
            </p>
            <h2 className="text-2xl font-bold capitalize">
              Development Experince
            </h2>
          </div>
          <div className=" right border-r-[6px] border-r-black/30 h-[1000px] flex flex-col gap-10">
            <Rightresumcart
              title="Freelance Web Developer"
              subtitle=" (2022,Ongoing)"
              result="10/10"
              descriptions="As a freelance web developer, I’ve worked on custom web projects for clients, focusing on MERN stack development. This experience has helped me fine-tune my skills and deliver tailored solutions that meet client needs."
            />
            <Rightresumcart
              title="Open-Source Contributor"
              subtitle="(2022,Ongoing)"
              result="10/10"
              descriptions=" I contribute to various open-source web development projects on platforms like GitHub. This allows me to collaborate with developers globally, improve my coding practices, and stay up to date with new technologies."
            />
            <Rightresumcart
              title="Personal Web Development Projects"
              subtitle=" (2022,Ongoing)"
              result="10/10"
              descriptions="I have created and deployed several personal projects using React, Node.js, and MongoDB. These projects allowed me to experiment with new features and enhance my problem-solving abilities in real-world scenarios."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience
