import { loginInstance } from "./instance";

export const googleLogin = async (code: string) => {
    const { data } = await loginInstance.post(`/api/auth/login?code=${code}`);
    return data;
};
