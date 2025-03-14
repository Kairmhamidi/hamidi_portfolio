import React from "react";
import First from "../../assets/karim .png";
import { Navlinks } from "../../Constants/data";
import { Link } from "react-scroll";
function Navabr() {
  return (

      <nav className="sticky top-0 z-50 w-full h-20 bg-bodyColor border-b-[1px] border-b-gray-400 font-bodyFont">
        <div className="max-w-8xl mx-auto flex justify-between items-center p-4">
          <div className="flex gap-2">
            <img
              src={First}
              className="rounded-full w-12 h-12 border-2 border-gray-500 bg-cover"
            />
            <h1 className="mt-3 font-bold">Hamidi</h1>
          </div>
          <ul className="md:flex hidden items-center gap-10">
            {Navlinks.map(({ _id, title, link }) => (
              <li key={_id} className="cursor-pointer tracking-normal hover:text-designcolor transition-all duration-300 ease-in-out">
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    
  );
}

export default Navabr;
