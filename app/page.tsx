"use client";

import { Skies, skyMembers } from "@/data/core";
import { Ground, Sky } from "@/data/sky-ground";
import { useState } from "react";

export default function Home() {
  const [year, setYear] = useState(2000);
  const [sky, setSky] = useState<Skies>("갑");
  const [ground, setGround] = useState("");
  const [skyView, setSkyView] = useState<any>();
  const [groundView, setGroundView] = useState();

  const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(+e.target.value);
  };
  const handleChangeSky = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (skyMembers.find((el: Skies) => el === e.target.value)) {
      let input: Skies = e.target.value as Skies;
      setSky(input);
    }
  };
  const handleChangeGround = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGround(e.target.value);
  };
  const handleSearchSkyInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSkyView(Sky.getOne(sky));
    console.log(skyView);
  };
  const handleSearchGroundInfo = () => {};

  return (
    <form className="w-full flex flex-col gap-2 justify-center items-center p-5">
      {/* <div>생년</div>
      <input
        value={year}
        type="number"
        onChange={handleChangeYear}
        className="w-[200px] h-10 ring-2 ring-neutral-800"
      /> */}
      <div>천간</div>
      <select
        value={sky}
        name="sky"
        onChange={handleChangeSky}
        className="w-[200px] h-10 ring-2 ring-neutral-800"
      >
        {skyMembers.map((el: Skies, idx: number) => (
          <option key={idx}>{el}</option>
        ))}
      </select>
      <button onClick={handleSearchSkyInfo}>조회</button>
      <div>지지</div>
      <input
        value={ground}
        type="number"
        name="ground"
        onChange={handleChangeGround}
        className="w-[200px] h-10 ring-2 ring-neutral-800"
      />
      <button onClick={handleSearchGroundInfo}>조회</button>
      {skyView ? (
        <div>
          <div
            className={`aspect-square bg-[${skyView.wuXing.color}] p-3 text-white flex justify-center items-center font-bold text-2xl`}
          >
            {skyView.ch}
          </div>
          <div>{skyView.kr}</div>
        </div>
      ) : (
        ""
      )}
    </form>
  );
}
