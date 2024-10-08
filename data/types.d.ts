import { Ground, Sky } from "./sky-ground";

export type SkyType = [number, string, string, string[], (string | number)[]];
export type GroundType = [
  number,
  string,
  string,
  string[],
  (string | number)[],
  {
    first: JiJangGanOutput;
    second: JiJangGanOutput;
    third: JiJangGanOutput;
  }
];
export interface JiJangGanInput {
  sky: Skies;
  rate: number;
}
export interface JiJangGanOutput {
  rate: number;
  korean: string;
  chinese: string;
  wuxing: string[];
}

const sky_convert = new Sky().convertToObj;
const ground_convert = new Ground().convertToObj;
export type SkyReturn = ReturnType<typeof sky_convert>;
export type GroundReturn = ReturnType<typeof ground_convert>;
