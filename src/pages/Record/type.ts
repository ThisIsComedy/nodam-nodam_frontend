export interface StatsType {
  continuityNoSmoke: number;
  maximumContinuityNoSmoke: number;
  noSmokeDay: number;
  saveMoney: number;
  smokeCount: number;
  threeDayContinuityNoSmoke: number;
}

export const statsTypeDefault: StatsType = {
  continuityNoSmoke: 0,
  maximumContinuityNoSmoke: 0,
  noSmokeDay: 0,
  saveMoney: 0,
  smokeCount: 0,
  threeDayContinuityNoSmoke: 0,
};

export interface GrassType {
  userCreatedAt: string;
  userSmokedAtResponses: string[];
}

export const grassTypeDefault: GrassType = {
  userCreatedAt: "",
  userSmokedAtResponses: []
}

export interface SmokeType {
  when: string;
  whenCount: number;
  where: string;
  whereCount: number;
  why: string;
  whyCount: number;
}

export const smokeTypeDefault: SmokeType = {
  when: "",
  whenCount: 0,
  where: "",
  whereCount: 0,
  why: "",
  whyCount: 0,
};
