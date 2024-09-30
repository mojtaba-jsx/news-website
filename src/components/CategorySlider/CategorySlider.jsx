import React, { useState } from "react";
import "./CategorySlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CategorySliderItem from "../CategorySliderItem/CategorySliderItem";
import { Autoplay, Navigation } from "swiper/modules";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function CategorySlider() {
  const [sliderInfo, setSliderInfo] = useState([
    {
      id: 1,
      title: "غذا",
      image: " https://s8.uupload.ir/files/food_bra2.png",
    },
    {
      id: 2,
      title: "حیوانات",
      image: "https://s8.uupload.ir/files/animal_ki9j.png",
    },
    {
      id: 3,
      title: "ماشین",
      image: "https://s8.uupload.ir/files/car_g11a.png",
    },
    {
      id: 4,
      title: "ورزش",
      image: " https://s8.uupload.ir/files/sport_hjf2.png",
    },
    {
      id: 5,
      title: "موسیقی",
      image: "https://s8.uupload.ir/files/music_5q9u.png",
    },
    {
      id: 6,
      title: "تکنولوژِی",
      image: "https://s8.uupload.ir/files/technology_dni0.png",
    },
    {
      id: 7,
      title: "طبیعت",
      image: "https://s8.uupload.ir/files/nature_mfop.png",
    },
    {
      id: 8,
      title: "انتزاعی",
      image: "https://s8.uupload.ir/files/abstract_6jwq.png",
    },
  ]);

  return (
    <>
      <div className="container">
        <div className="swiper-button-prev">
          {" "}
          <IoIosArrowBack />
        </div>
        <div className="swiper-button-next">
          {" "}
          <IoIosArrowForward />
        </div>
        <Swiper
          className="swiper-wrapper1"
          modules={[Autoplay, Navigation]} // اضافه کردن ماژول‌های Autoplay و Navigation
          spaceBetween={200}
          slidesPerView={6}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }} // تنظیمات ناوبری
          centeredSlides={true}
          centerInsufficientSlides={true}
          breakpoints={{
            // وقتی عرض صفحه کمتر از 640 پیکسل است
            680: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            720: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            // وقتی عرض صفحه بین 640 تا 768 پیکسل است
            920: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            // وقتی عرض صفحه بیشتر از 768 پیکسل است
            1200: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
          loop={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {sliderInfo.map((slide) => (
            <SwiperSlide key={slide.id}>
              <CategorySliderItem title={slide.title} image={slide.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default CategorySlider;
