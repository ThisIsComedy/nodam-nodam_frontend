import {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import Layout from "../../layout/Layout";
import color from "../../styles/color";
import Screen from "../../layout/Screen/Screen";
import {googleLogin} from "../../apis";

const GoogleLogin = () => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");

        const onLogin = async () => {
            if (accessToken && refreshToken) {
                navigate("/");
            }

            const code = searchParams.get("code") || "";
            const data = await googleLogin(code);

            if (data) {
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshToken);

                navigate("/");
            }
        }

        onLogin();
    }, []);

    return (
        <>
            <Layout>
                <Screen bgcolor={color.white}>
                    <p>lsdjfk</p>
                </Screen>
            </Layout>
        </>
    );
};

export default GoogleLogin;
