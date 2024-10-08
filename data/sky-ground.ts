import { GroundMembers, Grounds, Skies, skyMembers } from "./core";
import {
  GroundReturn,
  GroundType,
  JiJangGanInput,
  JiJangGanOutput,
  SkyType,
} from "./types";
import { WuXing, YinYang } from "./yinyang-wuxing";

//천간 클래스
export class Sky {
  static 갑: SkyType = [1, "갑", "甲", WuXing.목, YinYang.양];
  static 을: SkyType = [2, "을", "乙", WuXing.목, YinYang.음];
  static 병: SkyType = [3, "병", "丙", WuXing.화, YinYang.양];
  static 정: SkyType = [4, "정", "丁", WuXing.화, YinYang.음];
  static 무: SkyType = [5, "무", "戊", WuXing.토, YinYang.양];
  static 기: SkyType = [6, "기", "己", WuXing.토, YinYang.음];
  static 경: SkyType = [7, "경", "庚", WuXing.금, YinYang.양];
  static 신: SkyType = [8, "신", "辛", WuXing.금, YinYang.음];
  static 임: SkyType = [9, "임", "壬", WuXing.수, YinYang.양];
  static 계: SkyType = [10, "계", "癸", WuXing.수, YinYang.음];

  //todo 타입정의
  private convertToObj(sky: SkyType) {
    return {
      idx: sky[0],
      kr: sky[1],
      ch: sky[2],
      wuXing: {
        kr: sky[3][0],
        ch: sky[3][1],
        color: sky[3][2],
      },
      YinYang: {
        kr: sky[4][0],
        ch: sky[4][1],
      },
    };
  }

  static getAll() {
    let AllSkies: any[] = [];
    skyMembers.forEach((el: Skies) =>
      AllSkies.push(new Sky().convertToObj(Sky[el]))
    );
    return AllSkies;
  }
  static getOne(key: Skies) {
    return new Sky().convertToObj(Sky[key]);
  }
  static getId(key: Skies) {
    return Sky[key][0];
  }
  static getKorean(key: Skies) {
    return Sky[key][1];
  }
  static getChinese(key: Skies) {
    return Sky[key][2];
  }
  static getWuxing(key: Skies) {
    return Sky[key][3];
  }
  static getYinYang(key: Skies) {
    return Sky[key][4];
  }
}

//지장간 클래스
export class JiJangGan {
  public first: JiJangGanOutput | null;
  public second: JiJangGanOutput | null;
  public third: JiJangGanOutput | null;

  constructor(
    first: JiJangGanInput | null,
    second: JiJangGanInput | null,
    third: JiJangGanInput | null
  ) {
    this.first = this.setItem(first);
    this.second = this.setItem(second);
    this.third = this.setItem(third);
  }

  getItem() {
    return {
      first: this.first,
      second: this.second,
      third: this.third,
    };
  }
  setItem(item: JiJangGanInput | null) {
    if (!item) return null;
    return {
      rate: item.rate,
      korean: Sky.getKorean(item.sky),
      chinese: Sky.getChinese(item.sky),
      wuxing: Sky.getWuxing(item.sky),
    };
  }
}

type GroundValue = [
  number,
  string,
  string,
  (string | number)[],
  string[],
  JiJangGan
];

//지지 클래스
export class Ground {
  static 자: GroundValue = [
    1,
    "자",
    "子",
    YinYang.양,
    WuXing.수,
    new JiJangGan({ sky: "임", rate: 10.1 }, null, { sky: "계", rate: 20.2 }),
  ];
  static 축: GroundValue = [
    2,
    "축",
    "丑",
    YinYang.음,
    WuXing.토,
    new JiJangGan(
      { sky: "계", rate: 9.3 },
      { sky: "신", rate: 3.1 },
      { sky: "기", rate: 18.6 }
    ),
  ];
  static 인: GroundValue = [
    3,
    "인",
    "寅",
    YinYang.양,
    WuXing.목,
    new JiJangGan(
      { sky: "무", rate: 7.2 },
      { sky: "병", rate: 7.2 },
      { sky: "갑", rate: 16.5 }
    ),
  ];
  static 묘: GroundValue = [
    4,
    "묘",
    "卯",
    YinYang.음,
    WuXing.목,
    new JiJangGan({ sky: "갑", rate: 10.3 }, null, { sky: "을", rate: 20.6 }),
  ];
  static 진: GroundValue = [
    5,
    "진",
    "辰",
    YinYang.양,
    WuXing.토,
    new JiJangGan(
      { sky: "을", rate: 9.3 },
      { sky: "계", rate: 3.1 },
      { sky: "무", rate: 18.6 }
    ),
  ];
  static 사: GroundValue = [
    6,
    "사",
    "巳",
    YinYang.음,
    WuXing.화,
    new JiJangGan(
      { sky: "무", rate: 7.2 },
      { sky: "경", rate: 7.2 },
      { sky: "병", rate: 16.5 }
    ),
  ];
  static 오: GroundValue = [
    7,
    "오",
    "午",
    YinYang.양,
    WuXing.화,
    new JiJangGan(
      { sky: "병", rate: 10 },
      { sky: "기", rate: 10.1 },
      { sky: "정", rate: 11.2 }
    ),
  ];
  static 미: GroundValue = [
    8,
    "미",
    "未",
    YinYang.음,
    WuXing.토,
    new JiJangGan(
      { sky: "정", rate: 9.3 },
      { sky: "을", rate: 3.1 },
      { sky: "기", rate: 18.6 }
    ),
  ];
  static 신: GroundValue = [
    9,
    "신",
    "申",
    YinYang.양,
    WuXing.금,
    new JiJangGan(
      { sky: "무", rate: 7.2 },
      { sky: "임", rate: 7.2 },
      { sky: "경", rate: 16.5 }
    ),
  ];
  static 유: GroundValue = [
    10,
    "유",
    "酉",
    YinYang.음,
    WuXing.금,
    new JiJangGan({ sky: "경", rate: 10.3 }, null, { sky: "신", rate: 20.6 }),
  ];
  static 술: GroundValue = [
    11,
    "술",
    "戌",
    YinYang.양,
    WuXing.토,
    new JiJangGan(
      { sky: "신", rate: 9.3 },
      { sky: "정", rate: 3.1 },
      { sky: "무", rate: 18.6 }
    ),
  ];
  static 해: GroundValue = [
    12,
    "해",
    "亥",
    YinYang.음,
    WuXing.수,
    new JiJangGan(
      { sky: "무", rate: 7.2 },
      { sky: "갑", rate: 7.2 },
      { sky: "임", rate: 16.5 }
    ),
  ];

  //todo 타입정의
  private convertToObj(ground: GroundValue) {
    const converted = {
      idx: ground[0],
      kr: ground[1],
      ch: ground[2],
      wuXing: {
        kr: ground[3][0],
        ch: ground[3][1],
        color: ground[3][2],
      },
      yinYang: {
        kr: ground[4][0],
        ch: ground[4][1],
      },
      jiJangGan: {
        first: ground[5].first,
        second: ground[5].second,
        third: ground[5].third,
      },
    };
    return converted;
  }

  //todo 타입정의
  static getAll() {
    let AllGrounds: GroundReturn[] = [];
    GroundMembers.forEach((el: Grounds) =>
      AllGrounds.push(new Ground().convertToObj(Ground[el]))
    );
    return AllGrounds;
  }
  static getOne(key: Grounds): GroundReturn {
    return new Ground().convertToObj(Ground[key]);
  }
}
