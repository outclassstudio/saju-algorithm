// class 설계
// korean, chinese 호출 메소드
// 음양 호출
// 오행 호출

abstract class BaseAbstractClass {
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

type YinYangKey = "yin" | "yang";

//음양 클래스
export class YinYang implements BaseAbstractClass {
  static readonly yang: BaseKey = {
    id: 1,
    kr: "양",
    ch: "陽",
  };
  static readonly yin: BaseKey = {
    id: -1,
    kr: "양",
    ch: "陰",
  };

  static getKorean(key: YinYangKey) {
    return YinYang[key].kr;
  }
  static getChinese(key: YinYangKey) {
    return YinYang[key].ch;
  }
}

interface WuXingKeys extends BaseKey {
  color: string;
}

type WuXings = "wood" | "fire" | "earth" | "metal" | "water";

// 오행 클래스
export class WuXing implements BaseAbstractClass {
  static readonly wood = ["목", "木", "#4CAF50"];
  static readonly fire = ["화", "火", "#F44336"];
  static readonly earth = ["토", "土", "#FFD600"];
  static readonly metal = ["금", "金", "#E0E0E0"];
  static readonly water = ["수", "水", "#039BE5"];

  private convertToObj([kr, ch, color]: string[]) {
    return {
      kr,
      ch,
      color,
    };
  }

  getKorean(key: WuXings) {
    return this.convertToObj(WuXing[key]).kr;
  }
  getChinese(key: WuXings) {
    return this.convertToObj(WuXing[key]).ch;
  }
  getColor(key: WuXings) {
    return this.convertToObj(WuXing[key]).color;
  }
}

// export const sky = {
//   a: { id: 1, kr: "갑", ch: "甲", wuxing: wuxing.wood, yinyang: yinyang.yang },
//   b: { id: 2, kr: "을", ch: "乙", wuxing: wuxing.wood, yinyang: yinyang.yin },
//   c: { id: 3, kr: "병", ch: "丙", wuxing: wuxing.fire, yinyang: yinyang.yang },
//   d: { id: 4, kr: "정", ch: "丁", wuxing: wuxing.fire, yinyang: yinyang.yin },
//   e: { id: 5, kr: "무", ch: "戊", wuxing: wuxing.earth, yinyang: yinyang.yang },
//   f: { id: 6, kr: "기", ch: "己", wuxing: wuxing.earth, yinyang: yinyang.yin },
//   g: { id: 7, kr: "경", ch: "庚", wuxing: wuxing.metal, yinyang: yinyang.yang },
//   h: { id: 8, kr: "신", ch: "辛", wuxing: wuxing.metal, yinyang: yinyang.yin },
//   i: { id: 9, kr: "임", ch: "壬", wuxing: wuxing.water, yinyang: yinyang.yang },
//   j: { id: 10, kr: "계", ch: "癸", wuxing: wuxing.water, yinyang: yinyang.yin },
// };

class JiJangGan {
  public first: string;
  public second: string;
  public third: string;

  constructor(first: string, second: string, third: string) {
    this.first = first;
    this.second = second;
    this.third = third;
  }

  // public Item(sky, rate) {
  //   this.rate = rate

  // }
}
