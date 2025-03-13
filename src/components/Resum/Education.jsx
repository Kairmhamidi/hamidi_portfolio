import React from 'react'
import Resumecart from "./Resumecart";
import Rightresumcart from "./Rightresumcart";
import { motion } from 'framer-motion';

function Education() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
      <div className="div py-12 font-titleFont flex justify-between">
        <div className="left">
          {" "}
          <p className="text-sm text-designcolor tracking-[4px]">2008 - 2024</p>
          <h2 className="text-2xl font-bold capitalize">Education Quality</h2>
        </div>
        <div className="right items-start">
          <p className="text-sm text-designcolor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-2xl font-bold capitalize">Job Experience</h2>
        </div>
      </div>
      <div className="flex justify-between  gap-20">
        <div className="w-1/2 border-l-[6px] border-l-black/30 h-[1000px] flex flex-col gap-10 ">
          <Resumecart
            title="BCS in Computer Science"
            subtitle="Ghalib (2020 - 2024)"
            result="3.90/4"
            descriptions="The training provided by universities in order to prepare people to work in various sectors of the economy areas of the culture"
          />
          <Resumecart
            title="Science & information"
            subtitle="Ghalib (2020 - 2024)"
            result="3.90/4"
            descriptions=" Science explores the natural world, while information enables knowledge and innovation. Together, they drive technological progress, transforming industries, education, and daily life."
          />
          <Resumecart
            title="BCS in Computer Science"
            subtitle="Ghalib (2020 - 2024)"
            result="3.90/4"
            descriptions=" The training prpvided by universities in order to prepare people to workd in various sectors of the economy areas of the culture"
          />
        </div>
        <div className=" w-1/2 right border-r-[6px] border-r-black/30 h-[1000px] flex flex-col gap-10">
          <Rightresumcart
            title="Software engineer "
            subtitle="Wassa organization (2022,2023)"
            result="9.6/10"
            descriptions="As a software engineer at Wassa Company, I developed and maintained software solutions, collaborated with teams, and ensured efficient code and system integration."
          />
          <Rightresumcart
            title="Web Developer"
            subtitle="Farsrout Company(2023,2024)"
            result="9.5/10"
            descriptions="As a web developer at Farsrout Company, I built responsive websites and optimized user experiences using various web technologies."
          />
          <Rightresumcart
            title="bcs in computer science"
            subtitle="Ghalib university (2020,2024)"
            result="9.6/10"
            descriptions="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sunt dicta quibusdam porro eius officia."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
