"use client";

import { JiJangGan, Sky, WuXing, YinYang } from "@/data/yinyang";
import { useState } from "react";

export default function Home() {
  const [year, setYear] = useState(2000);

  // console.log(YinYang.getKorean("yang"));
  // console.log(new WuXing().getChinese("earth"));
  // console.log(
  //   new JiJangGan({ sky: "갑", rate: 10 }, null, {
  //     sky: "갑",
  //     rate: 10,
  //   }).getItem()
  // );
  console.log(Sky.getAll());

  const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(+e.target.value);
  };

  return (
    <form className="w-full flex flex-col gap-2 justify-center items-center p-5">
      <div>생년</div>
      <input
        value={year}
        type="number"
        onChange={handleChangeYear}
        className="w-[200px] h-10 ring-2 ring-neutral-800"
      />
    </form>
  );
}
