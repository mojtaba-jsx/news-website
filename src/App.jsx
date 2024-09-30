import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CategorySlider from "./components/CategorySlider/CategorySlider";
import Landing from "./components/Landing/Landing";
import PopularPosts from './components/PopularPosts/PopularPosts'
import Football from './components/Football/Football'
import NewPosts from './components/NewPosts/NewPosts'
import LatestVideos from './components/LatestVideos/LatestVideos'
import Weather from './components/Weather/Weather'

function App() {
  return (
    <div>
      <Header />
      <CategorySlider />
      <Landing/>
      <PopularPosts/>
      <Football/>
      <NewPosts/>
      <LatestVideos/>
      <Weather/>
    </div>
  );
}

export default App;
