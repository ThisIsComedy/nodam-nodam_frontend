import React, { useEffect, useState } from 'react';
import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import color from "../../styles/color";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import font from "../../styles/font";
import { getProfile } from "../../apis";
import LargeButton from "../../components/atoms/LargeButton";

const Complete = () => {

  const [name, setName] = useState<string>("");

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await getProfile();
      setName(res.name);
    };

    getUserInfo();
  }, []);

  return (
      <Layout>
        <Screen bgcolor={color.white}>
          <Header>
            <Title>금연 재도전</Title>
            <CloseIcon src="/assets/global/close.svg" onClick={() => window.location.href = "/home" } />
          </Header>
          <Section>
            <Wrap>
              <Logo src="/assets/global/nodamnodamsymbol.png" />
              <Subtitle>이제 다시 금연 시작!</Subtitle>
              <Contents>
                답변하신 정보는 {name}님의 흡연 원인 통계에 사용됩니다. <br />
                포기하지 않고 다시 도전하는 것이 가장 중요하답니다.
              </Contents>
            </Wrap>
            <LargeButton text="금연 시작하기" isLarge={true} onClick={() => window.location.href = "/home"} />
          </Section>
          <Footer isGNB={false} page={0} />
        </Screen>
      </Layout>
  );
};

export default Complete;

const Section = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
  margin-top: 160px;
`;

const Header = styled.div`
	display: flex;
	width: 100%;
	height: 48px;
	padding: 0 16px;
	align-items: center;
	justify-content: center;
`;

const Title = styled.p`
	${font.H3};
	color: ${color.black};
`;

const CloseIcon = styled.img`
	position: absolute;
	width: 24px;
	height: 24px;
	right: 16px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	cursor: pointer;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 231px;
`;

const Logo = styled.img`
  width: 120px;
  height: 108px;
  margin-bottom: 4px;
`;

const Subtitle = styled.p`
  ${font.H2};
  color: ${color.black};
`;

const Contents = styled.p`
  ${font.p2};
  color: ${color.gray600};
  text-align: center;
`;