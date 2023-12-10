export type Step = 1 | 2 | 3;

export interface SmokeType {
  moment: Moment,
  place: Place,
  why: Why
}

export type Moment =
    | "GO_TO_THE_OFFICE"
    | "LEAVE_THE_OFFICE"
    | "ON_WORK"
    | "AFTER_LUNCH"
    | "AFTER_DINNER"
    | "NIGHT"
    | "DAWN"
    | "AFTER_DRINKING";


export type Place =
    | "IN_FRONT_OF_HOME"
    | "AT_WORK"
    | "RESTAURANT"
    | "ALLEY"
    | "PARK"
    | "INTERNET_CAFE"
    | "STREET";


export type Why =
    | "WITHDRAWAL_SYMPTOM"
    | "HOW_ABOUT"
    | "JUST_WANT";