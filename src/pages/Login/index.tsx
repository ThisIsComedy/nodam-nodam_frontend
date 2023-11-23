import {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import Layout from "../../layout/Layout";
import color from "../../styles/color";
import Screen from "../../layout/Screen/Screen";
import {googleLogin} from "../../apis";
import styled from "styled-components";

const GoogleLogin = () => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");

        const onLogin = async () => {
            if (accessToken && refreshToken) {
                navigate("/home");
            }

            const code = searchParams.get("code") || "";
            const data = await googleLogin(code);

            if (data) {
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshToken);

                navigate("/home");
            }
        }

        onLogin();
    }, []);

    return (
        <>
            <Layout>
                <Screen bgcolor={color.white}>
                    <Wrap>
                        <Symbol src="/assets/global/nodamnodamsymbol.png" />
                        <Loading src="/assets/login/loading.gif" />
                    </Wrap>
                </Screen>
            </Layout>
        </>
    );
};

export default GoogleLogin;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Symbol = styled.img`
  width: 120px;
  position: absolute;
  z-index: 1;
  margin-bottom: 90px;
`;

const Loading = styled.img`
  width: 120px;
  position: absolute;
  margin-top: 90px;
`;
