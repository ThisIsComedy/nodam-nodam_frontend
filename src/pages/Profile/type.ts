export interface UserInfo {
  name: string;
  email: string;
  profileUrl: string;
  noSmokeDay: number;
  maximumContinuityNoSmoke: number;
  saveMoney: number;
  threeDayContinuityNoSmoke: number;
}

export const userInfoDefault = {
  name: "",
  email: "",
  profileUrl: "",
  noSmokeDay: 0,
  maximumContinuityNoSmoke: 0,
  saveMoney: 0,
  threeDayContinuityNoSmoke: 0
};