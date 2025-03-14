import React from 'react'
import Resumecart from "./Resumecart";
import Rightresumcart from "./Rightresumcart";
import { motion } from 'framer-motion';

function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between  gap-20 md:flex-row flex-col md:pl-0 ">
        <div className="div md:w-1/2 md:pl-20 pl-3">
          <div className="div py-15 pl-4">
            {" "}
            <p className="text-sm text-designcolor tracking-[4px]">
              2008 - 2024
            </p>
            <h2 className="text-2xl font-bold capitalize">Education Quality</h2>
          </div>
          <div className="w-full border-l-[6px] border-l-black/30 h-[1000px] flex flex-col gap-10 md:mr-0 md:pr-8 pr-4">
            <Resumecart
              title="BCS in Computer Science"
              subtitle="Ghalib (2020 - 2024)"
              result="9.5/10"
              descriptions="The training provided by universities in order to prepare people to work in various sectors of the economy areas of the culture"
            />
            <Resumecart
              title="MERN Stack Certification"
              subtitle="Wassa (2022 - 2023)"
              result="8.5/10"
              descriptions=" I hold a certification in the MERN stack, covering MongoDB, Express.js, React, and Node.js. It enables me to build dynamic, full-stack web applications with scalable backend and responsive frontend."
            />
            <Resumecart
              title="Personal Projects "
              subtitle="(2020 - 2024)"
              result="10/10"
              descriptions="I have developed several full-stack applications and dynamic websites using the MERN stack. These projects demonstrate my ability to solve real-world problems and create user-friendly web solutions."
            />
          </div>
        </div>

        <div className="div md:w-1/2 md:pr-0 pr-5">
          <div className="div py-15 text-right pr-4">
            {" "}
            <p className="text-sm text-designcolor tracking-[4px]">
              2022 - 2025
            </p>
            <h2 className="text-2xl font-bold capitalize">Job Experience</h2>
          </div>
          <div className=" right w-full border-r-[6px] border-r-black/30 h-[1000px] flex flex-col gap-10 ">
            <Rightresumcart
              title="Web Developer"
              subtitle="Wassa organization ( 05/2022 - 02/2023)"
              result="9.6/10"
              descriptions=" I worked as a web developer at Wassa Company, where I contributed to developing and maintaining dynamic web applications. My role involved using modern web technologies to enhance user experience and improve system functionality."
            />
            <Rightresumcart
              title="Web Developer"
              subtitle="Super cola company(07/2023 - 08/2024)"
              result="9.5/10"
              descriptions=" At Super Cola Company, I worked as a web developer, building and optimizing web applications to improve business processes. I focused on delivering efficient, user-friendly solutions that enhanced both functionality and performance."
            />
            <Rightresumcart
              title="Web developer"
              subtitle="Rahanet Internet Service Provider(2020,2024)"
              result="9.6/10"
              descriptions="I worked as a web developer at Rahanet ISP, where I contributed to developing and maintaining web applications to support internet services. My focus was on improving user experience and ensuring smooth integration with backend systems."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education
