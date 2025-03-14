import React, { useRef } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import SP from "../../assets/tm.jpg";
import SP2 from "../../assets/sp4.jpg";
import SP3 from "../../assets/sp3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiTwotoneStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Testonial() {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };
  return (
    <div id="Testimonial" className="w-full py-15">
      <div className="title flex justify-center items-center flex-col gap-2">
        <p className="text-xs uppercase text-designcolor">what clients say</p>
        <h1 className="text-5xl font-bold">Testimonial</h1>
      </div>
      <div className="max-w-6xl mx-auto  py-16">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="relative"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          speed={500}
          modules={[Pagination]}
        >
          <SwiperSlide className="">
            <div className="w-full">
              <div className="w-full md:h-[500px]  flex md:justify-between  md:flex-row flex-col md:p-r-0 pr-6 md:pl-0 pl-6">
                <div className="md:w-[35%] h-full bg-gradient-to-r from-[#132024] to-[#23272b] shadow-myshadow rounded-lg p-8 pl-14">
                  <img
                    src={SP}
                    alt=""
                    className="scale-x-[-1] h-72  rounded-lg object-cover"
                  />
                  <div className="info mt-6">
                    <p className="text-[11px] capitalize font-bold text-designcolor">
                      herat- Afghanistan
                    </p>
                    <h1 className="text-2xl font-bold mt-3 capitalize">
                      Zabiuallah Rahmani
                    </h1>
                    <p className="text-sm text-gray-400 mt-2 capitalize">
                      Oprational officer
                    </p>
                  </div>
                </div>
                <div className="md:w-[60%] h-full flex justify-between flex-col">
                  <FaQuoteRight className="text-transparent stroke-10 stroke-black size-20 mt-5" />
                  <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#132024] to-[#23272b] shadow-myshadow rounded-2xl ">
                    <div className="top flex justify-between items-center border-b-2 ml-8 mr-8 mt-8 pb-8 border-b-gray-900 ">
                      <div className="title">
                        <h1 className="capitalize font-bold text-xl">
                          learning management system
                        </h1>
                        <p className="capitalize text-gray-400 text-sm mt-2">
                          via location July 2023 - August 2024
                        </p>
                      </div>
                      <div className="stars flex gap-1 items-center">
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                      </div>
                    </div>
                    <div className="bottom">
                      <p className="text-sm p-8 leading-7">
                        The Learning Management System we implemented has been a
                        great success in transforming the way our employees
                        approach training. It has made learning more accessible,
                        efficient, and personalized, which has led to improved
                        performance and higher engagement across all
                        departments. I am confident that this system will
                        continue to play a key role in developing the skills
                        needed for future growth at Super Cola
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-full">
              <div className="w-full md:h-[500px]  flex md:justify-between  md:flex-row flex-col md:p-r-0 pr-6 md:pl-0 pl-6">
                <div className="md:w-[35%] h-full bg-gradient-to-r from-[#132024] to-[#23272b] shadow-myshadow rounded-lg p-8 pl-14">
                  <img
                    src={SP2}
                    alt=""
                    className="scale-x-[-1] h-72  rounded-lg object-cover"
                  />
                  <div className="info mt-6">
                    <p className="text-[11px] capitalize font-bold text-designcolor">
                      herat- Afghanistan
                    </p>
                    <h1 className="text-2xl font-bold mt-3 capitalize">
                      Asadullah Frotan
                    </h1>
                    <p className="text-sm text-gray-400 mt-2 capitalize">
                      Manager
                    </p>
                  </div>
                </div>
                <div className="md:w-[60%] h-full flex justify-between flex-col">
                  <FaQuoteRight className="text-transparent stroke-10 stroke-black size-20 mt-5" />
                  <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#132024] to-[#23272b] shadow-myshadow rounded-2xl ">
                    <div className="top flex justify-between items-center border-b-2 ml-8 mr-8 mt-8 pb-8 border-b-gray-900 ">
                      <div className="title">
                        <h1 className="capitalize font-bold text-xl">
                          Student Authentication System
                        </h1>
                        <p className="capitalize text-gray-400 text-sm mt-2">
                          March 2024
                        </p>
                      </div>
                      <div className="stars flex gap-1 items-center">
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                      </div>
                    </div>
                    <div className="bottom">
                      <p className="text-sm p-8 leading-7">
                        The Student Authentication System has revolutionized our
                        attendance tracking, making it faster and more secure.
                        With face and voice recognition, we no longer worry
                        about manual errors or unauthorized access. This system
                        has significantly improved efficiency in our educational
                        management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-full overflow-hidden">
              <div className="w-full md:h-[500px]  flex md:justify-between  md:flex-row flex-col md:p-r-0 pr-6 md:pl-0 pl-6">
                <div className="md:w-[35%] h-full bg-gradient-to-r from-[#132024] to-[#23272b] shadow-myshadow rounded-lg p-8 pl-14">
                  <img
                    src={SP3}
                    alt=""
                    className="scale-x-[-1] h-72  rounded-lg object-cover"
                  />
                  <div className="info mt-6">
                    <p className="text-[11px] capitalize font-bold text-designcolor">
                      Remote
                    </p>
                    <h1 className="text-2xl font-bold mt-3 capitalize">
                      John Anderson
                    </h1>
                    <p className="text-sm text-gray-400 mt-2 capitalize">
                      entrepreneur
                    </p>
                  </div>
                </div>
                <div className="md:w-[60%] h-full flex justify-between flex-col">
                  <FaQuoteRight className="text-transparent stroke-10 stroke-black size-20 mt-5" />
                  <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#132024] to-[#23272b] shadow-myshadow rounded-2xl ">
                    <div className="top flex justify-between items-center border-b-2 ml-8 mr-8 mt-8 pb-8 border-b-gray-900 ">
                      <div className="title">
                        <h1 className="capitalize font-bold text-xl">
                          E-Commerce Website
                        </h1>
                        <p className="capitalize text-gray-400 text-sm mt-2">
                          via remote - mar 4, 2024-july 30,2025
                        </p>
                      </div>
                      <div className="stars flex gap-1 items-center">
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                      </div>
                    </div>
                    <div className="bottom">
                      <p className="text-sm p-8 leading-7">
                        The e-commerce website developed remotely exceeded my
                        expectations with its seamless design and user-friendly
                        interface. The platform runs smoothly, ensuring a
                        hassle-free shopping experience for customers. It’s a
                        game-changer for my online business!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
       

          <div className="absolute top-0 right-0 z-10 flex gap-5">
            <button
              className="prev-btn shadow bg-black/20 w-10 h-8  inline-flex justify-center items-center gap-4 rounded-md cursor-pointer"
              onClick={goPrev}
            >
              <FaArrowLeft />
            </button>
            <button
              className="next-btn shadow bg-black/20 w-10 h-8  inline-flex justify-center items-center gap-4 rounded-md cursor-pointer"
              onClick={goNext}
            >
              <FaArrowRight />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Testonial;
