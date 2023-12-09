export interface RankType {
  userName: string;
  profileImage: string;
  threeDayContinuityNoSmoke: number;
}

export const rankTypeDefault: RankType[] = [{
  userName: "",
  profileImage: "",
  threeDayContinuityNoSmoke: 0
}];