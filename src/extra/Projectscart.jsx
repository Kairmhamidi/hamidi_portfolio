import React from "react";

function Projectscart({ title, description, firsticon, secondicon, image }) {
  return (
    <div className="md:w-full h-100 py-10 rounded-lg shadow-myshadow bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 md:mr-0 mr-3">
      <div className="image w-85  rounded-lg overflow-hidden mx-auto mb-10">
        <img
          src={image}
          alt=""
          className="rounded-md hover:scale-110 hover:transition-transform duration-300 object-cover cursor-pointer "
        />
      </div>
      <div className="flex mr-14 ml-14 mb-[30px] flex-col">
        <div className="flex justify-between">
          <h1 className="tracking-wide text-designcolor font-bold md:text-xl text-sm">{title}</h1>
          <div className="links flex gap-3 items-center">
            <div className="bg-black/70 w-7 h-7 text-center p-3 flex justify-center items-center rounded-full hover:text-red-700 shadow transition-colors duration-500">
              <span className=" cursor-pointer"> {firsticon}</span>
            </div>
            <div className="bg-black/70 w-7 h-7 text-center p-3 flex justify-center items-center rounded-full hover:text-designcolor shadow transition-colors duration-500">
              <span className="cursor-pointer "> {secondicon}</span>
            </div>
          </div>
        </div>
        <p className="tracking-tight capitalize font-normal text-sm mt-4">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Projectscart;
