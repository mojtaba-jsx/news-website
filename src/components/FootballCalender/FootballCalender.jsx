import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // برای استایل‌های پیش‌فرض
import "./FootballCalender.css";

function FootballCalender() {
  const [date, setDate] = useState(new Date());
  const today = new Date();

  // محاسبه تاریخ دو ماه قبل
  const twoMonthsAgo = new Date();
  twoMonthsAgo.setMonth(today.getMonth() - 1);
  const highlightTileClass = ({ date, view }) => {
    if (
      view === "month" &&
      date.getDate() === 15 &&
      date.getMonth() === 7 &&
      date.getFullYear() === 2024
    ) {
      return "hide-day-number"; // کلاس سفارشی
    }
    return null;
  };

  const renderTileContent = ({ date, view }) => {
    if (view === "month") {
      // بررسی اگر تاریخ خاصی بود (مثلاً 15 اوت 2024)
      if (
        date.getDate() === 10 &&
        date.getMonth() === 8 &&
        date.getFullYear() === 2024
      ) {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://s8.uupload.ir/files/arsenal-logo-32059_ieth.png" // جایگزین با URL تصویر واقعی
              alt="Special"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />
          </div>
        );
      }
    } else if (
      date.getDate() === 16 &&
      date.getMonth() === 8 &&
      date.getFullYear() === 2024
    ) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://s8.uupload.ir/files/arsenal-logo-32059_ieth.png" // جایگزین با URL تصویر واقعی
            alt="Special"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </div>
      );
    }
    return null; // برای روزهای دیگر هیچ محتوایی اضافه نمی‌شود
  };

  return (
    <div className="football-calender">
      <Calendar
        tileContent={renderTileContent}
        tileClassName={highlightTileClass} // اضافه کردن کلاس به سلول خاص
        // locale="fa-IR" // تغییر زبان به فارسی
        minDate={twoMonthsAgo} // محدود کردن تاریخ به آینده
        maxDate={today} // محدود کردن تاریخ به یک تاریخ خاص
        // selectRange={true} // انتخاب یک بازه زمانی
      />
    </div>
  );
}

export default FootballCalender;
