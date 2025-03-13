import React from 'react'
import Resumecart from "./Resumecart";
import Rightresumcart from "./Rightresumcart";

import { motion } from 'framer-motion';
function Experience() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}}  transition={{duration:0.5}}>
      <div className="div py-12 font-titleFont flex justify-between">
        <div className="left">
          {" "}
          <p className="text-sm text-designcolor tracking-[4px] uppercase">Fetures</p>
          <h2 className="text-2xl font-bold capitalize">Job Experience</h2>
        </div>
        <div className="right items-start">
          <p className="text-sm text-designcolor tracking-[4px] uppercase">Fetures</p>
          <h2 className="text-2xl font-bold capitalize">Trainer Experince</h2>
        </div>
      </div>
      <div className="flex justify-between  gap-20">
        <div className="w-1/2 border-l-[6px] border-l-black/30 h-[1000px] flex flex-col gap-10 ">
          <Resumecart
            title="BCS in Computer Science"
            subtitle="Ghalib (2020 - 2024)"
            result="3.90/4"
            descriptions=" The training prpvided by universities in order to prepare people to workd in various sectors of the economy areas of the culture"
          />
          <Resumecart
            title="BCS in Computer Science"
            subtitle="Ghalib (2020 - 2024)"
            result="3.90/4"
            descriptions=" The training prpvided by universities in order to prepare people to workd in various sectors of the economy areas of the culture"
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
            title="bcs in computer science"
            subtitle="Ghalib university (2020,2024)"
            result="9.6/10"
            descriptions="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sunt dicta quibusdam porro eius officia."
          />
          <Rightresumcart
            title="bcs in computer science"
            subtitle="Ghalib university (2020,2024)"
            result="9.6/10"
            descriptions="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sunt dicta quibusdam porro eius officia."
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

export default Experience
