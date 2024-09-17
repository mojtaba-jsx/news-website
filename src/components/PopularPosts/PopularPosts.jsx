import React, { useState } from "react";
import "./PopularPosts.css";
import PostCard from "../PostCard/PostCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function PopularPosts() {
  const [postsInfo, setPostsInf] = useState([
    {
      id: 1,
      title: "خوشمزه ترین غذا ها در ترکیه",
      text: "چشیدن بهترین طعم و عطر ادویه ها در غذا های ترکیه ",
      image: "https://s8.uupload.ir/files/post1_9zin.png",
      author: "الکس",
      authorImage: "https://s8.uupload.ir/files/author1_rfos.png",
      publishDate: "10/2/2024",
    },
    {
      id: 2,
      title: "چه نوع آهنگی برای رقص مناسب است ؟",
      text: "از اهنگ های شاد برای رقصیدن استفاده می کنیم که برای رقص عالی می باشد ",
      image: "https://s8.uupload.ir/files/post2_fide.png",
      author: "جیمز",
      authorImage: "https://s8.uupload.ir/files/author2_yep8.png",
      publishDate: "10/2/2024",
    },
    {
      id: 3,
      title: "بهترین زمان در روز برای کوهنوردی",
      text: "بهترین زمان برای کوهنوردی در طلوع صبح می باشد که انرژی لازیم برای فتح قله ها را داریم ",
      image: "https://s8.uupload.ir/files/post3_3s66.png",
      author: "سارا",
      authorImage: "https://s8.uupload.ir/files/author3_a7ej.png",
      publishDate: "10/2/2024",
    },
    {
      id: 4,
      title: "تئاتر نمایشی جذاب برای مردم",
      text: "امروزه با گسترش سینما و تلوزیون هنوز هم تئاتر برای مردم همچنان جذاب می باشد",
      image: "https://s8.uupload.ir/files/post4_tfp.png",
      author: "alex",
      authorImage: "https://s8.uupload.ir/files/author4_av5f.png",
      publishDate: "10/2/2024",
    },
    {
      id: 5,
      title: "حفظ طبیعت با تلاش همگانی مردم",
      text: "طبیعت و محیط زیست  باید همیشه با تلاش مردم و دولت ها  محافظت شود تا برای حیات وحش مشکلی ایجاد نشود",
      image: "https://s8.uupload.ir/files/post5_0ogq.png",
      author: "مریم",
      authorImage: "https://s8.uupload.ir/files/author5_tjai.png",
      publishDate: "10/2/2024",
    },
    {
      id: 6,
      title: "شلوغ ترین شهر های دنیا",
      text: "امروزه پایتخت های کشور های جهان از شلوغ ترین شهر های جهان می باشند که هر ساله شلوغ تر از سال قبل می شوند ",
      image: "https://s8.uupload.ir/files/post6_7rdr.png",
      author: "alex",
      authorImage: "https://s8.uupload.ir/files/author6_iau1.png",
      publishDate: "10/2/2024",
    },
  ]);
  return (
    <div className="popular-posts">
      <div className="container">
        <div className="popular-posts__header">
          <h1 className="popular-posts__header-title">پست های محبوب</h1>
          <div className="popular-posts__slider-btns">
            <div className="swiper3-next-btn">
              <IoIosArrowForward className="swiper3-btn" />
            </div>
            <div className="swiper3-prev-btn">
              <IoIosArrowBack className="swiper3-btn" />
            </div>
          </div>
        </div>

        <Swiper
          className="swiper-wrapper3"
          modules={[Navigation]}
          spaceBetween={100}
          slidesPerView={4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper3-next-btn",
            prevEl: ".swiper3-prev-btn",
          }}
          centeredSlides={true}
          centerInsufficientSlides={true}
          pagination={{ clickable: true }}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            // موبایل‌های کوچک (320px تا 480px)
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // موبایل‌های بزرگ (480px تا 768px)
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            // تبلت‌ها (768px تا 1024px)
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // دسکتاپ‌های کوچک (1024px تا 1440px)
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // دسکتاپ‌های بزرگ (بیشتر از 1440px)
            1440: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {postsInfo.map((slide) => (
            <SwiperSlide key={slide.id} id="swiper3-slide">
              <PostCard
                title={slide.title}
                text={slide.text}
                image={slide.image}
                authorImage={slide.authorImage}
                publishDate={slide.publishDate}
                author={slide.author}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PopularPosts;
