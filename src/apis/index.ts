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

export const logout = async () => {
    const { data } = await instance.delete("/api/auth/logout", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
    });
    return data;
}

export const getStats = async () => {
    const res = await instance.get("/api/stats/details", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
    });
    return res?.data;
}

export const getProfile = async () => {
    const { data } = await instance.get("/api/user/profile", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
    });
    return data;
};

export const getSimpleStats = async () => {
    const { data } = await instance.get("/api/stats/summary", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
    });
    return data;
};

export const getGrassChart = async () => {
    const { data } = await instance.get("/api/smoke", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
    });
    return data;
};

export const getRanking = async () => {
    const { data } = await instance.get("/api/rank", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
    });
    return data;
}