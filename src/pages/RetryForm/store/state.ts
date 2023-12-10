import { atom } from "recoil";
import { Moment, Place, SmokeType, Why } from "../types";

export const smokeInfoState = atom<SmokeType>({
  key: "registerState",
  default: {
    moment: "GO_TO_THE_OFFICE",
    place: "IN_FRONT_OF_HOME",
    why: "WITHDRAWAL_SYMPTOM"
  }
});