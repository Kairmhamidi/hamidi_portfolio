import React from "react";
import Resumecart from "./Resumecart";
import Rightresumcart from "./Rightresumcart";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full my-16 flex gap-20 flex-col"
    >
      <div className="header flex gap-10 w-full">
        <div className="left w-1/2 ">
          {" "}
          <p className="text-sm text-designcolor tracking-[4px] uppercase">Fetures</p>
          <h2 className="text-2xl font-bold capitalize">Design Skill</h2>
        </div>
        <div className="right w-1/2 ">
          <p className="text-sm text-designcolor tracking-[4px] uppercase">Fetures</p>
          <h2 className="text-2xl font-bold capitalize">Development Skill</h2>
        </div>
      </div>
      <div className="content w-full gap-10 overflow-x-hidden flex -mt-7">
        <div className="left w-1/2">
          <div className="data mb-6 ">
            <p className="text-sm font-medium uppercase tracking-[4px]">
              Phtoshop
            </p>
            <span className="w-ful h-2 bg-black/40 flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-6 right-0">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="data mb-6">
            <p className="text-sm font-medium uppercase tracking-[4px]">
              Figma
            </p>
            <span className="w-ful h-2 bg-black/40 flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              >
                <span className="absolute -top-6 right-0">80%</span>
              </motion.span>
            </span>
          </div>
          <div className="data mb-6">
            <p className="text-sm font-medium uppercase tracking-[4px]">
              Adobe design
            </p>
            <span className="w-ful h-2 bg-black/40 flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              >
                <span className="absolute -top-6 right-0">75%</span>
              </motion.span>
            </span>
          </div>
          <div className="data mb-6">
            <p className="text-sm font-medium uppercase tracking-[4px]">
              CorelDRAW
            </p>
            <span className="w-ful h-2 bg-black/40 flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              >
                <span className="absolute -top-6 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="data mb-6">
            <p className="text-sm font-medium uppercase tracking-[4px]">
              Adone XD
            </p>
            <span className="w-ful h-2 bg-black/40 flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              >
                <span className="absolute -top-6 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="data mb-6">
            <p className="text-sm font-medium uppercase tracking-[1px]">
              Webflow
            </p>
            <span className="w-ful h-2 bg-black/40 flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              >
                <span className="absolute -top-6 right-0">80%</span>
              </motion.span>
            </span>
          </div>
        </div>
        <div className="right w-1/2 overflow-x-hidden">
          <div className="data mb-6">
            <p className="text-sm font-medium uppercase tracking-[1px]">
              React.js
            </p>
            <span className="w-ful h-2 bg-black/40 flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              >
                <span className="absolute -top-6 right-0">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="data mb-6">
            <p className="text-sm font-medium uppercase tracking-[1px]">
              Node.js
            </p>
            <span className="w-ful h-2 bg-black/40 flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              >
                <span className="absolute -top-6 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="data mb-6">
            <p className="text-sm font-medium uppercase tracking-[1px]">
              Express.js
            </p>
            <span className="w-ful h-2 bg-black/40 flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              >
                <span className="absolute -top-6 right-0">900%</span>
              </motion.span>
            </span>
          </div>
          <div className="data mb-6">
            <p className="text-sm font-medium uppercase tracking-[1px]">
              MongoDB
            </p>
            <span className="w-ful h-2 bg-black/40 flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              >
                <span className="absolute -top-6 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="data mb-6">
            <p className="text-sm font-medium uppercase tracking-[1px]">
              Next.js
            </p>
            <span className="w-ful h-2 bg-black/40 flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              >
                <span className="absolute -top-6 right-0">70%</span>
              </motion.span>
            </span>
          </div>
          <div className="data mb-6">
            <p className="text-sm font-medium uppercase tracking-[1px]">
              Tailwindcss
            </p>
            <span className="w-ful h-2 bg-black/40 flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              >
                <span className="absolute -top-6 right-0">100%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
