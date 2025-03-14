import React from 'react'
import Projectscart from '../../extra/Projectscart';
import First from '../../assets/course9.jpg'
import Second from "../../assets/course2.jpg";
import third from "../../assets/course1.jpg";
import fourth from "../../assets/course16.jpg";
import fifth from "../../assets/course3.jpg";
import sixth from "../../assets/course17.jpg";
import {FaGithub,FaGlobe} from 'react-icons/fa'

function Project() {
  return (
    <section
      id="Projects"
      className="w-full h-auto bg-bodyColor text-lighttext overflow-hidden"
    >
      <div className="flex justify-center items-center flex-col mb-10">
        <h1 className=" uppercase font-normal tracking-wide text-designcolor text-sm mb-5">
          visit my profile and keep your feedback
        </h1>
        <h3 className="font-bold text-5xl">My projects</h3>
      </div>
      <div className="div grid md:grid-cols-3 md:gap-7">
        <Projectscart
          image={First}
          title="learning management"
          description="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi harum temporibus nihil Sequi harum temporibus nihil  Sequi harum temporibus nihil "
          firsticon={<FaGithub />}
          secondicon={<FaGlobe />}
        />
        <Projectscart
          image={Second}
          description="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi harum temporibus nihil  Sequi harum temporibus nihil Sequi harum temporibus nihil"
          title="Hospital management clone"
          firsticon={<FaGithub />}
          secondicon={<FaGlobe />}
        />
        <Projectscart
          image={third}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi harum temporibus nihil  Sequi harum temporibus nihil  Sequi harum temporibus nihil"
          title="Hotel management clone"
          firsticon={<FaGithub />}
          secondicon={<FaGlobe />}
        />
        <Projectscart
          image={fourth}
          title="Student management system"
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi harum temporibus nihil  Sequi harum temporibus nihil Sequi harum temporibus nihil "
          firsticon={<FaGithub />}
          secondicon={<FaGlobe />}
        />
        <Projectscart
          image={fifth}
          title="e-commerce website"
          firsticon={<FaGithub />}
          secondicon={<FaGlobe />}
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi harum temporibus nihil  Sequi harum temporibus nihil  Sequi harum temporibus nihil"
        />
        <Projectscart
          image={sixth}
          title="AI assistant system"
          description="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi harum temporibus nihil  Sequi harum temporibus nihil  Sequi harum temporibus nihil "
          firsticon={<FaGithub />}
          secondicon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Project
