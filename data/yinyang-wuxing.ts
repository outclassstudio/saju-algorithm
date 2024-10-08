import { Skies, skyMembers, WuXings, YinYangs } from "./core";

class BaseAbstractClass {
  // abstract getKorean(key:any):string;
  // abstract getChinese(key:any):string;
}

interface Atom extends BaseAbstractClass {
  getYinYang(): () => string;
}

interface GanJi extends BaseAbstractClass {
  getWuXing(): () => string;
}

interface BaseKey {
  id?: number;
  kr: string;
  ch: string;
}

//음양 클래스
export class YinYang implements BaseAbstractClass {
  static readonly 양 = ["양", "陽", 1];
  static readonly 음 = ["음", "陰", -1];

  private convertToObj([kr, ch, value]: string[]) {
    return {
      kr,
      ch,
      value,
    };
  }

  static getAll() {}

  static getKorean(key: YinYangs) {
    return YinYang[key][0];
  }
  static getChinese(key: YinYangs) {
    return YinYang[key][1];
  }
}

interface WuXingKeys extends BaseKey {
  color: string;
}

// 오행 클래스
export class WuXing implements BaseAbstractClass {
  static readonly 목 = ["목", "木", "#4CAF50"];
  static readonly 화 = ["화", "火", "#F44336"];
  static readonly 토 = ["토", "土", "#FFD600"];
  static readonly 금 = ["금", "金", "#E0E0E0"];
  static readonly 수 = ["수", "水", "#039BE5"];

  private convertToObj([kr, ch, color]: string[]) {
    return {
      kr,
      ch,
      color,
    };
  }

  static getKorean(key: WuXings) {
    // return this.convertToObj(WuXing[key]).kr;
    return WuXing[key][0];
  }
  static getChinese(key: WuXings) {
    // return this.convertToObj(WuXing[key]).ch;
    return WuXing[key][1];
  }
  static getColor(key: WuXings) {
    // return this.convertToObj(WuXing[key]).color;
    return WuXing[key][2];
  }
}
