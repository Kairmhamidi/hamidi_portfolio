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
                      Safiullah solaimani
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
                          via interview- mar 4, 2022-aug 30,2023
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium rerum, quaerat, illum velit est soluta
                        voluptates, maiores fuga neque similique ullam saepe
                        ratione assumenda ipsam quod quo molestiae. Dolorum,
                        quisquam hic aperiam quaerat delectus possimus molestiae
                        culpa quidem aliquam quasi aliquid. Sunt eligendi omnis
                        labore fugiat veritatis alias deserunt doloremque.
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
                      Safiullah solaimani
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
                          via interview- mar 4, 2022-aug 30,2023
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium rerum, quaerat, illum velit est soluta
                        voluptates, maiores fuga neque similique ullam saepe
                        ratione assumenda ipsam quod quo molestiae. Dolorum,
                        quisquam hic aperiam quaerat delectus possimus molestiae
                        culpa quidem aliquam quasi aliquid. Sunt eligendi omnis
                        labore fugiat veritatis alias deserunt doloremque.
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
                      herat- Afghanistan
                    </p>
                    <h1 className="text-2xl font-bold mt-3 capitalize">
                      Safiullah solaimani
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
                          via interview- mar 4, 2022-aug 30,2023
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium rerum, quaerat, illum velit est soluta
                        voluptates, maiores fuga neque similique ullam saepe
                        ratione assumenda ipsam quod quo molestiae. Dolorum,
                        quisquam hic aperiam quaerat delectus possimus molestiae
                        culpa quidem aliquam quasi aliquid. Sunt eligendi omnis
                        labore fugiat veritatis alias deserunt doloremque.
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
                    src={SP}
                    alt=""
                    className="scale-x-[-1] h-72  rounded-lg object-cover"
                  />
                  <div className="info mt-6">
                    <p className="text-[11px] capitalize font-bold text-designcolor">
                      herat- Afghanistan
                    </p>
                    <h1 className="text-2xl font-bold mt-3 capitalize">
                      Safiullah solaimani
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
                          via interview- mar 4, 2022-aug 30,2023
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium rerum, quaerat, illum velit est soluta
                        voluptates, maiores fuga neque similique ullam saepe
                        ratione assumenda ipsam quod quo molestiae. Dolorum,
                        quisquam hic aperiam quaerat delectus possimus molestiae
                        culpa quidem aliquam quasi aliquid. Sunt eligendi omnis
                        labore fugiat veritatis alias deserunt doloremque.
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
