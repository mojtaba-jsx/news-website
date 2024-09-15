import React, { useState } from "react";
import "./PopularPosts.css";
function PopularPosts() {
  const [postsInfo, setPostsInf] = useState([
    {
      id: 1,
      title: "good",
      text: "good",
      image: "https://s8.uupload.ir/files/post1_9zin.png",
      author: "alex",
      authorImage: "https://s8.uupload.ir/files/author1_rfos.png",
      publishDate: "10/2/2024",
    },
    {
      id: 2,
      title: "good",
      text: "good",
      image: "https://s8.uupload.ir/files/post2_fide.png",
      author: "alex",
      authorImage: "https://s8.uupload.ir/files/author2_yep8.png",
      publishDate: "10/2/2024",
    },
    {
      id: 3,
      title: "good",
      text: "good",
      image: "https://s8.uupload.ir/files/post3_3s66.png",
      author: "alex",
      authorImage: "https://s8.uupload.ir/files/author3_a7ej.png",
      publishDate: "10/2/2024",
    },
    {
      id: 4,
      title: "good",
      text: "good",
      image: "https://s8.uupload.ir/files/post4_tfp.png",
      author: "alex",
      authorImage: "https://s8.uupload.ir/files/author4_av5f.png",
      publishDate: "10/2/2024",
    },
    {
      id: 5,
      title: "good",
      text: "good",
      image: "https://s8.uupload.ir/files/post5_0ogq.png",
      author: "alex",
      authorImage: "https://s8.uupload.ir/files/author5_tjai.png",
      publishDate: "10/2/2024",
    },
    {
      id: 6,
      title: "good",
      text: "good",
      image: "https://s8.uupload.ir/files/post6_7rdr.png",
      author: "alex",
      authorImage: "https://s8.uupload.ir/files/author6_iau1.png",
      publishDate: "10/2/2024",
    },
  ]);
  return <div>PopularPosts</div>;
}

export default PopularPosts;
