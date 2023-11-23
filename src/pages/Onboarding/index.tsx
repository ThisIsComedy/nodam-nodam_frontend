import React from 'react';
import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";
import LargeButton from "../../components/atoms/LargeButton";
import Footer from "../../components/Footer/Footer";
import envConfig from "../../config";

const Onboarding = () => {

    const onLogin = () => {
        localStorage.setItem("isRegister", "false");
    }

    return (
        <>
            <Layout>
                <Screen bgcolor={color.white}>
                    <Container>
                        <HeaderWrap>
                            <SubHeading>난 네가 노담이었으면 좋겠어</SubHeading>
                            <Logo src="/assets/global/nodamnodamlogo.png"/>
                        </HeaderWrap>
                        <StartWrap>
                            <a href={envConfig.googleLoginUrl}>
                                <LargeButton text="시작하기" isLarge={true} />
                            </a>
                            <LoginWrap>
                                <Guide>이미 계정이 있나요?</Guide>
                                <a href={envConfig.googleLoginUrl}>
                                    <Login onClick={onLogin}>로그인</Login>
                                </a>
                            </LoginWrap>
                        </StartWrap>
                    </Container>
                    <Footer isGNB={false} page={1}/>
                </Screen>
            </Layout>
        </>
    );
};

export default Onboarding;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin: 228px auto 289px;
`;

const SubHeading = styled.div`
  ${font.H5}
  color: ${color.gray600}
`;

const Logo = styled.img`
  width: 300px;
`;

const StartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const LoginWrap = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
`;

const Guide = styled.div`
  color: ${color.gray700};
  ${font.p1}
`;

const Login = styled.button`
  color: ${color.nodamGreen};
  ${font.p1}
`;