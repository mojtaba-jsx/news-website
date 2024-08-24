import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
function App() {
  return (
    <div>
      <h1>وب سایت خبری</h1>
      <Button btnValue={"فعال"} isActive={true} />
      <Button btnValue={"غیر فعال"} isActive={false} />
    </div>
  );
}

export default App;
