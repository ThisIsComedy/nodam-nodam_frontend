import instance from "./CustomAxios";

export const googleLogin = async (code: string) => {
    const { data } = await instance.post(`/api/auth/login?code=${code}`);
    return data;
};
