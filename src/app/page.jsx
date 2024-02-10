"use client";
import Image from "next/image";
import styles from "./home.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const elastic = [
  {
    id: 1,
    title: "Bright Holi Festival Of Colors",
    label: "folk festival of color and Annual spring Festival",
    imageUrl: "/slider/slider1.jpg",
  },
  {
    id: 2,
    title: "Krisna Gaura Purnima Celebration",
    label: "one of the mail holiday in gaura purnima",
    imageUrl: "/slider/slider2.jpg",
  },
  {
    id: 4,
    title: "The Incredible Temples Of Pattadakal",
    label: "the famous complex of ancient indian temples",
    imageUrl: "/slider/slider3.jpg",
  },
];
const CustomSlide = (props) => {
  const { index, imgurl, title, label } = props;
  return (
    <>
      {/* <div className=" bg-blend-screen w-full z-0"> */}
      <div key={index} className="relative  sm:h-[100vh] h-[60vh]    w-full">
        <div
          className={`absolute insert-0   top-0 z-10 sm:h-[100vh] h-[60vh]   overflow-hidden w-full bg-no-repeat bg-cover flex flex-col justify-center items-center  `}
          style={{
            backgroundImage: `url(${imgurl})`,
            opacity: "60%",
          }}
        >
        </div>
        <div className="absolute  bg-transparent z-10 sm:h-[100vh] h-[50vh] font-serif  overflow-hidden w-full bg-no-repeat bg-cover flex flex-col justify-center items-center ">
          <h2 className=" font-bold  text-white sm:text-[4rem] leading-tight text-2xl flex justify-center sm:p-0  p-5 z-20  ">
            {title}
          </h2>
          <p className="sm:p-10 hidden sm:flex">{label}</p>
          <button className="bg-red-500 bg:hover sm:w-[10rem] p-2">
            Read More
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          
        }}
      >
        <ul className="p-2"> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {elastic.map((item) => (
            <CustomSlide
              key={item.id}
              title={item.title}
              label={item.label}
              imgurl={item.imageUrl}
            />
          ))}
        </Slider>
      </div>
      {/* <div className={`styles.container bg-white text-red-500`}>
        
          <div className={styles.contWrapper}>
            <Carousel breakPoints={breakPoints}>
              {elastic.map((item) => (
                <div
                  key={item.id}
                  className={styles.card}
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                  <div className={styles.title}>
                    <h3>{item.title} </h3>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div> */}
    </>
  );
};

export default Home;
