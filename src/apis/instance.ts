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
    (error) => {
        const { code, message } = error.response.data;

        if (code === 403 && message === "만료된 토큰입니다.") {
            tokenRefresh();
        }

        return Promise.reject(error);
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
            window.location.href = "/onboarding";
        }

        if (code === 404 || code === 422) {
            alert("추가 정보 기입을 위해 회원가입 페이지로 이동합니다.");
            localStorage.setItem("email", etc);
            window.location.href = "/register";
        }

        return Promise.reject(error);
    }
);