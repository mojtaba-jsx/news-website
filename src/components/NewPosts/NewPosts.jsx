import React, { useState } from "react";
import "./NewPosts.css";
import NewPost from "../NewPost/NewPost";
import { MdKeyboardArrowLeft } from "react-icons/md";
function NewPosts() {
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
    <>
      <div className="container">
        <div className="new-posts__header">
          <h1 className="new-posts__header-title">اخبار جدید</h1>
          <button className="new-posts__header__btn">
            نمایش همه
            <MdKeyboardArrowLeft className="new-posts__header__btn-icon" />
          </button>
        </div>
        <div className="news-posts">
          {postsInfo.map((newPost) => (
            <NewPost
              key={newPost.id}
              title={newPost.title}
              text={newPost.text}
              image={newPost.image}
              author={newPost.author}
              authorImage={newPost.authorImage}
              publishDate={newPost.publishDate}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default NewPosts;
