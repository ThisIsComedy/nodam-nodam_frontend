import React, {useEffect} from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import Footer from "../../components/Footer/Footer";
import KnowHowBox from "../../components/KnowHowBox/KnowHowBox";
import ThreeDaysCheckBox from "../../components/ThreeDaysCheckBox/ThreeDaysCheckBox";
import GrassChart from "../../components/GrassChart/GrassChart";
import RateBox from "../../components/RateBox/RateBox";

const Home = () => {
	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");
		const refreshToken = localStorage.getItem("refreshToken");

		localStorage.removeItem("email");
		localStorage.removeItem("isRegister");

		if (!(accessToken && refreshToken)) {
			alert("로그아웃 되었습니다");
			window.location.href = "/";
		}
	}, []);

	return (
		<Layout>
			<Screen bgcolor={color.gray100}>
				<Section>
					<Header>
						<Logo src='/assets/home/nodamnodamlogo_gray.png' />
					</Header>
					<BoxContainer>
						<KnowHowBox />
						<ThreeDaysCheckBox />
						{/*<GrassChart />*/}
						<RateBox title="3일 연속 금연 횟수" rate={90} type="회" />
						<RateBox title="아낀 금액" rate={9000} type="원" />
					</BoxContainer>
					<RetryButton>금연 재도전하기</RetryButton>
				</Section>
				<Footer isGNB={true} page={1} />
			</Screen>
		</Layout>
	);
};

export default Home;

const Section = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Header = styled.div`
	display: flex;
	width: 100%;
	height: 48px;
	padding: 0 16px;
	align-items: center;
`;

const Logo = styled.img`
	height: 28px;
`;

const RetryButton = styled.button`
	display: flex;
	width: 160px;
	height: 56px;
	align-items: center;
	justify-content: center;
	background-color: ${color.gray900};
	color: ${color.white};
	${font.H5};
	border-radius: 16px;
	margin-top: 57px;
`;