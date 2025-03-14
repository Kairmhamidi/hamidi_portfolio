import React from 'react'
import Cart from '../../extra/Cart'
import {FaBars,FaDeaf,FaGlobe,FaHandPointer,FaMobile,FaWindows} from 'react-icons/fa'
import {AiFillApi, AiFillAppstore, AiFillGoogleCircle, AiFillRobot, AiOutlineBarChart, AiOutlineGlobal, AiOutlineLineChart, AiOutlinePartition, AiOutlineSearch, AiOutlineUser, AiOutlineUserAdd} from 'react-icons/ai'
import {MdOutlineSmartphone} from 'react-icons/md'
import {FiLayers} from 'react-icons/fi'

function Features() {

  return (
    <section
      id="Features"
      className="w-full  pb-20 borer-b-[1px] border-b-black ml-3 md:pr-4 pr-7 "
    >
      <div className="flex flex-col gap-5 font-titleFont mb-12 overflow-hidden">
        <h3 className="text-sm text-designcolor tracking-wide capitalize">
          Features
        </h3>
        <h1 className="text-5xl font-titleFont text-gray-300 font-bold">
          What i do
        </h1>
      </div>

      <div className="div grid md:grid-cols-3 gap-10 md:pr-0 pr-3">
        <Cart
          title="Web development"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime delectus non laudantium? Magnam quos dolorem suscipit,"
          icon={<FaBars />}
        />
        <Cart
          title="python development"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime delectus non laudantium? Magnam quos dolorem suscipit,"
          icon={<AiFillAppstore />}
        />
        <Cart
          title="Ai Anlyzer"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime delectus non laudantium? Magnam quos dolorem suscipit, "
          icon={<FaBars />}
        />
        <Cart
          title="Mobile developer"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime delectus non laudantium? Magnam quos dolorem suscipit,"
          icon={<MdOutlineSmartphone/>}
        />
        <Cart
          title="Ux designer"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime delectus non laudantium? Magnam quos dolorem suscipit, "
          icon={<FiLayers />}
        />
        <Cart
          title="code writer"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime delectus non laudantium? Magnam quos dolorem suscipit"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features
