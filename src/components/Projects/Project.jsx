import React from 'react'
import Projectscart from '../../extra/Projectscart';
import First from '../../assets/course9.jpg'
import Second from "../../assets/course2.jpg";
import third from "../../assets/me.png";
import fourth from "../../assets/course16.jpg";
import fifth from "../../assets/course3.jpg";
import sixth from "../../assets/course17.jpg";
import {FaGithub,FaGlobe} from 'react-icons/fa'
import VCS from '../../assets/vsc.webp'

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
          title="AI-Powered Student Authentication System"
          description="A web-based system that uses face and voice recognition to verify students' identities and automatically update attendance records."
          firsticon={<FaGithub />}
          secondicon={<FaGlobe />}
        />
        <Projectscart
          image={Second}
          description=" A platform where admins manage students and instructors, while instructors create and sell courses with real-time tracking and dashboards."
          title="Learning Management System (LMS)"
          firsticon={<FaGithub />}
          secondicon={<FaGlobe />}
        />
        <Projectscart
          image={third}
          description="A professional portfolio built with Next.js and Tailwind CSS, showcasing skills, projects, experiences, and contact details in an interactive design."
          title={'Atractive Portfolio'}
          firsticon={<FaGithub />}
          secondicon={<FaGlobe />}
        />
        <Projectscart
          image={fourth}
          title="AI Book Summarization Tool"
          description="A web application that processes PDF books in English, Persian, and Arabic, using NLP models to generate concise, readable summaries."
          firsticon={<FaGithub />}
          secondicon={<FaGlobe />}
        />
        <Projectscart
          image={fifth}
          title="Code Execution Platform"
          firsticon={<FaGithub />}
          secondicon={<FaGlobe />}
          description="An online coding environment that allows users to write, run, and debug code in multiple programming languages with real-time output."
        />
        <Projectscart
          image={sixth}
          title="University Management System"
          description="A digital system that helps teachers organize class schedules, manage students, and take attendance efficiently through an intuitive interface."
          firsticon={<FaGithub />}
          secondicon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Project
