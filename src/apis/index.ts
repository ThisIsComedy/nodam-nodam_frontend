import { instance, loginInstance } from "./instance";

export const googleLogin = async (code: string) => {
    try {
        const { data } = await loginInstance.post(`/api/auth/login?code=${code}`);
        return data;
    } catch (error) {
    }
};

export const register = async (body: {email: string, name: string, smokePerDay: number, cigarettePrice: number}) => {
    const { data } = await instance.put("/api/auth/register", body);
    return data;
}
