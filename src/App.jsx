import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CategorySlider from "./components/CategorySlider/CategorySlider";
import Landing from "./components/Landing/Landing";
import PopularPosts from './components/PopularPosts/PopularPosts'
import Football from './components/Football/Football'
function App() {
  return (
    <div>
      <Header />
      <CategorySlider />
      <Landing/>
      <PopularPosts/>
      <Football/>
    </div>
  );
}

export default App;
