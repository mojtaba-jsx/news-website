import React, { useState } from "react";
import "./FootballTable.css";
function FootballTable() {
  const [tableInfo, setTableInfo] = useState([
    {
      id: 1,
      team: "Arsenal",
      logo: "https://s8.uupload.ir/files/arsenal_o0xh.png",
      rank: 1,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 2,
      team: "AstonVilla",
      logo: "https://s8.uupload.ir/files/aston-villa_43vh.png",
      rank: 2,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 3,
      team: "Brentford",
      logo: "https://s8.uupload.ir/files/berntford_k932.png",
      rank: 3,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 4,
      team: "Bournmouth",
      logo: "https://s8.uupload.ir/files/bournmouth_yk6j.png",
      rank: 4,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 5,
      team: "Brighton",
      logo: "https://s8.uupload.ir/files/brighton_ga4k.png",
      rank: 5,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 6,
      team: "Chelsea",
      logo: "https://s8.uupload.ir/files/chelsea_ivbo.png",
      rank: 6,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 7,
      team: "CrystalPalace",
      logo: "https://s8.uupload.ir/files/crystal-palace_w50m.png",
      rank: 7,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 8,
      team: "Everton",
      logo: "https://s8.uupload.ir/files/everton_thde.png",
      rank: 8,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 9,
      team: "Fulham",
      logo: "https://s8.uupload.ir/files/fulham_2nb.png",
      rank: 9,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 10,
      team: "Ipswitch",
      logo: "https://s8.uupload.ir/files/ipswitch_pr.png",
      rank: 10,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 11,
      team: "Leicester",
      logo: "https://s8.uupload.ir/files/leicester_199g.png",
      rank: 11,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 12,
      team: "Liverpool",
      logo: "https://s8.uupload.ir/files/liverpool_e99t.png",
      rank: 12,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 13,
      team: "ManchesterUnited",
      logo: "https://s8.uupload.ir/files/manchester0united_plpg.png",
      rank: 13,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 14,
      team: "ManchesterCity",
      logo: "https://s8.uupload.ir/files/manchester-city_3c99.png",
      rank: 14,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 15,
      team: "NewCastle",
      logo: "https://s8.uupload.ir/files/newcastle_b6a6.png",
      rank: 15,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 16,
      team: "NottinghamForest",
      logo: "https://s8.uupload.ir/files/nottingham-forest_ecfg.png",
      rank: 16,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 17,
      team: "SouthHampton",
      logo: "https://s8.uupload.ir/files/southhampton_jwyi.png",
      rank: 17,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 18,
      team: "Tottenham",
      logo: "https://s8.uupload.ir/files/tottenham_n3d0.png",
      rank: 18,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 19,
      team: "WestHam",
      logo: "https://s8.uupload.ir/files/westham_9ika.png",
      rank: 19,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
    {
      id: 20,
      team: "Wolverhampton",
      logo: "https://s8.uupload.ir/files/wolverhampton_bsao.png",
      rank: 20,
      gp: 38,
      w: 29,
      d: 6,
      l: 6,
      f: 99,
      a: 26,
      gd: 40,
      pts: 10,
    },
  ]);

  return (
    <>
      <div className="table__wrapper">
        <div className="football-table">
          <table className="football-table__table">
            <thead>
              <tr>
                <td></td>
                <td>Club</td>
                <td>GP</td>
                <td>W</td>
                <td>D</td>
                <td>L</td>
                <td>F</td>
                <td>A</td>
                <td>GD</td>
                <td>Pts</td>
              </tr>
            </thead>
            <tbody>
              {tableInfo
                .sort((a, b) => a.rank - b.rank)
                .map((info) => (
                  <tr key={info.id}>
                    <td className="football-table__logo">
                      <span className="football-table__logo-rank">
                        {info.rank}
                      </span>
                      <img
                        src={info.logo}
                        alt="football"
                        className="football-table__logo-image"
                      />
                    </td>
                    <td className="football-table__team">{info.team}</td>
                    <td>{info.gp}</td>
                    <td>{info.w}</td>
                    <td>{info.d}</td>
                    <td>{info.l}</td>
                    <td>{info.f}</td>
                    <td>{info.a}</td>
                    <td>{info.gd}</td>
                    <td>{info.pts}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default FootballTable;
