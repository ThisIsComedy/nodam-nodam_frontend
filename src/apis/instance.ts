import axios, { AxiosInstance } from "axios";
import envConfig from "../config";
import { tokenRefresh } from "./tokenRefresh";

export const instance: AxiosInstance = axios.create({
    baseURL: envConfig.apiUrl,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        try {
            const { code } = error.response.data;

            if (code === 403) {
                await tokenRefresh();
                location.reload();
                return;
            }

            return Promise.reject(error);
        } catch (err) {
            console.log(err);
        }
    }
);

export const loginInstance = axios.create({
    baseURL: envConfig.apiUrl,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

loginInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

loginInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { code, etc } = error.response.data;

        if (code === 401) {
            alert("다시 로그인 해주세요.");
            window.location.href = "/";
        }

        if (code === 404 || code === 422) {
            if (localStorage.getItem("isRegister") === "false") {
                alert("존재하지 않는 유저입니다! 회원가입 페이지로 이동합니다.");
            }

            localStorage.setItem("email", etc);
            window.location.href = "/register";
        }

        return Promise.reject(error);
    }
);