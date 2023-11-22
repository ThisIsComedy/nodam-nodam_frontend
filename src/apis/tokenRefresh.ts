import {instance} from "./instance";

export const tokenRefresh = async () => {
    try {
        const { data } = await instance.put("/", {
            headers: {
                "Authorization-refresh": localStorage.getItem("refreshToken"),
            }
        });

        localStorage.setItem("accessToken", data.accessToken);
    } catch {
        alert("다시 로그인 해주세요.");
        localStorage.clear();
        window.location.href = "/onboarding";
    }
}