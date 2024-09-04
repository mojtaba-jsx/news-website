import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CategorySlider from "./components/CategorySlider/CategorySlider";
import Landing from "./components/Landing/Landing";
function App() {
  return (
    <div>
      <Header />
      <CategorySlider />
      <Landing/>
    </div>
  );
}

export default App;
