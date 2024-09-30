import React, { useState } from "react";
import "./WeatherChart.css";
import { TiWeatherSunny } from "react-icons/ti";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
function WeatherChart() {
  const [weatherChartData, setWeatherChartData] = useState([
    { name: "فروردین", uv: 4000, pv: 2400, amt: 2400 },
    { name: "اردیبهشت", uv: 3000, pv: 1398, amt: 2210 },
    { name: "خرداد", uv: 2000, pv: 9800, amt: 2290 },
    { name: "تیر", uv: 2780, pv: 3908, amt: 2000 },
    { name: "مرداد", uv: 1890, pv: 4800, amt: 2181 },
    { name: "شهریور", uv: 2390, pv: 3800, amt: 2500 },
    { name: "مهر", uv: 3490, pv: 4300, amt: 2100 },
  ]);
  return (
    <>
      <div className="weather-chart">
        <div className="weather-chart__top">
          <div className="weather-chart__top__right">
            <div className="weather-chart__top__right-icon">
              <TiWeatherSunny className="weather-chart__top__right-icon-tag" />
            </div>
            <div className="weather-chart__top__right-temp">29</div>
            <div className="weather-chart__top__right-info">
              <span className="weather-chart__top__right-info-wind">
                3 Km/H
              </span>
              <span className="weather-chart__top__right-info-humidity">
                70%
              </span>
              <span className="weather-chart__top__right-info-precipitation">
                2%
              </span>
            </div>
          </div>
          <div className="weather-chart__top__left">
            <span className="weather-chart__top__left-city">نیویورک</span>
            <span className="weather-chart__top__left-date">
              چهارشنبه 14:00
            </span>
          </div>
        </div>
        {/* =========== Weather Chart=========== */}
        <div className="weather-chart__middle">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={weatherChartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* =========== Weather Week=========== */}

        <div className="weather-chart__bottom">
          <div className="weather-chart__bottom__weekday">
            <span className="weather-chart__bottom__weekday-name">شنبه</span>
            <span className="weather-chart__bottom__weekday-icon"></span>
            <span className="weather-chart__bottom__weekday-temps">
              <span className="weather-chart__bottom__weekday-temps-1">29</span>
              <span className="weather-chart__bottom__weekday-temps-2">20</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherChart;
