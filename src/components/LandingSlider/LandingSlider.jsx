import React, { useState } from "react";
import "./LandingSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import LandingSliderItem from "../LandingSliderItem/LandingSliderItem";
function LandingSlider() {
  const [slidesInfo, setSlidesInfo] = useState([
    {
      id: 1,
      title: "با حیوانات در طبیعت چگونه بر خورد کنیم ؟",
      text: "در برخورد با حیوانات باید به درستی رفتار کنیم تا آن ها آسیب نبینند",
      image: "https://s8.uupload.ir/files/dog-1_apkm.png",
    },
    {
      id: 2,
      title: "بهترین برند ماشین چیست ؟",
      text: "بهترنی برند ماشین دنیا  از نظر کارشناسان متفاوت می باشد و هر کدام نظرات متفاوتی دارند",
      image: "https://s8.uupload.ir/files/car-1_iz71.png",
    },
    {
      id: 3,
      title: "فست فود مضر یا مفید ؟",
      text: "مقالات متنوعی در این باره چاپ شده که با برسی آن ها می توان به جوابی مناسب رسید",
      image: "https://s8.uupload.ir/files/food-1_szp3.png",
    },
    {
      id: 4,
      title: "تکنولوژی در سال 2024 چقدر پیشرفت داشته است ؟",
      text: "با ظهور ابزار های هوش مصنوعی و در دسترس بودن آن می توان نظرات مثبتی را در این باره داد که هر یک را برسی می کنیم ",
      image: "https://s8.uupload.ir/files/technology_o2a6.png",
    },
  ]);

  return (
    <>
      <div className="swiper2-container">
        <Swiper
          className="swiper-wrapper2"
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper2-next-btn",
            prevEl: ".swiper2-prev-btn",
          }}
          centeredSlides={true}
          centerInsufficientSlides={true}
          pagination={{ clickable: true }}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slidesInfo.map((slide) => (
            <SwiperSlide key={slide.id}>
              <LandingSliderItem
                title={slide.title}
                text={slide.text}
                image={slide.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper2-prev-btn">
          <IoIosArrowBack className="swiper-btn" />
        </div>
        <div className="swiper2-next-btn">
          <IoIosArrowForward className="swiper-btn" />
        </div>
      </div>
    </>
  );
}

export default LandingSlider;
