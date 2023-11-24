import { atom } from "recoil";
import { UserAdditionalInfo } from "./type";

export const registerState = atom<UserAdditionalInfo>({
    key: "registerState",
    default: {
        email: "",
        name: "",
        smokePerDay: 0,
        cigarettePrice: 0,
    }
});