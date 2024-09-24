import React from "react";
import "./Football.css";
// import FootballCalender from "../FootballCalender/FootballCalender";
import FootballTime from "../FootballTime/FootballTime";
import FootballTable from "../FootballTable/FootballTable";
function Football() {
  return (
    <div className="football">
      {/* <FootballCalender /> */}
      <FootballTable />
      <FootballTime />
    </div>
  );
}

export default Football;
