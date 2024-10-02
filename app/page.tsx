"use client";

import { useState } from "react";

export default function Home() {
  const [year, setYear] = useState(2000);

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
