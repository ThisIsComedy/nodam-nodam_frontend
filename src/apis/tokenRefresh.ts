import {instance} from "./instance";

export const tokenRefresh = async () => {
    try {
        const { data } = await instance.put("/api/auth/refresh", null, {
            headers: {
                "Authorization-refresh": `Bearer ${localStorage.getItem("refreshToken")}`,
            }
        });
        localStorage.setItem("accessToken", data.accessToken);
    } catch {
        alert("다시 로그인 해주세요.");
        localStorage.clear();
        window.location.href = "/";
    }
}