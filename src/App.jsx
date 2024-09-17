import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CategorySlider from "./components/CategorySlider/CategorySlider";
import Landing from "./components/Landing/Landing";
import PopularPosts from './components/PopularPosts/PopularPosts'
function App() {
  return (
    <div>
      <Header />
      <CategorySlider />
      <Landing/>
      <PopularPosts/>
    </div>
  );
}

export default App;
