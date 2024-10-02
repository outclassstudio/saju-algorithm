export const yinyang = {
  yang: {
    id: 1,
    kr: "양",
    ch: "陽",
  },
  yin: {
    id: -1,
    kr: "양",
    ch: "陰",
  },
};

export const wuxing = {
  wood: {
    kr: "목",
    ch: "木",
    color: "#4CAF50",
  },
  fire: {
    kr: "화",
    ch: "火",
    color: "#F44336",
  },
  earth: {
    kr: "토",
    ch: "土",
    color: "#FFD600",
  },
  metal: {
    kr: "금",
    ch: "金",
    color: "#E0E0E0",
  },
  water: {
    kr: "수",
    ch: "水",
    color: "#039BE5",
  },
};

export const ganji = {
  a: { id: 1, kr: "갑", ch: "甲", wuxing: wuxing.wood, yinyang: yinyang.yang },
  b: { id: 2, kr: "을", ch: "乙", wuxing: wuxing.wood, yinyang: yinyang.yin },
  c: { id: 3, kr: "병", ch: "丙", wuxing: wuxing.fire, yinyang: yinyang.yang },
  d: { id: 4, kr: "정", ch: "丁", wuxing: wuxing.fire, yinyang: yinyang.yin },
  e: { id: 5, kr: "무", ch: "戊", wuxing: wuxing.earth, yinyang: yinyang.yang },
  f: { id: 6, kr: "기", ch: "己", wuxing: wuxing.earth, yinyang: yinyang.yin },
  g: { id: 7, kr: "경", ch: "庚", wuxing: wuxing.metal, yinyang: yinyang.yang },
  h: { id: 8, kr: "신", ch: "辛", wuxing: wuxing.metal, yinyang: yinyang.yin },
  i: { id: 9, kr: "임", ch: "壬", wuxing: wuxing.water, yinyang: yinyang.yang },
  j: { id: 10, kr: "계", ch: "癸", wuxing: wuxing.water, yinyang: yinyang.yin },
};

interface JiJangGanDTO {
  userName: string;
  lastName: string;
  email: string;
  password: string;
}

class JiJangGan {
  public first: string;
  public second: string;
  public third: string;

  constructor(first: string, second: string, third: string) {
    this.first = first;
    this.second = second;
    this.third = third;
  }
}
