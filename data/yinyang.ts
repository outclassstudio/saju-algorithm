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

type YinYangKey = "음" | "양";

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

  static getKorean(key: YinYangKey) {
    return YinYang[key][0];
  }
  static getChinese(key: YinYangKey) {
    return YinYang[key][1];
  }
}

interface WuXingKeys extends BaseKey {
  color: string;
}

type WuXings = "목" | "화" | "토" | "금" | "수";

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

export const skyMembers: Skies[] = [
  "갑",
  "을",
  "병",
  "정",
  "무",
  "기",
  "경",
  "신",
  "임",
  "계",
];

export type Skies =
  | "갑"
  | "을"
  | "병"
  | "정"
  | "무"
  | "기"
  | "경"
  | "신"
  | "임"
  | "계";

type SkyType = [number, string, string, string[], (string | number)[]];

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

interface JiJangGanInput {
  sky: Skies;
  rate: number;
}

interface JiJangGanOutput {
  rate: number;
  korean: string;
  chinese: string;
  wuxing: string[];
}

export class JiJangGan {
  private first: JiJangGanOutput | null;
  private second: JiJangGanOutput | null;
  private third: JiJangGanOutput | null;

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

export class Ground {
  static 자 = [
    1,
    "자",
    "子",
    YinYang.양,
    WuXing.수,
    new JiJangGan({ sky: "임", rate: 10.1 }, null, { sky: "계", rate: 20.2 }),
  ];
  static 축 = [
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
  static 인 = [
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
  static 묘 = [
    4,
    "묘",
    "卯",
    YinYang.음,
    WuXing.목,
    new JiJangGan({ sky: "갑", rate: 10.3 }, null, { sky: "을", rate: 20.6 }),
  ];
  static 진 = [
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
  static 사 = [
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
  static 오 = [
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
  static 미 = [
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
  static 신 = [
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
  static 유 = [
    10,
    "유",
    "酉",
    YinYang.음,
    WuXing.금,
    new JiJangGan({ sky: "경", rate: 10.3 }, null, { sky: "신", rate: 20.6 }),
  ];
  static 술 = [
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
  static 해 = [
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
  private convertToObj(ground: SkyType) {
    return {
      idx: ground[0],
      kr: ground[1],
      ch: ground[2],
      wuXing: {
        kr: ground[3][0],
        ch: ground[3][1],
        color: ground[3][2],
      },
      YinYang: {
        kr: ground[4][0],
        ch: ground[4][1],
      },
    };
  }

  //todo 타입정의
  // static getAll() {
  //   let AllSkies: any[] = [];
  //   skyMembers.forEach((el: Skies) =>
  //     AllSkies.push(new Ground().convertToObj(Ground[el]))
  //   );
  //   return AllSkies;
  // }
  // static getOne(key: Skies) {
  //   return new Ground().convertToObj(Ground[key]);
  // }
}
